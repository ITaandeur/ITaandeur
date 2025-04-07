import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "Wat voor computerhulp bieden jullie aan?",
    answer: "Wij helpen met het oplossen van computerproblemen, het instellen van software en hardware, netwerk- en wifi-problemen, printerinstallaties, en het geven van IT-advies en trainingen."
  },
  {
    question: "Hoe kan ik een afspraak maken?",
    answer: "U kunt een afspraak maken via onze website, per e-mail of telefonisch. Wij proberen u zo snel mogelijk te helpen."
  },
  {
    question: "Hoe snel kunnen jullie langskomen?",
    answer: "Dit hangt af van de beschikbaarheid. In veel gevallen kunnen wij binnen 24 tot 48 uur langskomen."
  },
  {
    question: "In welke regio's bieden jullie service aan?",
    answer: "Wij bieden computerhulp aan huis in de regio Utrecht en omliggende plaatsen, zoals Amsterdam, Almere, Amersfoort, Hilversum en meer. Neem contact met ons op om te zien of wij bij u langskomen."
  },
  {
    question: "Wat als de medewerker voor de deur staat en niemand is aanwezig?",
    answer: "Indien er niemand aanwezig is op het afgesproken tijdstip en wij geen bericht van u hebben ontvangen, kan een nieuwe afspraak nodig zijn. In sommige gevallen kunnen er kosten in rekening worden gebracht voor de gemiste afspraak."
  },
  {
    question: "Stel dat de klus een vervolgafspraak krijgt, wat dan?",
    answer: "Als het probleem niet in één afspraak opgelost kan worden, plannen we in overleg met u een vervolgafspraak. Wij zorgen ervoor dat u vooraf duidelijk weet wat de vervolgstappen en eventuele extra kosten zijn."
  },
  {
    question: "Hoe lang duurt het om een storing op te lossen?",
    answer: "De duur van het oplossen van een storing hangt af van de complexiteit van het probleem. Eenvoudige problemen kunnen binnen 30 tot 60 minuten worden opgelost, terwijl complexere problemen meer tijd kunnen vergen. Wij streven ernaar om storingen zo snel en efficiënt mogelijk te verhelpen."
  }
];

const testimonials = [
  {
    name: "Emma de Boer",
    date: "20 maart 2024",
    text: "De FAQ sectie hielp mij enorm bij het begrijpen van de dienstverlening. Alle informatie was duidelijk en relevant."
  },
  {
    name: "Thomas van der Berg",
    date: "18 maart 2024",
    text: "Prettig dat alle belangrijke vragen zo helder worden beantwoord. Gaf mij het vertrouwen om voor ITaandeur te kiezen."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Veelgestelde Vragen
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold">Feedback van Klanten</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">{testimonial.name}</span>
                    <span className="text-gray-500"> • {testimonial.date}</span>
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