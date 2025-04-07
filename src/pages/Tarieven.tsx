import React from 'react';
import { Star } from 'lucide-react';

const tarieven = [
  { dienst: 'Windows Installatie', prijs: '€80' },
  { dienst: 'Computer gebruiksklaar maken', prijs: '€60' },
  { dienst: 'Computer/laptop APK', prijs: '€60' },
  { dienst: 'Software installeren/verwijderen', prijs: '€50' },
  { dienst: 'Netwerk instellen', prijs: '€50' },
  { dienst: 'Netwerk/wifi probleem oplossen', prijs: '€50' },
  { dienst: 'Printer/Scanner installeren', prijs: '€50' },
  { dienst: 'Probleem printer/scanner', prijs: '€50' },
  { dienst: 'E-mail installeren', prijs: '€60' },
  { dienst: 'E-mail probleem oplossen', prijs: '€60' },
  { dienst: 'Overige computer- en apparaatstoringen', prijs: 'Prijs op aanvraag' },
  { dienst: 'IT-Lessen en trainingen', prijs: 'Prijs op aanvraag' }
];

const reviews = [
  {
    name: "Willem Bakker",
    date: "15 maart 2024",
    text: "Zeer tevreden met de prijs-kwaliteitverhouding. Het probleem werd snel en efficiënt opgelost."
  },
  {
    name: "Lisa van der Meer",
    date: "10 maart 2024",
    text: "Transparante prijzen en geen verrassingen achteraf. Precies wat je wilt bij computerhulp!"
  }
];

export function Tarieven() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Onze Tarieven
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left">Dienst</th>
                  <th className="px-6 py-4 text-right">Prijs</th>
                </tr>
              </thead>
              <tbody>
                {tarieven.map((tarief, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 text-gray-800">{tarief.dienst}</td>
                    <td className="px-6 py-4 text-right text-gray-800">{tarief.prijs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Voorrijkosten</h3>
            <p className="text-gray-700">
              Wij rekenen slechts €9,50 voorrijkosten binnen ons servicegebied. Voor locaties buiten ons reguliere 
              werkgebied kunnen de voorrijkosten verschillen. Neem contact met ons op voor een exacte prijsopgave.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Klantervaringen met onze Tarieven</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">{review.text}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">{review.name}</span>
                    <span className="text-gray-500"> • {review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}