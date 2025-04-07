import React from 'react';
import { Laptop, Monitor, Wifi, Printer, Mail, BookOpen, Shield, Clock, Users, Star } from 'lucide-react';

function ServiceCard({ icon, title, description, imageUrl }: { icon: React.ReactNode; title: string; description: string; imageUrl?: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
      {imageUrl && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="relative z-10">
        <div className="mb-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, location, text }: { name: string; location: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
        <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
        <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
        <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
        <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
      </div>
      <p className="text-gray-600 italic mb-4">{text}</p>
      <div className="text-sm">
        <span className="font-semibold text-gray-900">{name}</span>
        <span className="text-gray-500"> • {location}</span>
      </div>
    </div>
  );
}

export function Diensten() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Onze Diensten
          </h2>
          <p className="text-lg text-gray-600">
            ITaandeur biedt computerhulp en IT-ondersteuning aan huis, afgestemd op uw behoeften. 
            Van eenvoudige reparaties tot complexe netwerkproblemen, onze experts staan voor u klaar. 
            Wij zorgen voor snelle en effectieve oplossingen, zodat uw apparaten optimaal blijven functioneren.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon={<Laptop className="w-8 h-8" />}
            title="Computer Hulp aan Huis"
            description="Windows, Mac of Linux: wij lossen uw computerproblemen op. Van trage systemen tot software-issues, wij hebben de expertise."
            imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
          />
          <ServiceCard
            icon={<Monitor className="w-8 h-8" />}
            title="Windows Installatie"
            description="Professionele installatie van Windows met alle benodigde drivers en essentiële software voor optimale prestaties."
            imageUrl="https://images.unsplash.com/photo-1624571409108-e9d886790166?auto=format&fit=crop&q=80"
          />
          <ServiceCard
            icon={<Wifi className="w-8 h-8" />}
            title="Wifi & Netwerk"
            description="Traag internet of wifi-problemen? Wij zorgen voor een stabiele verbinding en optimale netwerkprestaties."
            imageUrl="https://images.unsplash.com/photo-1551636898-47668aa61de2?auto=format&fit=crop&q=80"
          />
          <ServiceCard
            icon={<Printer className="w-8 h-8" />}
            title="Printer/Scanner"
            description="Installatie en probleemoplossing voor al uw randapparatuur. Van netwerkprinters tot multifunctionele apparaten."
            imageUrl="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80"
          />
          <ServiceCard
            icon={<Mail className="w-8 h-8" />}
            title="E-mail Configuratie"
            description="Professionele configuratie van uw e-mailaccounts op al uw apparaten, met backup en synchronisatie."
            imageUrl="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80"
          />
          <ServiceCard
            icon={<BookOpen className="w-8 h-8" />}
            title="IT Training"
            description="Persoonlijke training voor optimaal computergebruik, afgestemd op uw niveau en behoeften."
            imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mt-12 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Waarom Kiezen voor ITaandeur?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Betrouwbaar</h4>
              <p className="text-gray-600">Meer dan 10 jaar ervaring in IT-dienstverlening</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Snel</h4>
              <p className="text-gray-600">Meestal dezelfde dag nog beschikbaar</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Persoonlijk</h4>
              <p className="text-gray-600">Service op maat voor particulieren en bedrijven</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Wat Onze Klanten Zeggen</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Peter de Vries"
              location="Utrecht"
              text="Mijn laptop was erg traag geworden en ITaandeur heeft dit snel en vakkundig opgelost. Zeer tevreden met de service!"
            />
            <TestimonialCard
              name="Maria Jansen"
              location="Amersfoort"
              text="Eindelijk een IT-bedrijf dat duidelijk communiceert en problemen echt oplost. Aanrader voor iedereen met computerproblemen!"
            />
            <TestimonialCard
              name="Johan van Dam"
              location="Hilversum"
              text="Professionele service aan huis. Ze namen de tijd om alles goed uit te leggen en de prijs was zeer redelijk."
            />
          </div>
        </div>
      </div>
    </div>
  );
}