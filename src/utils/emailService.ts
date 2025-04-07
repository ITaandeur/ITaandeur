import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

interface EmailData {
  to_email: string;
  to_name: string;
  message: string;
  subject: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const templateParams = {
      to_email: data.to_email,
      to_name: data.to_name,
      message: data.message,
      subject: data.subject,
      cc_email: 'abdelhakimazmaa@outlook.com',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};