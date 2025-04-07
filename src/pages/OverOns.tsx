import React from 'react';
import { Shield, Award, Users, MapPin } from 'lucide-react';

export function OverOns() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Over ITaandeur
            </h2>
            <p className="text-lg text-gray-700">
              ITaandeur is uw betrouwbare partner voor alle IT-gerelateerde problemen. Met jarenlange ervaring 
              in de IT-sector bieden wij professionele oplossingen voor zowel particulieren als kleine bedrijven. 
              Wij streven ernaar om snelle en effectieve oplossingen te leveren, zodat u zich kunt concentreren op 
              wat voor u belangrijk is.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Onze Missie</h3>
              <p className="text-gray-700">
                Wij streven ernaar om hoogwaardige IT-ondersteuning toegankelijk te maken voor iedereen. 
                Met onze persoonlijke aanpak en transparante werkwijze zorgen we ervoor dat technologie 
                werkt vóór u, niet tegen u.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Onze Expertise</h3>
              <p className="text-gray-700">
                Ons team bestaat uit gecertificeerde IT-professionals met brede kennis van zowel hardware als software. 
                We blijven continu op de hoogte van de laatste ontwikkelingen om u de beste service te kunnen bieden.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-xl p-8 text-white mb-16">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Onze Aanpak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Persoonlijke service op maat</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Duidelijke communicatie en transparante prijzen</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Snelle responstijd en flexibele beschikbaarheid</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>Geen oplossing = geen kosten</p>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <MapPin className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Ons Werkgebied</h3>
            <p className="text-gray-700 mb-4">
              Wij zijn actief in onder andere: Utrecht, Amsterdam, Almere, Groenekan, Bilthoven, De Bilt, Hilversum, 
              Baarn, Soest, Laren, Naarden, Huizen, Amersfoort, Nieuwegein, IJsselstein, Vianen, Maarssen, Breukelen, 
              Vinkeveen, Abcoude, Uithoorn, Woerden, Zeist, Bunnik, Driebergen, Den Dolder, Houten, Vleuten, en De Meern.
            </p>
            <p className="text-gray-700 italic">
              Woont u niet in een van deze regio's? Neem gerust contact met ons op zodat we kunnen kijken of er een passende oplossing is.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}