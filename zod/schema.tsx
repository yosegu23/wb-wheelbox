import * as z from "zod"

export const formSchema = z.object({
    company: z.string().min(3),
    email: z.string().email(),
    describe: z.string().min(10),
});