import { z } from 'zod';

export const schema = z.object({
    name: z.string().min(3, 'Invalide Name'),
    email: z.string().email('Invalide Email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    password_confirmation: z.string().min(8, 'Password must be at least 8 characters'),
    phone_number: z.string().min(9,'Phone number need to ahve more then 9 digits')
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

export type SignUpFormValue = z.infer<typeof schema>;
