import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'apurvagargote@gmail.com'
      },
      PUBLIC_KEY
    );
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};