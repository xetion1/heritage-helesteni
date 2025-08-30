import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Users, MapPin, Star, Clock, ArrowRight } from 'lucide-react'

export default function Home() {
  const museums = [
    {
      id: 'casa-bunicii',
      name: 'Casa Bunicii',
      description: 'Muzeu tradițional care păstrează obiecte vechi de uz casnic și patrimoniul satului',
      image: '/images/casa-bunicii.jpg',
      rating: 4.8,
      location: 'Tazlău, Neamț',
    },
    {
      id: 'palatul-culturii',
      name: 'Palatul Culturii Iași',
      description: 'Simbol al Iașului construit în stil neogotic, găzduind multiple muzee',
      image: '/images/palatul-culturii.jpg',
      rating: 4.9,
      location: 'Iași',
    },
  ]

  const workshops = [
    {
      id: 'broderie-traditionala',
      title: 'Broderie Tradițională pe Ie',
      duration: '3 ore',
      price: 150,
      maxParticipants: 8,
      image: '/images/broderie.jpg',
      instructor: 'Elena din Țibănești',
    },
    {
      id: 'tesut-covoare',
      title: 'Țesut Covoare Moldovenești',
      duration: '4 ore',
      price: 200,
      maxParticipants: 6,
      image: '/images/tesut.jpg',
      instructor: 'Maria Popescu',
    },
    {
      id: 'olarit',
      title: 'Olărit Tradițional',
      duration: '2 ore',
      price: 120,
      maxParticipants: 10,
      image: '/images/olarit.jpg',
      instructor: 'Ion Mureșan',
    },
  ]

  const upcomingEvents = [
    {
      id: 'ziua-portului',
      name: 'Ziua Portului Popular',
      date: '24 Iunie 2025',
      description: 'Sărbătoarea renașterii culturii tradiționale',
      image: '/images/port-popular.jpg',
    },
    {
      id: 'festival-toamna',
      name: 'Festivalul de Toamnă',
      date: 'Septembrie 2025',
      description: 'Muzică, dansuri și meșteșuguri tradiționale',
      image: '/images/festival.jpg',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Playfair_Display']">
            Descoperiți Patrimoniul Cultural al Heleșteniului
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explorați muzeele tradiționale, participați la ateliere meșteșugărești autentice 
            și trăiți experiențe culturale unice în inima Moldovei
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/muzee"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#B91C1C] text-white font-semibold rounded-lg hover:bg-[#991B1B] transition-colors"
            >
              Explorează Muzeele
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/ateliere"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#B91C1C] font-semibold rounded-lg hover:bg-[#FEF2F2] transition-colors"
            >
              Rezervă un Atelier
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Museums Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] mb-4 font-['Playfair_Display']">
              Muzee și Colecții
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Descoperiți bogăția culturală prin colecțiile noastre de obiecte tradiționale 
              și artefacte istorice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {museums.map((museum) => (
              <div key={museum.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white mb-2">
                      <Star className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B] mr-1" />
                      <span className="font-semibold">{museum.rating}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{museum.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-2">{museum.name}</h3>
                  <p className="text-[#44403C] mb-4">{museum.description}</p>
                  <Link
                    href={`/muzee/${museum.id}`}
                    className="inline-flex items-center text-[#B91C1C] font-semibold hover:text-[#991B1B] transition-colors"
                  >
                    Află mai multe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] mb-4 font-['Playfair_Display']">
              Ateliere Meșteșugărești
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Învățați tehnici tradiționale de la meșteri locali și creați propriile opere de artă
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-[#B91C1C] font-bold">{workshop.price} RON</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] mb-2">{workshop.title}</h3>
                  <p className="text-sm text-[#78716C] mb-4">cu {workshop.instructor}</p>
                  <div className="flex items-center justify-between text-sm text-[#44403C] mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>Max {workshop.maxParticipants} pers.</span>
                    </div>
                  </div>
                  <Link
                    href={`/ateliere/${workshop.id}`}
                    className="block w-full text-center py-2 bg-[#B91C1C] text-white font-semibold rounded-lg hover:bg-[#991B1B] transition-colors"
                  >
                    Rezervă Acum
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNESCO Heritage Banner */}
      <section className="py-12 bg-[#0EA5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Patrimoniu UNESCO în Apropiere</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              La doar 108 km distanță, puteți vizita Bisericile pictate din Moldova - 
              capodopere ale artei bizantine recunoscute de UNESCO
            </p>
            <Link
              href="/despre#unesco"
              className="inline-flex items-center px-6 py-3 bg-white text-[#0EA5E9] font-semibold rounded-lg hover:bg-[#F0F9FF] transition-colors"
            >
              Descoperă Mai Mult
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] mb-4 font-['Playfair_Display']">
              Evenimente Viitoare
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Participați la sărbătorile tradiționale și festivalurile culturale ale regiunii
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-1/3 h-40 bg-gray-200" />
                <div className="flex-1 p-6">
                  <div className="flex items-center text-[#F59E0B] text-sm font-semibold mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-2">{event.name}</h3>
                  <p className="text-[#44403C] text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#B91C1C] to-[#7F1D1D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-['Playfair_Display']">
            Începeți Călătoria Culturală Astăzi
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Rezervați vizita dvs. și descoperiți bogăția tradițiilor românești
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#B91C1C] font-semibold rounded-lg hover:bg-[#FEF2F2] transition-colors"
            >
              Contactează-ne
            </Link>
            <Link
              href="/rezervare"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Planifică Vizita
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}