import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(3, "Invalide Name"),
    email: z.string().email("Invalid email"),
    phone_number: z
      .string()
      .min(9, "Phone number need to have more then 9 digits"),
    old_password: z
      .string()
      .min(7, "Old Password must be at least 7 characters"),
    new_password: z.string().min(7, "Password must be at least 7 characters"),
    new_password_confirmation: z
      .string()
      .min(7, "Password Confirm must be at least 7 characters"),
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ProfileValues = z.infer<typeof schema>;
