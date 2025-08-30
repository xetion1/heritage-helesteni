import Link from 'next/link'
import { MapPin, Clock, Users, Star, Phone, Mail, ArrowRight, Filter } from 'lucide-react'

export default function MuseumsPage() {
  const museums = [
    {
      id: 'casa-bunicii',
      name: 'Casa Bunicii (Casa lui Țuțu)',
      location: 'Tazlău, Neamț',
      description: 'Muzeu tradițional care păstrează peste 50 de obiecte vechi de uz casnic, inclusiv piese rare precum melesteu, zolitor și vârtelniță. Gazdat de Vasile Manolachi, muzeul oferă o privire autentică asupra vieții rurale tradiționale.',
      collection: [
        'Ustensile tradiționale de bucătărie',
        'Unelte agricole istorice',
        'Obiecte textile și de țesut',
        'Ceramică și olărit tradițional'
      ],
      openingHours: 'Cu programare',
      price: { adult: 20, child: 10, student: 15 },
      rating: 4.8,
      reviews: 127,
      features: ['Tururi ghidate', 'Ateliere educaționale', 'Povești tradiționale'],
      contact: 'Prin Primăria Tazlău'
    },
    {
      id: 'palatul-culturii',
      name: 'Palatul Culturii Iași',
      location: 'Iași (56 km de Heleșteni)',
      description: 'Monument arhitectural în stil neogotic (1906-1925) care găzduiește patru muzee importante: Muzeul de Artă cu peste 8.000 de tablouri, Muzeul Etnografic cu 11.000 de piese, Muzeul de Istorie și Muzeul Științei și Tehnicii.',
      collection: [
        'Cea mai mare colecție de artă din România',
        'Ceramică Cucuteni veche de 5.000 de ani',
        'Craniu de mamut de 70.000 de ani',
        'Costume populare din toate regiunile'
      ],
      openingHours: 'Mar-Dum: 10:00-17:00',
      price: { adult: 40, child: 10, student: 20 },
      rating: 4.9,
      reviews: 2341,
      features: ['Ghid audio', 'Tur virtual', 'Expoziții temporare', 'Magazin de suveniruri'],
      contact: '+40 232 275 979'
    },
    {
      id: 'casa-dosoftei',
      name: 'Casa Dosoftei',
      location: 'Iași',
      description: 'Clădire medievală frumos conservată care adăpostește manuscrise, cărți vechi și artefacte religioase. Un exemplu remarcabil de arhitectură moldovenească din secolul XVII.',
      collection: [
        'Manuscrise medievale',
        'Cărți religioase rare',
        'Icoane pe lemn',
        'Obiecte de cult'
      ],
      openingHours: 'Mar-Dum: 10:00-17:00',
      price: { adult: 15, child: 5, student: 10 },
      rating: 4.7,
      reviews: 432,
      features: ['Biblioteca istorică', 'Expoziții tematice'],
      contact: '+40 232 213 104'
    },
    {
      id: 'trei-ierarhi',
      name: 'Mănăstirea Trei Ierarhi',
      location: 'Iași',
      description: 'Biserică cu decorațiuni extraordinare în piatră, combinând tradiția bizantină cu arta moldovenească și valahă. Pe lista tentativă UNESCO din 1991.',
      collection: [
        'Frescă bizantină',
        'Sculptură în piatră',
        'Icoane istorice',
        'Relicve sfinte'
      ],
      openingHours: 'Zilnic: 08:00-20:00',
      price: { adult: 0, child: 0, student: 0 },
      rating: 4.9,
      reviews: 1876,
      features: ['Arhitectură UNESCO', 'Servicii religioase', 'Tur ghidat'],
      contact: 'Mănăstire activă'
    }
  ]

  const categories = ['Toate', 'Muzee Tradiționale', 'Artă și Istorie', 'Arhitectură Religioasă', 'Etnografie']

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#B91C1C] to-[#991B1B] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-['Playfair_Display']">
            Muzee și Colecții
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Explorați bogăția culturală a regiunii prin muzee tradiționale, colecții de artă 
            și monumente istorice care păstrează vie moștenirea Moldovei
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-[#44403C] hover:text-[#B91C1C] hover:bg-[#FEF2F2] rounded-lg transition-colors whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-[#D6D3D1] rounded-lg hover:bg-[#F5F5F4] transition-colors">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filtrează</span>
            </button>
          </div>
        </div>
      </section>

      {/* Museums Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {museums.map((museum) => (
              <div key={museum.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-[#B91C1C]/10 to-[#F59E0B]/10 relative">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-[#1C1917]">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B] mr-1" />
                          <span className="font-semibold">{museum.rating}</span>
                          <span className="text-sm text-[#78716C] ml-1">({museum.reviews})</span>
                        </div>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-[#B91C1C]">
                          {museum.price.adult === 0 ? 'Intrare liberă' : `${museum.price.adult} RON`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#1C1917]">{museum.name}</h3>
                      <div className="flex items-center text-sm text-[#78716C] mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {museum.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#44403C] mb-4">{museum.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#1C1917] mb-2">Colecții principale:</h4>
                    <ul className="text-sm text-[#44403C] space-y-1">
                      {museum.collection.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#F59E0B] mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center text-sm text-[#78716C] mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {museum.openingHours}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {museum.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-[#F5F5F4] text-[#44403C] text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-[#78716C]">
                      {museum.contact}
                    </div>
                    <Link
                      href={`/muzee/${museum.id}`}
                      className="inline-flex items-center text-[#B91C1C] font-semibold hover:text-[#991B1B] transition-colors"
                    >
                      Detalii complete
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNESCO Heritage Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0EA5E9] to-[#0369A1] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Bisericile Pictate din Moldova - Patrimoniu UNESCO</h2>
            <p className="mb-6 text-white/90">
              La 108 km de Heleșteni, descoperiți mănăstirile din secolul XV-XVI cu fresce exterioare unice, 
              inclusiv faimoasa Mănăstire Voroneț, numită "Capela Sixtină a Estului".
            </p>
            <Link
              href="/muzee/biserici-pictate"
              className="inline-flex items-center px-6 py-3 bg-white text-[#0EA5E9] font-semibold rounded-lg hover:bg-[#F0F9FF] transition-colors"
            >
              Planifică o excursie
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}