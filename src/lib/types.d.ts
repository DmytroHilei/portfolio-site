export interface Project {
  priority: number
  title: string
  shortDescription: string
  cover: string
  livePreview?: string

  type?: string
  siteAge?: string
  visitors?: string
  earned?: string
  githubStars?: string
  numberOfSales?: string
  ratings?: string
  githubLink?: string
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
  createdAt: string
}
