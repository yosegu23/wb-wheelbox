import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY) || `re_PiJuNRej_C1eSyxFvgN1QqSFgqS6HKfak`;

const domain = process.env.NEXT_PUBLIC_API_URL || "https://www.wheelbox.tech";

export const sendEmailNotification = async (email: string) => {
  try {
    console.log("Sending email to:", email);
    const response = await resend.emails.send({
      from: "dev.wheelbox@gmail.com",
      to: email,
      subject: "Thank You For Join With Us!",
      html: `<img src="${domain}/Assets/Images/Thankyou.png">`
    });
    console.log("Email sent successfully:", response);
  } catch (error: unknown) {
    // Type guard to handle different error shapes without using `any`
    if (error instanceof Error) {
      console.error("Failed to send email:", error.message);
      // Check if `error` contains a `response` object
      if ('response' in error) {
        const apiError = error as { response: { data: unknown } };
        console.error("Resend API response:", apiError.response.data);
      }
    } else {
      console.error("Unknown error occurred:", error);
    }
    throw new Error("Email sending failed");
  }
};
