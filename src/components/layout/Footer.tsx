import Link from 'next/link'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import { navigation, siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Despre Noi</h3>
            <p className="text-[#A8A29E] text-sm mb-4">
              Descoperiți patrimoniul cultural al comunei Heleșteni prin muzee tradiționale, 
              ateliere meșteșugărești și experiențe autentice românești.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F59E0B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F59E0B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F59E0B] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explorează</h3>
            <ul className="space-y-2">
              {navigation.footer.explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#A8A29E] hover:text-[#F59E0B] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Informații</h3>
            <ul className="space-y-2">
              {navigation.footer.info.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#A8A29E] hover:text-[#F59E0B] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <p className="text-[#A8A29E] text-sm">
                  {siteConfig.contact.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F59E0B] flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-[#A8A29E] hover:text-[#F59E0B] transition-colors text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F59E0B] flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#A8A29E] hover:text-[#F59E0B] transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-[#292524]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-[#A8A29E] text-sm">
              © {new Date().getFullYear()} Patrimoniu Heleșteni. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {navigation.footer.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#A8A29E] hover:text-[#F59E0B] transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}