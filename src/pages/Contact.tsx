import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { sendEmail } from '../utils/emailService';

export function Contact() {
  const [contactForm, setContactForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bericht: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        to_email: 'info@itaandeur.nl',
        to_name: contactForm.naam,
        message: `
          Naam: ${contactForm.naam}
          Email: ${contactForm.email}
          Telefoon: ${contactForm.telefoon}
          Bericht: ${contactForm.bericht}
        `,
        subject: 'Nieuw contactformulier bericht'
      };

      const result = await sendEmail(emailData);

      if (result.success) {
        toast.success('Uw bericht is succesvol verzonden!');
        // Send confirmation email to customer
        await sendEmail({
          to_email: contactForm.email,
          to_name: contactForm.naam,
          subject: 'Bevestiging van uw bericht - ITaandeur',
          message: `
            Beste ${contactForm.naam},

            Bedankt voor uw bericht. We hebben uw aanvraag ontvangen en zullen zo spoedig mogelijk contact met u opnemen.

            Met vriendelijke groet,
            Team ITaandeur
          `
        });
        
        setContactForm({
          naam: '',
          email: '',
          telefoon: '',
          bericht: ''
        });
      } else {
        toast.error('Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch (error) {
      toast.error('Er is iets misgegaan. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-24 bg-gray-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          Contact
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Wilt u een storing melden of heeft u een vraag? Neem dan contact met ons op; 
          wij zullen spoedig contact met u opnemen.
        </p>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="naam" className="block text-sm font-medium text-gray-700">Naam</label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  value={contactForm.naam}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mailadres</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700">Telefoonnummer (optioneel)</label>
                <input
                  type="tel"
                  id="telefoon"
                  name="telefoon"
                  value={contactForm.telefoon}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="bericht" className="block text-sm font-medium text-gray-700">Uw bericht</label>
                <textarea
                  id="bericht"
                  name="bericht"
                  value={contactForm.bericht}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}