import { z } from "zod";

export const FanSignupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters long." })
    .max(80, { message: "Full name cannot exceed 80 characters." }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please provide a valid email address." }),
  country: z
    .string()
    .min(1, { message: "Please select your country." }),
  favouriteMoment: z
    .string()
    .min(1, { message: "Please select your favourite Max moment." }),
  message: z
    .string()
    .trim()
    .max(600, { message: "Message cannot exceed 600 characters." })
    .optional()
    .or(z.literal("")),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to receive fan club updates.",
    }),
  // Honeypot field - must remain empty
  hp_website: z.string().max(0, { message: "Spam detected." }).optional(),
});

export type FanSignupInput = z.infer<typeof FanSignupSchema>;

export const NewsletterQuickSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please enter a valid email address." }),
  hp_website: z.string().max(0, { message: "Spam detected." }).optional(),
});

export type NewsletterQuickInput = z.infer<typeof NewsletterQuickSchema>;
