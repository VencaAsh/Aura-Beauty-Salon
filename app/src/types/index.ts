// Navigation link type
export interface NavLink {
  href: string;
  label: string;
}

// Social media link type
export interface SocialLink extends NavLink {
  icon: string;
}

// Service type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

// Team member type
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

// News/Article type
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
  slug: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Reservation form data type
export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}
