export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  tech: string[]
  links: {
    github?: string
    demo?: string
    paper?: string
  }
  startDate: string
  endDate?: string
  featured?: boolean
  image?: string
  category: 'web' | 'mobile' | 'ml' | 'research' | 'other'
}

export interface Research {
  slug: string
  title: string
  abstract: string
  authors: string[]
  venue: string
  year: number
  doi?: string
  url?: string
  bibtex?: string
  type: 'paper' | 'poster' | 'thesis' | 'preprint'
  tags: string[]
}

export interface Award {
  slug: string
  title: string
  issuer: string
  date: string
  description: string
  category: 'academic' | 'competition' | 'scholarship' | 'recognition'
  amount?: string
  url?: string
}

export interface Education {
  institution: string
  degree: string
  field: string
  startYear: number
  endYear?: number
  gpa?: string
  relevant_courses: string[]
  achievements: string[]
}

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string
  highlights: string[]
  tech: string[]
  type: 'internship' | 'part-time' | 'full-time' | 'contract' | 'volunteer'
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  resume: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    scholar?: string
    orcid?: string
  }
  skills: {
    languages: string[]
    frameworks: string[]
    tools: string[]
    databases: string[]
  }
}
