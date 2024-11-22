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
      return { success: false, error: "Invalid email format." };
    }

    const { email } = validateFields.data;

    const existingEmail = await getUserByEmail(email);
    if (existingEmail) {
      console.warn(`Email already sent before: ${email}`);
      return { success: false, error: "Email has already been sent before." };
    }

    try {
      const createdEmail = await db.email.create({
        data: { email },
      });
      console.log("Database entry created:", createdEmail);
    } catch (dbError) {
      console.error("Database insertion failed:", dbError);
      return { success: false, error: "Failed to save email to the database." };
    }

    try {
      await sendEmailNotification(email);
      console.log("Email notification sent successfully to:", email);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      return { success: false, error: "Failed to send the email notification." };
    }

    return { success: true, message: "Thank you for being part of this journey with us!" };
  } catch (error) {
    if (process.env.NODE_ENV === "development" || process.env.NEXT_PUBLIC_SHOW_DETAILED_ERRORS) {
      console.error("Unexpected error in sendEmail function:", error);
    } else {
      console.error("Unexpected error occurred:", error);
    }

    return { success: false, error: "An error occurred. Please try again later." };
  }
};
