import * as z from "zod"

export const formSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    description: z.string().min(10),
});