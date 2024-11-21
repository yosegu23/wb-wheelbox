import * as z from "zod"

export const SubmitEmail = z.object({
    email: z.string().email({ message: "Email must have to fill.." })
})