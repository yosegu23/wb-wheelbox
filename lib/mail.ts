import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY) || `re_PiJuNRej_C1eSyxFvgN1QqSFgqS6HKfak`;

const domain = process.env.NEXT_PUBLIC_API_URL || "https://www.wheelbox.tech";

export const sendEmailNotification = async (email: string) => {
  try {
    console.log("Sending email to:", email);
    console.log("Domain used:", domain);
    console.log("API Key:", process.env.RESEND_API_KEY);
    console.log("Domain:", process.env.NEXT_PUBLIC_API_URL);

    const response = await resend.emails.send({
      from: "info@wheelbox.tech",
      to: email,
      subject: "Thank You For Join With Us!",
      html: `<img src="${domain}/Assets/Images/Thankyou.png">`,
    });

    console.log("Email sent successfully:", response);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error in sendEmailNotification:", error.message);
      if ('response' in error) {
        const apiError = error as { response: { data: unknown } };
        console.error("API Error Response:", apiError.response.data);
      }
    } else {
      console.error("Unknown error occurred:", error);
    }
    throw new Error("Email sending failed");
  }
};
