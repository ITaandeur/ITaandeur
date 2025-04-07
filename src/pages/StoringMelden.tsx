import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { sendEmail } from '../utils/emailService';

export function StoringMelden() {
  const [storingFormData, setStoringFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    adres: '',
    omschrijving: '',
    apparaatType: '',
    besturingssysteem: '',
    extraOpmerkingen: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStoringSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        to_email: 'info@itaandeur.nl',
        to_name: storingFormData.naam,
        message: `
          Nieuwe storing gemeld:
          
          Naam: ${storingFormData.naam}
          Email: ${storingFormData.email}
          Telefoon: ${storingFormData.telefoon}
          Adres: ${storingFormData.adres}
          
          Type apparaat: ${storingFormData.apparaatType}
          Besturingssysteem: ${storingFormData.besturingssysteem}
          
          Omschrijving: ${storingFormData.omschrijving}
          
          Extra opmerkingen: ${storingFormData.extraOpmerkingen}
        `,
        subject: 'Nieuwe storing gemeld'
      };

      const result = await sendEmail(emailData);

      if (result.success) {
        toast.success('Uw storing is succesvol gemeld!');
        // Send confirmation email to customer
        await sendEmail({
          to_email: storingFormData.email,
          to_name: storingFormData.naam,
          subject: 'Bevestiging van uw storingsmelding - ITaandeur',
          message: `
            Beste ${storingFormData.naam},

            Bedankt voor uw storingsmelding. We hebben uw melding ontvangen en zullen zo spoedig mogelijk contact met u opnemen om het probleem te verhelpen.

            Details van uw melding:
            - Type apparaat: ${storingFormData.apparaatType}
            - Besturingssysteem: ${storingFormData.besturingssysteem}
            - Omschrijving: ${storingFormData.omschrijving}

            Met vriendelijke groet,
            Team ITaandeur
          `
        });

        setStoringFormData({
          naam: '',
          email: '',
          telefoon: '',
          adres: '',
          omschrijving: '',
          apparaatType: '',
          besturingssysteem: '',
          extraOpmerkingen: ''
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStoringFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-24 bg-gray-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          Storing Melden
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Heeft u een storing of technisch probleem? Meld het eenvoudig via onderstaand formulier. 
          Wij nemen zo snel mogelijk contact met u op om een oplossing te bieden.
        </p>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleStoringSubmit} className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">1. Contactinformatie</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="naam" className="block text-sm font-medium text-gray-700">Naam</label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    value={storingFormData.naam}
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
                    value={storingFormData.email}
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
                    value={storingFormData.telefoon}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="adres" className="block text-sm font-medium text-gray-700">Adres</label>
                  <input
                    type="text"
                    id="adres"
                    name="adres"
                    value={storingFormData.adres}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">2. Probleem Details</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="omschrijving" className="block text-sm font-medium text-gray-700">Omschrijving van het probleem</label>
                  <textarea
                    id="omschrijving"
                    name="omschrijving"
                    value={storingFormData.omschrijving}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="apparaatType" className="block text-sm font-medium text-gray-700">Type apparaat</label>
                  <select
                    id="apparaatType"
                    name="apparaatType"
                    value={storingFormData.apparaatType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Selecteer type</option>
                    <option value="computer">Computer</option>
                    <option value="laptop">Laptop</option>
                    <option value="printer">Printer</option>
                    <option value="scanner">Scanner</option>
                    <option value="netwerk">Netwerkapparatuur</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="besturingssysteem" className="block text-sm font-medium text-gray-700">Besturingssysteem</label>
                  <select
                    id="besturingssysteem"
                    name="besturingssysteem"
                    value={storingFormData.besturingssysteem}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={isSubmitting}
                  >
                    <option value="">Selecteer besturingssysteem</option>
                    <option value="windows">Windows</option>
                    <option value="macos">macOS</option>
                    <option value="linux">Linux</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">3. Extra Informatie</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="extraOpmerkingen" className="block text-sm font-medium text-gray-700">Extra opmerkingen</label>
                  <textarea
                    id="extraOpmerkingen"
                    name="extraOpmerkingen"
                    value={storingFormData.extraOpmerkingen}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Verzenden...' : 'Storing Melden'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}