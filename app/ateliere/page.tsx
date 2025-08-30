import Link from 'next/link'
import { Clock, Users, MapPin, Calendar, Euro, ChevronRight, Filter, Search } from 'lucide-react'

export default function WorkshopsPage() {
  const workshops = [
    {
      id: 'broderie-traditionala',
      title: 'Broderie Tradițională pe Ie',
      category: 'Textile',
      description: 'Învățați tehnica tradițională de broderie pe ia românească, folosind modele și culori specifice Moldovei - portocaliu și albastrul de Voroneț.',
      instructor: {
        name: 'Elena din Țibănești',
        bio: 'Meșter popular cu peste 30 de ani de experiență în broderia tradițională moldovenească',
        image: '/images/instructors/elena.jpg'
      },
      duration: 180, // minutes
      price: 150,
      maxParticipants: 8,
      difficulty: 'intermediate',
      materials: [
        'Pânză de in sau bumbac',
        'Ață de brodat în culori tradiționale',
        'Ace de cusut',
        'Gherghef',
        'Modele tradiționale'
      ],
      schedule: [
        { date: '2025-09-05', time: '10:00', availableSpots: 3 },
        { date: '2025-09-12', time: '10:00', availableSpots: 5 },
        { date: '2025-09-19', time: '14:00', availableSpots: 8 }
      ]
    },
    {
      id: 'tesut-covoare',
      title: 'Țesut Covoare Moldovenești',
      category: 'Textile',
      description: 'Descoperiți arta țesutului de covoare tradiționale, o tehnică UNESCO care necesită muncă în echipă și răbdare.',
      instructor: {
        name: 'Maria Popescu',
        bio: 'Păstrătoare a tradițiilor de țesut, transmise din generație în generație',
        image: '/images/instructors/maria.jpg'
      },
      duration: 240,
      price: 200,
      maxParticipants: 6,
      difficulty: 'advanced',
      materials: [
        'Război de țesut tradițional',
        'Fire de lână naturală',
        'Coloranți vegetali',
        'Suveică și alte unelte'
      ],
      schedule: [
        { date: '2025-09-06', time: '09:00', availableSpots: 2 },
        { date: '2025-09-13', time: '09:00', availableSpots: 4 }
      ]
    },
    {
      id: 'olarit',
      title: 'Olărit Tradițional',
      category: 'Ceramică',
      description: 'Modelați lutul folosind roata olarului și tehnici străvechi pentru a crea vase tradiționale românești.',
      instructor: {
        name: 'Ion Mureșan',
        bio: 'Olar din tată în fiu, practicând meșteșugul de peste 40 de ani',
        image: '/images/instructors/ion.jpg'
      },
      duration: 120,
      price: 120,
      maxParticipants: 10,
      difficulty: 'beginner',
      materials: [
        'Lut de ceramică',
        'Roată de olar',
        'Unelte de modelat',
        'Glazură tradițională'
      ],
      schedule: [
        { date: '2025-09-07', time: '10:00', availableSpots: 7 },
        { date: '2025-09-07', time: '14:00', availableSpots: 10 },
        { date: '2025-09-14', time: '10:00', availableSpots: 5 }
      ]
    },
    {
      id: 'filigran',
      title: 'Bijuterii în Filigran',
      category: 'Metalurgie',
      description: 'Creați bijuterii fine folosind tehnica filigranului, specifică meșterilor din Moldova.',
      instructor: {
        name: 'Gheorghe Argintaru',
        bio: 'Bijutier specializat în tehnici tradiționale de prelucrare a metalelor prețioase',
        image: '/images/instructors/gheorghe.jpg'
      },
      duration: 180,
      price: 250,
      maxParticipants: 4,
      difficulty: 'advanced',
      materials: [
        'Sârmă de argint',
        'Unelte de bijutier',
        'Lupe de precizie',
        'Materiale de lipit'
      ],
      schedule: [
        { date: '2025-09-08', time: '11:00', availableSpots: 1 },
        { date: '2025-09-15', time: '11:00', availableSpots: 3 }
      ]
    },
    {
      id: 'oua-incondeiate',
      title: 'Încondeierea Ouălor',
      category: 'Artă Decorativă',
      description: 'Învățați arta încondeierii ouălor cu modele tradiționale folosind ceară și coloranți naturali.',
      instructor: {
        name: 'Ana Pictorița',
        bio: 'Artistă populară recunoscută pentru măiestria în decorarea ouălor',
        image: '/images/instructors/ana.jpg'
      },
      duration: 150,
      price: 100,
      maxParticipants: 12,
      difficulty: 'beginner',
      materials: [
        'Ouă de gâscă și găină',
        'Ceară de albine',
        'Chișiță tradițională',
        'Coloranți naturali'
      ],
      schedule: [
        { date: '2025-09-10', time: '14:00', availableSpots: 8 },
        { date: '2025-09-17', time: '14:00', availableSpots: 12 }
      ]
    }
  ]

  const categories = ['Toate', 'Textile', 'Ceramică', 'Metalurgie', 'Artă Decorativă']
  const difficulties = {
    beginner: { label: 'Începător', color: 'text-green-600 bg-green-50' },
    intermediate: { label: 'Intermediar', color: 'text-yellow-600 bg-yellow-50' },
    advanced: { label: 'Avansat', color: 'text-red-600 bg-red-50' }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#16A34A] to-[#15803D] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-['Playfair_Display']">
            Ateliere Meșteșugărești
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Învățați meșteșuguri tradiționale de la maeștri locali. Fiecare atelier oferă 
            o experiență autentică de învățare a tehnicilor transmise din generație în generație.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2 flex-1">
              <Search className="h-5 w-5 text-[#78716C]" />
              <input
                type="text"
                placeholder="Caută ateliere..."
                className="flex-1 px-3 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#16A34A]"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#16A34A]">
                <option>Toate categoriile</option>
                {categories.slice(1).map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <select className="px-4 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#16A34A]">
                <option>Toate nivelurile</option>
                <option>Începător</option>
                <option>Intermediar</option>
                <option>Avansat</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-[#78716C]">{workshop.category}</span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficulties[workshop.difficulty as keyof typeof difficulties].color}`}>
                          {difficulties[workshop.difficulty as keyof typeof difficulties].label}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1C1917]">{workshop.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#16A34A]">{workshop.price} RON</p>
                      <p className="text-sm text-[#78716C]">per persoană</p>
                    </div>
                  </div>

                  <p className="text-[#44403C] mb-4">{workshop.description}</p>

                  <div className="border-t border-b py-4 my-4">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 bg-[#F5F5F4] rounded-full mr-3" />
                      <div>
                        <p className="font-semibold text-[#1C1917]">{workshop.instructor.name}</p>
                        <p className="text-sm text-[#78716C]">{workshop.instructor.bio}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-[#44403C]">
                      <Clock className="h-4 w-4 mr-2 text-[#F59E0B]" />
                      <span>{workshop.duration} minute</span>
                    </div>
                    <div className="flex items-center text-sm text-[#44403C]">
                      <Users className="h-4 w-4 mr-2 text-[#F59E0B]" />
                      <span>Max {workshop.maxParticipants} participanți</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-[#1C1917] mb-2">Următoarele sesiuni:</h4>
                    <div className="space-y-2">
                      {workshop.schedule.slice(0, 2).map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-[#F5F5F4] rounded-lg">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-[#16A34A]" />
                            <span className="text-sm font-medium">
                              {new Date(session.date).toLocaleDateString('ro-RO', { 
                                day: 'numeric', 
                                month: 'long' 
                              })}
                            </span>
                            <span className="text-sm text-[#78716C] ml-2">la {session.time}</span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            session.availableSpots > 5 
                              ? 'bg-green-100 text-green-700' 
                              : session.availableSpots > 0 
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {session.availableSpots > 0 
                              ? `${session.availableSpots} locuri`
                              : 'Complet'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/ateliere/${workshop.id}`}
                      className="inline-flex items-center text-[#16A34A] font-semibold hover:text-[#15803D] transition-colors"
                    >
                      Vezi detalii
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      href={`/rezervare?atelier=${workshop.id}`}
                      className="px-4 py-2 bg-[#16A34A] text-white font-semibold rounded-lg hover:bg-[#15803D] transition-colors"
                    >
                      Rezervă Acum
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Păstrăm Tradițiile Vii</h2>
            <p className="mb-6 text-white/90">
              Meșteșugurile tradiționale sunt parte din patrimoniul UNESCO al României. 
              Prin participarea la atelierele noastre, contribuiți la păstrarea acestor 
              tehnici valoroase pentru generațiile viitoare.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Meșteri Autentici</h3>
                <p className="text-sm text-white/80">
                  Învățați direct de la meșteri locali care practică aceste arte de generații
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Materiale Tradiționale</h3>
                <p className="text-sm text-white/80">
                  Folosim doar materiale și unelte tradiționale pentru o experiență autentică
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Certificate de Participare</h3>
                <p className="text-sm text-white/80">
                  Primiți un certificat și luați acasă creația dvs. ca amintire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}