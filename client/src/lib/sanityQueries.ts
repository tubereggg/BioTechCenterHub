import { sanityClient } from './sanityClient'

export interface SanityArticle {
  _id: string
  slug: string
  title: string
  excerpt: string
  content: any[]
  category: {
    name: string
    slug: string
    icon?: string
    color?: string
  }
  author: {
    name: string
    slug: string
    avatar?: any
    position?: string
    bio?: string
  }
  mainImage: any
  readTime: number
  publishedAt: string
  featured?: boolean
}

export interface SanityCategory {
  _id: string
  slug: string
  name: string
  description: string
  icon?: string
  color?: string
  articleCount: number
}

export interface SanityAuthor {
  _id: string
  name: string
  slug: string
  position: string
  role: string
  avatar: any
  expertise?: string[]
  publicationsCount: number
}

export async function getArticles(language: 'en' | 'th' = 'th') {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    "title": title.${language},
    "excerpt": excerpt.${language},
    "category": category->{
      "name": name.${language},
      "slug": slug.current,
      icon,
      color
    },
    "author": author->{
      name,
      "slug": slug.current,
      avatar
    },
    mainImage,
    readTime,
    publishedAt,
    featured
  }`
  
  return await sanityClient.fetch<SanityArticle[]>(query)
}

export async function getFeaturedArticles(language: 'en' | 'th' = 'th') {
  const query = `*[_type == "article" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    "slug": slug.current,
    "title": title.${language},
    "excerpt": excerpt.${language},
    "category": category->{
      "name": name.${language},
      "slug": slug.current,
      icon,
      color
    },
    "author": author->{
      name,
      avatar
    },
    mainImage,
    readTime,
    publishedAt
  }`
  
  return await sanityClient.fetch<SanityArticle[]>(query)
}

export async function getArticleBySlug(slug: string, language: 'en' | 'th' = 'th') {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    "title": title.${language},
    "excerpt": excerpt.${language},
    "content": content.${language},
    "category": category->{
      "name": name.${language},
      "slug": slug.current,
      icon,
      color
    },
    "author": author->{
      name,
      "position": position.${language},
      avatar,
      "bio": bio.${language},
      role,
      expertise,
      publicationsCount
    },
    mainImage,
    readTime,
    publishedAt
  }`
  
  return await sanityClient.fetch<SanityArticle>(query, { slug })
}

export async function getCategories(language: 'en' | 'th' = 'th') {
  const query = `*[_type == "category"] | order(name.${language} asc) {
    _id,
    "slug": slug.current,
    "name": name.${language},
    "description": description.${language},
    icon,
    color,
    "articleCount": count(*[_type == "article" && references(^._id)])
  }`
  
  return await sanityClient.fetch<SanityCategory[]>(query)
}

export async function getAuthors(language: 'en' | 'th' = 'th') {
  const query = `*[_type == "author"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    "position": position.${language},
    role,
    avatar,
    expertise,
    publicationsCount,
    "articleCount": count(*[_type == "article" && references(^._id)])
  }`
  
  return await sanityClient.fetch<SanityAuthor[]>(query)
}

export async function getRelatedArticles(categoryId: string, currentArticleId: string, language: 'en' | 'th' = 'th', limit: number = 3) {
  const query = `*[_type == "article" && category._ref == $categoryId && _id != $currentArticleId] | order(publishedAt desc) [0...${limit}] {
    _id,
    "slug": slug.current,
    "title": title.${language},
    "excerpt": excerpt.${language},
    "category": category->{
      "name": name.${language},
      "slug": slug.current
    },
    "author": author->{
      name,
      avatar
    },
    mainImage,
    readTime,
    publishedAt
  }`
  
  return await sanityClient.fetch<SanityArticle[]>(query, { categoryId, currentArticleId })
}

export async function searchArticles(searchTerm: string, language: 'en' | 'th' = 'th') {
  const query = `*[_type == "article" && (
    title.${language} match $searchTerm + "*" ||
    excerpt.${language} match $searchTerm + "*"
  )] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    "title": title.${language},
    "excerpt": excerpt.${language},
    "category": category->{
      "name": name.${language},
      "slug": slug.current
    },
    "author": author->{
      name,
      avatar
    },
    mainImage,
    readTime,
    publishedAt
  }`
  
  return await sanityClient.fetch<SanityArticle[]>(query, { searchTerm })
}
