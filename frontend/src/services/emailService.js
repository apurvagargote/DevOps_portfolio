import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

export const sendEmail = async (formData) => {
  try {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('EmailJS configuration missing');
    }

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'apurvagargote@gmail.com'
      }
    );
    return { success: true, result };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};