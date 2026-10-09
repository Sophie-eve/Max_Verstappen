import { NextRequest, NextResponse } from "next/server";
import { FanSignupSchema, NewsletterQuickSchema } from "@/lib/validation";
import { supabaseServer, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Check honeypot field
    if (body.hp_website && body.hp_website.length > 0) {
      // Bot detected - reject silently or cleanly
      return NextResponse.json(
        { error: "Spam submission rejected" },
        { status: 400 }
      );
    }

    // 2. Determine if this is full fan signup or compact newsletter signup
    const isFullSignup = Boolean(body.fullName || body.country || body.favouriteMoment);

    let name = "Grid Member";
    let email = "";
    let country = "Global";
    let favourite_moment = "All Victories";
    let message: string | null = null;

    if (isFullSignup) {
      const result = FanSignupSchema.safeParse(body);
      if (!result.success) {
        const errorMessages = result.error.issues.map((issue) => issue.message);
        return NextResponse.json(
          {
            error: "Validation failed",
            details: errorMessages,
          },
          { status: 422 }
        );
      }
      name = result.data.fullName;
      email = result.data.email.toLowerCase();
      country = result.data.country;
      favourite_moment = result.data.favouriteMoment;
      message = result.data.message ? result.data.message.trim() : null;
    } else {
      const result = NewsletterQuickSchema.safeParse(body);
      if (!result.success) {
        return NextResponse.json(
          {
            error: "Invalid email address",
            details: result.error.issues.map((i) => i.message),
          },
          { status: 422 }
        );
      }
      email = result.data.email.toLowerCase();
      name = "Grid Member";
    }

    // 3. Insert into Supabase if configured
    if (isSupabaseConfigured && supabaseServer) {
      const { data, error } = await supabaseServer
        .from("fan_signups")
        .insert([
          {
            name,
            email,
            country,
            favourite_moment,
            message,
          },
        ])
        .select()
        .single();

      if (error) {
        // Postgres error 23505 = unique_violation on email
        if (error.code === "23505" || error.message.toLowerCase().includes("unique")) {
          return NextResponse.json(
            {
              duplicate: true,
              message: `You're already on the grid with ${email}! Welcome back to the Max Army.`,
              name,
            },
            { status: 200 }
          );
        }

        console.error("Supabase insert error:", error);
        return NextResponse.json(
          { error: "Failed to register on the grid. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: `Welcome to the grid, ${name}! Your telemetry has been recorded.`,
          data: { id: data?.id, name, email },
        },
        { status: 201 }
      );
    }

    // 4. Local simulation mode when Supabase credentials are pending in .env.local
    return NextResponse.json(
      {
        success: true,
        simulated: true,
        message: `Welcome to the grid, ${name}!`,
        note: "Supabase credentials not configured in .env.local; recorded in simulation mode.",
        data: { name, email },
      },
      {
        status: 200,
        headers: { "X-Storage-Mode": "simulation" },
      }
    );
  } catch (err: unknown) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred on the pit wall." },
      { status: 500 }
    );
  }
}
