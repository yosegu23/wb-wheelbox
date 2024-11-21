import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  } catch (error: any) {
    console.error("Failed to send email:", error);
    if (error.response) {
      console.error("Resend API response:", error.response.data);
    }
    throw new Error("Email sending failed");
  }
};
