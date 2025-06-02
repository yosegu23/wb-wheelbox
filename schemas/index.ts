import * as z from "zod"

export const SubmitEmail = z.object({
    email: z.string().email({ message: "Email must have to fill.." })
})

export const SubmitClients = z.object({
    name: z.string().max(50, { message: "Name must be less than 50 characters." }),
    email: z.string().email({ message: "Email must have to fill.." }),
    description: z.string().max(500, { message: "Description must be less than 500 characters." }),
})