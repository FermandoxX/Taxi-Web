import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(7, "Password must be at least 7 characters"),
});

export type SignInFormValues = z.infer<typeof schema>;
