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
      console.error("Validation error:", validateFields.error);
      return { error: "Invalid fields!" };
    }

    const { email } = validateFields.data;
    console.log("Email being validated:", email);

    const existingEmail = await getUserByEmail(email);
    console.log("Existing email check result:", existingEmail);

    if (existingEmail) {
      return { error: "Email is already sent before!" };
    }

    const createdEmail = await db.email.create({
      data: { email },
    });
    console.log("Database entry created:", createdEmail);

    await sendEmailNotification(email);
  } catch (error) {
    console.error("Error in sendEmail function:", error);
    return { error: "Failed to send the email notification. Please try again." };
  }

  return { success: "Thank you for being part of this journey with us. The best is yet to come!" };
};
