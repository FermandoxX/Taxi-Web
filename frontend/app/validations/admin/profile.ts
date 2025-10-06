import { email, string, z } from "zod";

export const schema = z.object({
  name: z.string().min(3, "Invalide Name"),
  email: z.string().email("Invalid email"),
  phone_number: z
    .string()
    .min(9, "Phone number need to have more then 9 digits"),
});

export type ProfileValues = z.infer<typeof schema>;
