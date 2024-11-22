"use server";

import * as z from "zod";
import { SubmitEmail } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { sendEmailNotification } from "@/lib/mail";

export const sendEmail = async (values: z.infer<typeof SubmitEmail>) => {
  try {
    const validateFields = SubmitEmail.safeParse(values);

    if (!validateFields.success) {
      console.error("Validation failed:", validateFields.error);
      return { error: "Invalid fields!" };
    }

    const { email } = validateFields.data;

    const existingEmail = await getUserByEmail(email);
    console.log("Existing email found:", existingEmail);

    if (existingEmail) {
      return { error: "Email is already sent before!" };
    }

    try {
      const createdEmail = await db.email.create({
        data: { email },
      });
      console.log("Database entry created:", createdEmail);
    } catch (error) {
      console.error("Database insertion failed:", error);
      return { error: "Failed to save email to the database." };
    }

    await sendEmailNotification(email);
    console.log("Email notification sent successfully");

    return { success: "Thank you for being part of this journey with us!" };
  } catch (error) {
    console.error("Error in sendEmail function:", error);
    return { error: "An error occurred. Please try again later." };
  }
};
