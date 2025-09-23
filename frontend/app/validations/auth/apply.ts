import { z } from "zod";

// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
// const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const schema = z
  .object({
    name: z.string().min(3, "Invalide Name"),
    email: z.string().email("Invalide Email"),
    password: z.string().min(7, "Password must be at least 7 characters"),
    password_confirmation: z
      .string()
      .min(7, "Password must be at least 7 characters"),
    phone_number: z
      .string()
      .min(9, "Phone number need to ahve more then 9 digits"),
    // driver_license: z
    //   .union([
    //     z
    //       .instanceof(File, { message: "Image is required" })
    //       .refine((file) => !file || file.size !== 0 || file.size <= 5000000, {
    //         message: "Max size exceeded",
    //       }),
    //     z.string().optional(),
    //   ])
    //   .refine((value) => value instanceof File || typeof value === "string", {
    //     message: "Image is required",
    //   }),
    driver_license: z.any().optional(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ApplyFormValue = z.infer<typeof schema>;
