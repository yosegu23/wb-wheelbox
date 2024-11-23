import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_API_URL || "https://www.wheelbox.tech";

export const sendEmailNotification = async (email: string) => {
  try {
    if (!resend || !process.env.RESEND_API_KEY) {
      throw new Error("Missing API Key for Resend");
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background: #000; color: #fff; line-height: 1.6; max-width: 600px; padding: 20px; margin: 0 auto;">
        <!-- Centered Image -->
        <div style="text-align: center; margin-bottom: 20px;">
          <img 
            src="${domain}/Images/Thankyou.png" 
            style="max-width: 100%; height: auto; display: block; margin: 0 auto;" 
            width="500" 
            alt="Thank You Image"
          >
        </div>

        <!-- Left-Aligned Content -->
        <h3 style="font-size: 24px; margin-bottom: 16px;">Welcome aboard! 🎉</h3>
        <p style="margin-bottom: 16px;">
          We're thrilled to have you join our community. As a valued member, you'll be the first to hear about exciting updates, exclusive offers, and everything we're working on to make your experience exceptional.
        </p>
        <p style="margin-bottom: 16px;">
          Keep an eye on your inbox—great things are coming your way!
        </p>
        <p style="margin-bottom: 16px;">
          If you have any questions or just want to say hello, feel free to reach out to us at 
          <a href="mailto:dev.wheelbox@gmail.com" style="color: #007bff; text-decoration: none;">dev.wheelbox@gmail.com</a>.
        </p>
        <p style="margin-bottom: 16px;">
          Once again, thank you for trusting us. We're here to make a difference, together with you!
        </p>
        <p style="margin-top: 20px;">Warm regards,</p>
        <p><strong>The WheelBox Team</strong></p>

        <!-- Social Media Section -->
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #555;">
          <p style="margin-bottom: 10px; font-size: 16px; font-weight: bold;">Get in touch with us on:</p>
          <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 10px; padding: 10px;">
            <div style="text-align: center;">
              <a href="https://www.instagram.com/wheelbox.id" target="_blank" style="text-decoration: none; color: #fff;">
                <p style="margin: 0; font-size: 14px;">@wheelbox.id | </p>
              </a>
            </div>
            <div style="text-align: center;">
              <a href="https://wa.me/6285723217867" target="_blank" style="text-decoration: none; color: #fff;">
                <p style="margin: 0; font-size: 14px;">  0857-2321-7867</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: "info@wheelbox.tech",
      to: email,
      subject: "Thank You For Joining Us!",
      html: emailHtml,
    });

  } catch (error: unknown) {

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
