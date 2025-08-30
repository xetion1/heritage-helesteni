import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(d)
}

export function formatPrice(price: number, currency: string = 'RON'): string {
  return new Intl.NumberFormat('ro-RO', {
    style: 'currency',
    currency: currency
  }).format(price)
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}