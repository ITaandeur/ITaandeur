import React from 'react';
import { ChevronRight, Clock, Users, Shield, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
      <div className="text-white mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-200">{text}</p>
    </div>
  );
}

function ServicePreview() {
  const services = [
    {
      title: "Computer Reparatie",
      description: "Snelle en professionele reparatie van uw computer of laptop",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80"
    },
    {
      title: "Wifi Oplossingen",
      description: "Optimale wifi-dekking in uw hele huis of kantoor",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
    },
    {
      title: "Data Recovery",
      description: "Herstel van verloren of beschadigde bestanden",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="relative group overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 z-10"/>
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-200 text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      text: "Zeer professionele service. Mijn computerproblemen werden snel en efficiënt opgelost.",
      author: "Linda van der Berg",
      role: "Ondernemer"
    },
    {
      text: "Eindelijk een IT-bedrijf dat duidelijk communiceert en problemen echt oplost!",
      author: "Peter de Vries",
      role: "ZZP'er"
    },
    {
      text: "Snelle service en zeer klantvriendelijk. Absolute aanrader!",
      author: "Sophie Jansen",
      role: "Particulier"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Wat Onze Klanten Zeggen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              ITaandeur: Uw Partner voor IT-Oplossingen
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              ITaandeur biedt snelle en betrouwbare computerhulp aan huis voor problemen met computers, laptops, wifi en printers. 
              Wij lossen storingen op, verbeteren trage laptops en helpen met netwerkproblemen.
            </p>
            <p className="text-xl text-gray-200 mb-8">
              Onze experts zorgen voor vakkundige ondersteuning, persoonlijk advies en effectieve oplossingen, 
              zodat uw apparaten optimaal blijven functioneren. Beschikbaar in Utrecht, Amsterdam, Almere & omgeving.
            </p>
            <p className="text-xl text-gray-200 mb-8">
              Twijfelt u of uw regio binnen ons servicegebied valt? Neem gerust contact met ons op!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/storing-melden" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                Plan een afspraak <ChevronRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/tarieven" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all backdrop-blur-sm transform hover:scale-105"
              >
                Bekijk tarieven
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <InfoCard icon={<Clock className="w-6 h-6" />} title="Snelle Service" text="Meestal dezelfde dag nog hulp beschikbaar" />
              <InfoCard icon={<Users className="w-6 h-6" />} title="Persoonlijke Aanpak" text="Duidelijke uitleg en oplossingen op maat" />
              <InfoCard icon={<Shield className="w-6 h-6" />} title="Vaste prijzen" text="Geen verrassingen achteraf" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Diensten</h2>
          <ServicePreview />
          <div className="text-center mt-12">
            <Link 
              to="/diensten" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Bekijk al onze diensten <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Klaar om uw IT-problemen op te lossen?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op voor een snelle en professionele oplossing
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Neem contact op <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}