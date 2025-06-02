import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    console.log("Checking if email exists:", email);
    const user = await db.email.findUnique({
      where: { email },
    });
    console.log("Existing user found:", user);
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
};

export const getClients = async (email: string) => {
  try {
    const project = await db.projects.findUnique({
      where: { email },
    });
    return project;
  } catch (error) {
    console.error("Error fetching project by email:", error);
    return null;
  }
}
