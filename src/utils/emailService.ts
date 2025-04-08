import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_w08hgdr';  // Vervang door jouw Service ID
const EMAILJS_TEMPLATE_ID = 'template_htuyfbe';  // Vervang door jouw Template ID
const EMAILJS_PUBLIC_KEY = 'xkhUsexwXMEYYW-7H';  // Vervang door jouw Public Key

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
      cc_email: 'abdelhakimazmaa@outlook.com',  // Voeg dit toe voor een CC naar jezelf, indien nodig
    };

    // Verstuur de e-mail naar de beheerder (info@itaandeur.nl)
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    // Verstuur een bevestigingsmail naar de klant
    const confirmationMessage = `
      Beste ${data.to_name},

      Bedankt voor je bericht! We hebben je aanvraag ontvangen en zullen zo spoedig mogelijk contact met je opnemen.

      Hier zijn de gegevens die je hebt ingediend:
      
      Onderwerp: ${data.subject}
      Bericht: ${data.message}

      Met vriendelijke groet,
      Team ITaandeur
    `;

    const confirmationEmailData = {
      to_email: data.to_email,
      to_name: data.to_name,
      message: confirmationMessage,
      subject: 'Bevestiging van je bericht - ITaandeur',
    };

    // Verstuur de bevestigingsmail naar de klant
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      confirmationEmailData,
      EMAILJS_PUBLIC_KEY
    );

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};
