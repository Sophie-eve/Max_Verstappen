-- ==============================================================================
-- MAX VERSTAPPEN FAN SITE: SUPABASE DATABASE SCHEMA
-- ==============================================================================
-- Run this script in the Supabase SQL Editor:
-- Dashboard -> SQL Editor -> New Query -> Paste & Run
-- ==============================================================================

-- 1. Create the fan_signups table
CREATE TABLE IF NOT EXISTS public.fan_signups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    favourite_moment VARCHAR(150) NOT NULL,
    message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Add Unique constraint on email (case-insensitive indexing)
CREATE UNIQUE INDEX IF NOT EXISTS fan_signups_email_lower_idx 
    ON public.fan_signups (LOWER(email));

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.fan_signups ENABLE ROW LEVEL SECURITY;

-- 4. Create Policy: Public INSERT only
-- Allows the frontend/API route using the anon key to insert new fan signups
CREATE POLICY "Allow public insert to fan_signups"
    ON public.fan_signups
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 5. No Public Read Policy
-- By default with RLS enabled, omitting a SELECT policy for anon/authenticated 
-- prevents public users from reading or scraping fan submissions.
-- Only authenticated administrators in the Supabase Dashboard (or the service_role key)
-- can view or export the data.

-- ==============================================================================
-- ADMIN DASHBOARD GUIDE:
-- 1. Navigate to: https://app.supabase.com/project/_/editor
-- 2. Select the "fan_signups" table in the Table Editor to view, filter, 
--    and export submissions as CSV.
-- 3. All emails are protected and confidential.
-- ==============================================================================
