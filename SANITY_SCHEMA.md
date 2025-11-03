# Sanity CMS Schema for BioTech Research Website

This document provides the complete Sanity schema configuration for your BioTech content website with bilingual support (EN/TH).

## Setup Instructions

1. **Install Sanity CLI** (if not already installed):
```bash
npm install -g @sanity/cli
```

2. **Create a new Sanity project**:
```bash
sanity init
```

3. **Install dependencies**:
```bash
npm install @sanity/vision @sanity/image-url
```

4. **Copy the schemas below** into your Sanity Studio project under `schemas/` directory

5. **Update your `schema.js`** to import all schemas:
```javascript
import article from './article'
import author from './author'
import category from './category'

export const schemaTypes = [article, author, category]
```

---

## Schema Definitions

### 1. Article Schema (`schemas/article.js`)

```javascript
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'th',
          title: 'Thai Title',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English Excerpt',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required().max(200)
        },
        {
          name: 'th',
          title: 'Thai Excerpt',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required().max(200)
        }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Code', value: 'code'},
                  {title: 'Underline', value: 'underline'},
                  {title: 'Strike', value: 'strike-through'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'URL',
                    fields: [
                      {
                        title: 'URL',
                        name: 'href',
                        type: 'url',
                        validation: Rule => Rule.uri({
                          scheme: ['http', 'https', 'mailto', 'tel']
                        })
                      }
                    ]
                  }
                ]
              }
            },
            {
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  description: 'Important for SEO and accessibility',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption'
                }
              ]
            }
          ]
        },
        {
          name: 'th',
          title: 'Thai Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Code', value: 'code'},
                  {title: 'Underline', value: 'underline'},
                  {title: 'Strike', value: 'strike-through'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'URL',
                    fields: [
                      {
                        title: 'URL',
                        name: 'href',
                        type: 'url'
                      }
                    ]
                  }
                ]
              }
            },
            {
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text'
                },
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(60)
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Featured articles appear in the homepage slideshow',
      initialValue: false
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'object',
      description: 'SEO meta description',
      fields: [
        {
          name: 'en',
          title: 'English Meta Description',
          type: 'text',
          rows: 2,
          validation: Rule => Rule.max(160)
        },
        {
          name: 'th',
          title: 'Thai Meta Description',
          type: 'text',
          rows: 2,
          validation: Rule => Rule.max(160)
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      author: 'author.name',
      media: 'mainImage',
      category: 'category.name.en'
    },
    prepare(selection) {
      const {title, author, category, media} = selection
      return {
        title: title,
        subtitle: `${category} by ${author}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAtAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    }
  ]
}
```

---

### 2. Author Schema (`schemas/author.js`)

```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'position',
      title: 'Position/Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English Position',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'th',
          title: 'Thai Position',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Researcher', value: 'researcher'},
          {title: 'Writer', value: 'writer'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English Bio',
          type: 'text',
          rows: 4
        },
        {
          name: 'th',
          title: 'Thai Bio',
          type: 'text',
          rows: 4
        }
      ]
    },
    {
      name: 'publicationsCount',
      title: 'Publications Count',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'website',
          title: 'Personal Website',
          type: 'url'
        },
        {
          name: 'orcid',
          title: 'ORCID',
          type: 'url',
          description: 'ORCID researcher profile'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position.en',
      media: 'avatar',
      role: 'role'
    },
    prepare(selection) {
      const {title, subtitle, media, role} = selection
      return {
        title: title,
        subtitle: `${role} - ${subtitle}`,
        media: media
      }
    }
  }
}
```

---

### 3. Category Schema (`schemas/category.js`)

```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English Name',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'th',
          title: 'Thai Name',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.en',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        },
        {
          name: 'th',
          title: 'Thai Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Hex color code for category badge',
      validation: Rule => Rule.regex(/^#[0-9A-F]{6}$/i, {
        name: 'hex color',
        invert: false
      })
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "dna", "microscope", "atom")',
      options: {
        list: [
          {title: 'DNA', value: 'dna'},
          {title: 'Microscope', value: 'microscope'},
          {title: 'Atom', value: 'atom'},
          {title: 'Pill', value: 'pill'},
          {title: 'Sparkles', value: 'sparkles'},
          {title: 'Zap', value: 'zap'},
          {title: 'Brain', value: 'brain'},
          {title: 'Activity', value: 'activity'}
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'description.en'
    }
  }
}
```

---

## Sanity Client Configuration for Your Replit App

After setting up Sanity Studio, you'll need to configure the Sanity client in your Replit application to fetch content.

### 1. Install Sanity Client

```bash
npm install @sanity/client @sanity/image-url
```

### 2. Create Sanity Client Configuration

Create a new file `client/src/lib/sanityClient.ts`:

```typescript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'YOUR_PROJECT_ID', // Find this in sanity.json or on sanity.io
  dataset: 'production', // or the name of your dataset
  useCdn: true, // Use CDN for faster response times
  apiVersion: '2024-01-01', // Use current date
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}
```

### 3. Environment Variables

Add to your `.env` file:

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### 4. Example Query Functions

Create `client/src/lib/sanityQueries.ts`:

```typescript
import { sanityClient } from './sanityClient'

