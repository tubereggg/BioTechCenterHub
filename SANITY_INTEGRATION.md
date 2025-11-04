# Sanity CMS Integration with Replit Deployment

This guide shows how to connect your Replit-deployed app with Sanity CMS for content management.

## 🎯 Overview

Your app is now configured to fetch content from Sanity CMS. Here's the complete workflow:

```
Editors → Sanity Studio → Sanity Cloud API → Your Replit App → Users
```

## ✅ What's Already Done

I've set up the following for you:

1. ✅ Installed `@sanity/client` and `@sanity/image-url`
2. ✅ Created `client/src/lib/sanityClient.ts` - Sanity connection
3. ✅ Created `client/src/lib/sanityQueries.ts` - All query functions
4. ✅ TypeScript interfaces for type safety

## 🚀 Quick Setup (3 Steps)

### Step 1: Add Sanity Secrets to Replit

1. Click the **🔒 Secrets** icon in your Replit sidebar
2. Add these two secrets:

```
Key: VITE_SANITY_PROJECT_ID
Value: your-sanity-project-id

Key: VITE_SANITY_DATASET
Value: production
```

**How to get your Project ID:**
- Visit https://manage.sanity.io
- Select your project
- Copy the "Project ID"

### Step 2: Deploy Your Sanity Studio

Follow the guide in `SANITY_SETUP_GUIDE.md` to:
1. Set up Sanity Studio
2. Deploy it with `sanity deploy`
3. Create initial content (categories, authors, articles)

### Step 3: Update Your Frontend Components

Replace mock data with Sanity queries. Here are the key functions:

```typescript
import { 
  getArticles, 
  getFeaturedArticles,
  getArticleBySlug,
  getCategories,
  getAuthors
} from '@/lib/sanityQueries'
```

## 📚 Available Query Functions

### Articles

```typescript
// Get all articles
const articles = await getArticles('th')

// Get featured articles (for homepage slideshow)
const featured = await getFeaturedArticles('th')

// Get single article by slug
const article = await getArticleBySlug('article-slug', 'th')

// Search articles
const results = await searchArticles('CRISPR', 'th')

// Get related articles
const related = await getRelatedArticles(categoryId, currentArticleId, 'th', 3)
```

### Categories

```typescript
// Get all categories with article counts
const categories = await getCategories('th')
```

### Authors

```typescript
// Get all authors
const authors = await getAuthors('th')
```

## 🖼️ Image Handling

Use the `urlFor()` helper to generate optimized image URLs:

```typescript
import { urlFor } from '@/lib/sanityClient'

// Basic usage
<img src={urlFor(article.mainImage).url()} alt={article.title} />

// With optimizations
<img 
  src={urlFor(article.mainImage)
    .width(800)
    .height(400)
    .fit('crop')
    .quality(90)
    .url()} 
  alt={article.title} 
/>

// Responsive images
<img 
  srcSet={`
    ${urlFor(article.mainImage).width(400).url()} 400w,
    ${urlFor(article.mainImage).width(800).url()} 800w,
    ${urlFor(article.mainImage).width(1200).url()} 1200w
  `}
  sizes="(max-width: 768px) 100vw, 50vw"
  src={urlFor(article.mainImage).width(800).url()}
  alt={article.title}
/>
```

## 🔄 Using with React Query

Example of fetching articles in a component:

```typescript
import { useQuery } from '@tanstack/react-query'
import { getArticles } from '@/lib/sanityQueries'
import { useLanguage } from '@/components/LanguageProvider'

function ArticlesList() {
  const { language } = useLanguage()
  
  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles', language],
    queryFn: () => getArticles(language)
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {articles?.map(article => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </div>
  )
}
```

## 📝 Example: Converting Home Page

Here's how to update your homepage to use real Sanity data:

