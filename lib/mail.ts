import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_API_URL || "https://www.wheelbox.tech";

export const sendEmailNotification = async (email: string) => {
  try {
    if (!resend || !process.env.RESEND_API_KEY) {
      throw new Error("Missing API Key for Resend");
    }

    console.log("Sending email to:", email);

    const response = await resend.emails.send({
      from: "info@wheelbox.tech",
      to: email,
      subject: "Thank You For Joining Us!",
      html: `<img src="${domain}/Assets/Images/Thankyou.png">`,
    });

    console.log("Email sent successfully:", response);
  } catch (error: unknown) {
    console.error("Error in sendEmailNotification:", error);

    if (error instanceof Error) {
      console.error("Error Message:", error.message);
    } else if (error && typeof error === "object" && "response" in error) {
      const apiError = error as { response?: { data: unknown } };
      
      if (apiError.response) {
        console.error("API Error Response:", apiError.response.data);
      } else {
        console.error("Unknown API error occurred:", apiError);
      }
    } else {
      console.error("Unexpected error occurred:", error);
    }

    throw new Error("Email sending failed");
  }
};