export async function getArticles(language: 'en' | 'th' = 'en') {
  const query = `*[_type == "article"] | order(publishedAt desc) {
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
      "slug": slug.current,
      avatar
    },
    mainImage,
    readTime,
    publishedAt,
    featured
  }`
  
  return await sanityClient.fetch(query)
}

export async function getFeaturedArticles(language: 'en' | 'th' = 'en') {
  const query = `*[_type == "article" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    "slug": slug.current,
    "title": title.${language},
    "excerpt": excerpt.${language},
    "category": category->name.${language},
    "author": author->{name, avatar},
    mainImage,
    readTime,
    publishedAt
  }`
  
  return await sanityClient.fetch(query)
}

export async function getArticleBySlug(slug: string, language: 'en' | 'th' = 'en') {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    "title": title.${language},
    "content": content.${language},
    "category": category->{
      "name": name.${language},
      "slug": slug.current
    },
    "author": author->{
      name,
      "position": position.${language},
      avatar,
      "bio": bio.${language}
    },
    mainImage,
    readTime,
    publishedAt
  }`
  
  return await sanityClient.fetch(query, { slug })
}

export async function getCategories(language: 'en' | 'th' = 'en') {
  const query = `*[_type == "category"] {
    _id,
    "slug": slug.current,
    "name": name.${language},
    "description": description.${language},
    icon,
    color,
    "articleCount": count(*[_type == "article" && references(^._id)])
  }`
  
  return await sanityClient.fetch(query)
}

export async function getAuthors(language: 'en' | 'th' = 'en') {
  const query = `*[_type == "author"] {
    _id,
    name,
    "slug": slug.current,
    "position": position.${language},
    role,
    avatar,
    expertise,
    publicationsCount
  }`
  
  return await sanityClient.fetch(query)
}
```

---

## Next Steps

1. **Set up Sanity Studio** in a separate directory or repository
2. **Deploy Sanity Studio** to manage content (can be hosted on Sanity's platform)
3. **Create initial content** (categories, authors, and articles)
4. **Get your Project ID** from Sanity dashboard
5. **Add Project ID** to your Replit app's environment variables
6. **Update frontend** to fetch from Sanity instead of mock data

---

## Tips

- Use Sanity's Vision plugin to test GROQ queries in the Studio
- Set up webhooks to trigger rebuilds when content changes
- Consider using Sanity's CDN for image optimization
- Add custom validation rules as needed
- Create custom input components for better editing experience

---

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Image URLs](https://www.sanity.io/docs/image-url)
- [Sanity CLI Reference](https://www.sanity.io/docs/cli)
