import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Users, Award, Calendar, Heart, Mountain, ChevronRight } from 'lucide-react'

export default function AboutPage() {
  const timeline = [
    {
      year: 'Secolul XIV',
      title: 'Prima Atestare',
      description: 'Primele mențiuni documentare ale așezărilor din zona Heleșteni în cronicile moldovenești.'
    },
    {
      year: '1456',
      title: 'Epoca lui Ștefan cel Mare',
      description: 'Dezvoltarea comunității sub domnia lui Ștefan cel Mare, perioada de înflorire culturală a Moldovei.'
    },
    {
      year: 'Secolul XVIII',
      title: 'Meșteșuguri Tradiționale',
      description: 'Dezvoltarea meșteșugurilor locale - țesutul covoarelor, olăritul și broderia devin renumite în regiune.'
    },
    {
      year: '1859',
      title: 'Unirea Principatelor',
      description: 'Heleșteni devine parte din România modernă, păstrând tradițiile moldovenești.'
    },
    {
      year: '1991',
      title: 'Patrimoniu UNESCO',
      description: 'Bisericile pictate din Moldova sunt înscrise în patrimoniul UNESCO, la doar 108 km de Heleșteni.'
    },
    {
      year: '2025',
      title: 'Turism Cultural',
      description: 'Lansarea platformei digitale pentru promovarea patrimoniului cultural local și turismului sustenabil.'
    }
  ]

  const team = [
    {
      name: 'Vasile Manolachi (Țuțu)',
      role: 'Fondator Casa Bunicii',
      description: 'Păstrător al tradițiilor locale, a creat primul muzeu privat din zonă dedicat obiectelor tradiționale.',
      image: '/images/team/vasile.jpg'
    },
    {
      name: 'Elena Popescu',
      role: 'Coordonator Ateliere',
      description: 'Organizează și coordonează atelierele meșteșugărești, asigurând transmiterea autentică a tehnicilor tradiționale.',
      image: '/images/team/elena.jpg'
    },
    {
      name: 'Prof. Dr. Ion Muntean',
      role: 'Istoric și Cercetător',
      description: 'Specialist în istoria Moldovei, autor a numeroase lucrări despre patrimoniul cultural al regiunii.',
      image: '/images/team/ion.jpg'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Autenticitate',
      description: 'Păstrăm și promovăm tradițiile autentice ale Moldovei, fără compromisuri comerciale.'
    },
    {
      icon: Users,
      title: 'Comunitate',
      description: 'Implicăm activ comunitatea locală în toate activitățile noastre culturale.'
    },
    {
      icon: Award,
      title: 'Excelență',
      description: 'Oferim experiențe de cea mai înaltă calitate în turismul cultural.'
    },
    {
      icon: Mountain,
      title: 'Sustenabilitate',
      description: 'Promovăm turismul responsabil care protejează patrimoniul pentru generațiile viitoare.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('/images/helesteni-panorama.jpg')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Playfair_Display']">
            Povestea Noastră
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Din inima Moldovei, păstrăm vie flacăra tradițiilor strămoșești pentru generațiile viitoare
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1C1917] mb-6 font-['Playfair_Display']">
                Bine ați venit în Heleșteni
              </h2>
              <p className="text-lg text-[#44403C] mb-4">
                Heleșteni este o comună situată în județul Iași, în regiunea istorică Moldova a României. 
                Cu o istorie bogată ce datează din secolul XIV, localitatea noastră a fost martora 
                dezvoltării culturale și spirituale a Moldovei de-a lungul secolelor.
              </p>
              <p className="text-lg text-[#44403C] mb-4">
                Situat strategic între Iași și munții Carpați, Heleșteni servește ca poartă de 
                acces către celebrele mănăstiri pictate din Bucovina, recunoscute de UNESCO ca 
                parte din patrimoniul mondial.
              </p>
              <p className="text-lg text-[#44403C]">
                Astăzi, ne dedicăm păstrării și promovării tradițiilor locale prin muzee, 
                ateliere meșteșugărești și evenimente culturale care oferă vizitatorilor 
                o experiență autentică a vieții tradiționale românești.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Comuna Heleșteni, Județul Iași</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C1917] mb-12 text-center font-['Playfair_Display']">
            Istoria Noastră
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#D6D3D1]" />
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <span className="text-[#F59E0B] font-bold text-sm">{event.year}</span>
                    <h3 className="text-xl font-bold text-[#1C1917] mt-2 mb-2">{event.title}</h3>
                    <p className="text-[#44403C]">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F59E0B] rounded-full border-4 border-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNESCO Heritage */}
      <section id="unesco" className="py-16 bg-gradient-to-r from-[#0EA5E9] to-[#0369A1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-6 font-['Playfair_Display']">
              Patrimoniu UNESCO în Apropiere
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              La doar 108 km de Heleșteni se află Bisericile Pictate din Moldova - 
              capodopere ale artei bizantine din secolele XV-XVI
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">Mănăstirea Voroneț</h3>
                <p className="text-white/80">"Capela Sixtină a Estului" - faimoasă pentru albastrul său unic</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">Mănăstirea Moldovița</h3>
                <p className="text-white/80">Frescele exterioare reprezintă scene biblice și istorice</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">Mănăstirea Sucevița</h3>
                <p className="text-white/80">Cea mai mare dintre mănăstirile pictate, cu ziduri fortificate</p>
              </div>
            </div>
            <Link
              href="/excursii/manastiri-pictate"
              className="inline-flex items-center px-6 py-3 bg-white text-[#0EA5E9] font-semibold rounded-lg hover:bg-[#F0F9FF] transition-colors"
            >
              Planifică o Excursie
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1917] mb-4 font-['Playfair_Display']">
              Misiunea și Valorile Noastre
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Ne dedicăm conservării și promovării patrimoniului cultural al Moldovei 
              prin experiențe turistice autentice și educative
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] mb-2">{value.title}</h3>
                <p className="text-[#44403C]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1917] mb-4 font-['Playfair_Display']">
              Echipa Noastră
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Oamenii pasionați care fac posibilă păstrarea și transmiterea tradițiilor
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-[#F59E0B]/20 to-[#B91C1C]/20" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-1">{member.name}</h3>
                  <p className="text-[#F59E0B] font-semibold mb-3">{member.role}</p>
                  <p className="text-[#44403C]">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#B91C1C] to-[#7F1D1D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-['Playfair_Display']">
            Faceți Parte din Povestea Noastră
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Vizitați-ne și descoperiți bogăția culturală a Moldovei prin experiențe autentice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#B91C1C] font-semibold rounded-lg hover:bg-[#FEF2F2] transition-colors"
            >
              Contactați-ne
            </Link>
            <Link
              href="/muzee"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explorați Muzeele
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}