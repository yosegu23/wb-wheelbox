"use server";

import * as z from "zod";
import { SubmitClients } from "@/schemas";
import { db } from "@/lib/db";
import { getClients } from "@/data/user";
import { sendClientsNotification } from "@/lib/mail";

export const sendEmail = async (values: z.infer<typeof SubmitClients>) => {
  const validateFields = SubmitClients.safeParse(values);
  if (!validateFields.success) {
    return { success: false, error: "Invalid email format." };
  }

  const { email, name, description } = validateFields.data;

  const existingEmail = await getClients(email);
  if (existingEmail) {
    return { success: false, error: "Email has already been sent before." };
  }

  await db.projects.create({ data: { email, name, description } });

  await sendClientsNotification(email);

  return { success: true, message: "Thank you for joining us! 🎉" };
};
