import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(3, "Invalide Name"),
    email: z.string().email("Invalid email"),
    phone_number: z
      .string()
      .min(9, "Phone number need to have more then 9 digits"),
    password: z.string().min(8, "Password need to be 8 charaacter and longer"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export type CreateAdminValues = z.infer<typeof schema>;
