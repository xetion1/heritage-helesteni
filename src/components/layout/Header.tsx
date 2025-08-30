'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe, Search } from 'lucide-react'
import { navigation, siteConfig } from '@/config/site'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('ro')

  const languages = [
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-[#B91C1C] flex items-center justify-center">
                <span className="text-white font-bold text-xl">PH</span>
              </div>
              <span className="hidden sm:block text-xl font-bold text-[#1C1917]">
                Patrimoniu Heleșteni
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#44403C] hover:text-[#B91C1C] transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side: Search, Language, Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              className="p-2 hover:bg-[#F5F5F4] rounded-lg transition-colors"
              aria-label="Căutare"
            >
              <Search className="h-5 w-5 text-[#44403C]" />
            </button>

            {/* Language Switcher */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 p-2 hover:bg-[#F5F5F4] rounded-lg transition-colors"
                aria-label="Schimbă limba"
              >
                <Globe className="h-5 w-5 text-[#44403C]" />
                <span className="hidden sm:inline text-sm text-[#44403C]">
                  {languages.find(l => l.code === currentLang)?.flag}
                </span>
              </button>
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-[#F5F5F4] transition-colors w-full text-left"
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm text-[#44403C]">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-[#F5F5F4] rounded-lg transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#44403C]" />
              ) : (
                <Menu className="h-6 w-6 text-[#44403C]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-[72px] bg-white shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-[#44403C] hover:text-[#B91C1C] hover:bg-[#F5F5F4] rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}