```typescript
// client/src/pages/Home.tsx
import { useQuery } from '@tanstack/react-query'
import { getFeaturedArticles, getCategories, getArticles } from '@/lib/sanityQueries'
import { useLanguage } from '@/components/LanguageProvider'

export default function Home() {
  const { language } = useLanguage()

  const { data: featuredArticles } = useQuery({
    queryKey: ['featured-articles', language],
    queryFn: () => getFeaturedArticles(language)
  })

  const { data: categories } = useQuery({
    queryKey: ['categories', language],
    queryFn: () => getCategories(language)
  })

  const { data: latestArticles } = useQuery({
    queryKey: ['articles', language],
    queryFn: () => getArticles(language)
  })

  return (
    <div>
      {/* Use real data instead of mockArticles */}
      <FeaturedSlideshow articles={featuredArticles || []} />
      <CategoryGrid categories={categories || []} />
      <ArticlesList articles={latestArticles || []} />
    </div>
  )
}
```

## 🎨 Rendering Portable Text (Article Content)

Sanity stores article content as "Portable Text". You'll need to render it properly:

### Install Portable Text Renderer

```bash
npm install @portabletext/react
```

### Create Portable Text Component

```typescript
// client/src/components/PortableText.tsx
import { PortableText as BasePortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanityClient'

const components = {
  types: {
    image: ({ value }: any) => (
      <img 
        src={urlFor(value).width(800).url()} 
        alt={value.alt || ''} 
        className="rounded-lg my-6"
      />
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    normal: ({ children }: any) => <p className="my-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
}

export function PortableText({ value }: { value: any }) {
  return <BasePortableText value={value} components={components} />
}
```

### Use in Article Detail Page

```typescript
import { PortableText } from '@/components/PortableText'

function ArticleDetail() {
  const { data: article } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => getArticleBySlug(slug, language)
  })

  return (
    <div>
      <h1>{article.title}</h1>
      <PortableText value={article.content} />
    </div>
  )
}
```

## 🔐 CORS Configuration

After deploying to Replit, you need to add your domain to Sanity's CORS origins:

1. Visit https://manage.sanity.io
2. Go to your project → **Settings** → **API** → **CORS Origins**
3. Click **Add CORS origin**
4. Add your URLs:
   - Development: `http://localhost:5000`
   - Production: `https://yourapp.replit.app`
   - Custom domain: `https://yourdomain.com`
5. Check ✅ **Allow credentials**
6. Save

## 🚀 Deployment Workflow

### Local Development
```bash
npm run dev
# App runs with Sanity integration
# Uses secrets from Replit environment
```

### Deploy to Replit
1. Add secrets (VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET)
2. Click **Publish** button in Replit
3. Your app goes live with Sanity integration!

### Content Management
1. Editors visit `https://your-studio.sanity.studio`
2. Create/edit articles
3. Changes appear **immediately** on your live site (CDN updates)

## 📊 Data Types Reference

All TypeScript interfaces are defined in `client/src/lib/sanityQueries.ts`:

- `SanityArticle` - Full article with all fields
- `SanityCategory` - Category with article count
- `SanityAuthor` - Author with publications count

## 🎯 Next Steps

1. ✅ Add Sanity secrets to Replit
2. ✅ Deploy Sanity Studio (see SANITY_SETUP_GUIDE.md)
3. ✅ Create test content in Sanity
4. ✅ Update frontend components to use Sanity queries
5. ✅ Test locally
6. ✅ Deploy to Replit
7. ✅ Add CORS origins in Sanity

## 💡 Pro Tips

- **Use CDN images**: Always use `urlFor()` for images - it's optimized and fast
- **Cache queries**: React Query caches automatically, but you can customize
- **Webhooks**: Set up Sanity webhooks to trigger rebuilds on content changes
- **Preview mode**: Add draft/preview functionality for editors
- **Image optimization**: Use `width()`, `height()`, `quality()` for perfect images

## 🆘 Troubleshooting

### "Missing project ID"
- Check that secrets are added in Replit
- Restart the workspace after adding secrets

### CORS errors
- Add your domain to Sanity CORS origins
- Include both http:// and https:// versions

### No data showing
- Verify content exists in Sanity Studio
- Check browser console for API errors
- Verify dataset name (usually "production")

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text Guide](https://www.sanity.io/docs/presenting-block-text)
- [Image URLs Guide](https://www.sanity.io/docs/image-url)

---

You're all set! Your Replit app can now fetch content from Sanity CMS! 🎉
