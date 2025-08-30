import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C1917] to-[#292524] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-['Playfair_Display']">
            Contactați-ne
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Suntem aici să vă ajutăm să planificați vizita perfectă în Heleșteni
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#1C1917] mb-6">Trimite un Mesaj</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#44403C] mb-2">
                      Prenume
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#B91C1C]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#44403C] mb-2">
                      Nume
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#B91C1C]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#44403C] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#B91C1C]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#44403C] mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#B91C1C]"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#44403C] mb-2">
                    Subiect
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#B91C1C]"
                    required
                  >
                    <option value="">Selectați un subiect</option>
                    <option value="general">Informații Generale</option>
                    <option value="booking">Rezervare Atelier</option>
                    <option value="museum">Vizită Muzeu</option>
                    <option value="event">Evenimente</option>
                    <option value="partnership">Parteneriat</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#44403C] mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-[#D6D3D1] rounded-lg focus:outline-none focus:border-[#B91C1C]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#B91C1C] text-white font-semibold rounded-lg hover:bg-[#991B1B] transition-colors"
                >
                  Trimite Mesajul
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-[#FAFAF9] rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#1C1917] mb-6">Informații de Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#B91C1C] mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-[#1C1917]">Telefon</p>
                      <p className="text-[#44403C]">+40 232 123 456</p>
                      <p className="text-[#44403C]">+40 745 678 901</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#B91C1C] mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-[#1C1917]">Email</p>
                      <p className="text-[#44403C]">info@heritage-helesteni.ro</p>
                      <p className="text-[#44403C]">rezervari@heritage-helesteni.ro</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#B91C1C] mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-[#1C1917]">Adresă</p>
                      <p className="text-[#44403C]">Comuna Heleșteni</p>
                      <p className="text-[#44403C]">Județul Iași, România</p>
                      <p className="text-[#44403C]">Cod Poștal: 707235</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#B91C1C] mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-[#1C1917]">Program</p>
                      <p className="text-[#44403C]">Luni - Vineri: 09:00 - 18:00</p>
                      <p className="text-[#44403C]">Sâmbătă: 10:00 - 16:00</p>
                      <p className="text-[#44403C]">Duminică: Închis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-[#FAFAF9] rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#1C1917] mb-4">Locație</h3>
                <div className="h-64 bg-[#D6D3D1] rounded-lg flex items-center justify-center">
                  <p className="text-[#78716C]">Hartă Interactivă</p>
                </div>
                <p className="text-sm text-[#44403C] mt-4">
                  Heleșteni se află la 27 km de Iași, accesibil prin DN28 sau transport public.
                </p>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Întrebări Frecvente</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Cum pot face o rezervare pentru ateliere?</li>
                  <li>• Este necesară rezervare pentru vizitarea muzeelor?</li>
                  <li>• Organizați tururi ghidate?</li>
                  <li>• Care sunt tarifele pentru grupuri?</li>
                </ul>
                <a href="/faq" className="inline-block mt-4 text-white font-semibold underline">
                  Vezi toate întrebările →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}