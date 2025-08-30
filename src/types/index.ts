export interface Museum {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  images: string[]
  location: {
    address: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  openingHours: {
    [key: string]: string
  }
  price: {
    adult: number
    child: number
    student: number
    group: number
  }
  features: string[]
  rating: number
  reviews: number
}

export interface Workshop {
  id: string
  title: string
  slug: string
  description: string
  instructor: {
    name: string
    bio: string
    image: string
  }
  duration: number // in minutes
  price: number
  maxParticipants: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  materials: string[]
  images: string[]
  category: string
  available: boolean
  schedule: WorkshopSchedule[]
}

export interface WorkshopSchedule {
  id: string
  date: string
  time: string
  availableSpots: number
}

export interface Event {
  id: string
  name: string
  description: string
  date: string
  time: string
  location: string
  image: string
  price: number
  category: string
}

export interface Booking {
  id: string
  type: 'museum' | 'workshop'
  itemId: string
  date: string
  time?: string
  participants: {
    adults: number
    children: number
    students: number
  }
  customerInfo: {
    name: string
    email: string
    phone: string
    message?: string
  }
  totalPrice: number
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

export interface CraftType {
  id: string
  name: string
  description: string
  icon: string
  techniques: string[]
  history: string
  regionSpecific: boolean
}

export interface Testimonial {
  id: string
  author: string
  role?: string
  content: string
  rating: number
  date: string
  image?: string
}

export interface Language {
  code: string
  name: string
  flag: string
}