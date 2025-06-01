"use server";

import * as z from "zod";
import { SubmitEmail } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { sendEmailNotification } from "@/lib/mail";

export const sendEmail = async (values: z.infer<typeof SubmitEmail>) => {
  const validateFields = SubmitEmail.safeParse(values);
  if (!validateFields.success) {
    return { success: false, error: "Invalid email format." };
  }

  const { email } = validateFields.data;

  const existingEmail = await getUserByEmail(email);
  if (existingEmail) {
    return { success: false, error: "Email has already been sent before." };
  }

  await db.email.create({ data: { email } });

  await sendEmailNotification(email);

  return { success: true, message: "Thank you for joining us! 🎉" };
};
