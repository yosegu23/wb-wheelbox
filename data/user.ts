import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.email.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    return null;
  }
};
