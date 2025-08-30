export const siteConfig = {
  name: "Patrimoniu Heleșteni",
  description: "Descoperiți patrimoniul cultural al comunei Heleșteni - muzee, ateliere tradiționale și experiențe autentice românești",
  url: "https://patrimoniu-helesteni.ro",
  ogImage: "/images/og-image.jpg",
  locale: "ro-RO",
  languages: ["ro", "en", "de", "fr"],
  social: {
    facebook: "https://facebook.com/patrimoniuhelesteni",
    instagram: "https://instagram.com/patrimoniuhelesteni",
    youtube: "https://youtube.com/@patrimoniuhelesteni"
  },
  contact: {
    email: "contact@patrimoniu-helesteni.ro",
    phone: "+40 232 000 000",
    address: "Comuna Heleșteni, Județul Iași, România"
  }
}

export const navigation = {
  main: [
    { name: 'Acasă', href: '/' },
    { name: 'Muzee', href: '/muzee' },
    { name: 'Ateliere', href: '/ateliere' },
    { name: 'Despre', href: '/despre' },
    { name: 'Contact', href: '/contact' }
  ],
  footer: {
    explore: [
      { name: 'Casa Bunicii', href: '/muzee/casa-bunicii' },
      { name: 'Ateliere Ceramică', href: '/ateliere/ceramica' },
      { name: 'Evenimente', href: '/evenimente' },
      { name: 'Galerie', href: '/galerie' }
    ],
    info: [
      { name: 'Despre Noi', href: '/despre' },
      { name: 'Prețuri', href: '/preturi' },
      { name: 'Program', href: '/program' },
      { name: 'Acces', href: '/acces' }
    ],
    legal: [
      { name: 'Termeni și Condiții', href: '/termeni' },
      { name: 'Politica de Confidențialitate', href: '/confidentialitate' },
      { name: 'Cookie-uri', href: '/cookies' }
    ]
  }
}