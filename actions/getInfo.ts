"use server"

import * as z from "zod"
import { SubmitEmail } from "@/schemas"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"
import { sendEmailNotification } from "@/lib/mail"

export const sendEmail = async (values: z.infer<typeof SubmitEmail>) => {
    try {
        const validateFields = SubmitEmail.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields!" }
    }

    const { email } = validateFields.data;

    const existingEmail = await getUserByEmail(email);

    if (existingEmail) {
        return { error: "Email is already sent before!" }
    }

    await db.email.create({
        data: {
            email,
        }
    });
        await sendEmailNotification(email);
    } catch (error) {
        return { error: "Failed to send the email notification. Please try again." }
    }

    return { success: "Thank you for being part of this journey with us. The best is yet to come!" }
}