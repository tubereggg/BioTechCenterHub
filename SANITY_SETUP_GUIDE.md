# Complete Sanity Studio Setup & Markdown Migration Guide

This guide will help you:
1. ✅ Set up and deploy Sanity Studio
2. ✅ Convert your markdown files to Sanity content
3. ✅ Connect your Replit app to Sanity

---

## Part 1: Setting Up Sanity Studio

### Step 1: Install Sanity CLI

```bash
npm install -g @sanity/cli
```

### Step 2: Create a New Sanity Project

```bash
# Create a new directory for your Sanity Studio
mkdir biotech-sanity-studio
cd biotech-sanity-studio

# Initialize Sanity project
sanity init

# Follow the prompts:
# - Login with your Sanity account (or create one)
# - Create a new project or use existing
# - Project name: "BioTech Research"
# - Dataset name: "production"
# - Template: Choose "Clean project with no predefined schemas"
```

### Step 3: Install Dependencies

```bash
npm install @sanity/vision @sanity/image-url
```

### Step 4: Set Up Schemas

Create the following files in your `schemas/` directory:

#### `schemas/article.js`
Copy the article schema from `SANITY_SCHEMA.md` (lines 38-331)

#### `schemas/author.js`
Copy the author schema from `SANITY_SCHEMA.md` (lines 335-486)

#### `schemas/category.js`
Copy the category schema from `SANITY_SCHEMA.md` (lines 490-584)

#### Update `schemas/index.js`
```javascript
import article from './article'
import author from './author'
import category from './category'

export const schemaTypes = [article, author, category]
```

### Step 5: Start Studio Locally

```bash
npm run dev
```

Visit `http://localhost:3333` to see your Sanity Studio!

---

## Part 2: Deploy Sanity Studio

### Option A: Sanity-Hosted (Easiest & Recommended)

```bash
sanity deploy
```

**What you get:**
- Free hosting on `<your-subdomain>.sanity.studio`
- Automatic HTTPS
- One-command deployment

**After deployment:**
- Visit your Studio URL (e.g., `https://biotech-research.sanity.studio`)
- Create your initial content (categories, authors, articles)

### Option B: Vercel (Alternative)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial Sanity Studio setup"
git remote add origin <your-github-repo>
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Sanity
   - Deploy!

3. **Add CORS Origin:**
   - Visit https://manage.sanity.io
   - Go to your project → Settings → API → CORS Origins
   - Add your Vercel URL (e.g., `https://biotech-studio.vercel.app`)

---

## Part 3: Convert Markdown Files to Sanity

### Method 1: Custom Script (Recommended for Your Project)

Create a migration script in your Sanity Studio project:

#### Step 1: Install Dependencies

```bash
npm install gray-matter @sanity/client dotenv
```

#### Step 2: Create `.env` File

```bash
# .env
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_TOKEN=your-write-token
```

**Get your token:**
- Visit https://manage.sanity.io
- Go to your project → Settings → API → Tokens
- Create new token with "Editor" permissions

#### Step 3: Create Import Script

Create `scripts/import-markdown.js`:

```javascript
import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false
})

async function importMarkdownFiles(folderPath) {
  try {
    const files = fs.readdirSync(folderPath)
    const markdownFiles = files.filter(file => file.endsWith('.md'))

    console.log(`Found ${markdownFiles.length} markdown files`)

    for (const file of markdownFiles) {
      const filePath = path.join(folderPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      
      // Parse frontmatter and content
      const { data, content } = matter(fileContent)

      // Create bilingual document
      const document = {
        _type: 'article',
        _id: data.slug || file.replace('.md', ''),
        title: {
          en: data.title_en || data.title || '',
          th: data.title_th || data.title || ''
        },
        slug: {
          _type: 'slug',
          current: data.slug || file.replace('.md', '')
        },
        excerpt: {
          en: data.excerpt_en || data.excerpt || '',
          th: data.excerpt_th || data.excerpt || ''
        },
        // For now, store content as blocks
        content: {
          en: [{
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: content }]
          }],
          th: [{
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: content }]
          }]
        },
        publishedAt: data.publishedAt || new Date().toISOString(),
        readTime: data.readTime || 5,
        featured: data.featured || false,
        // You'll need to create these references first
        category: {
          _type: 'reference',
          _ref: data.categoryId || 'default-category'
        },
        author: {
          _type: 'reference',
          _ref: data.authorId || 'default-author'
        }
      }

      // Upload to Sanity
      const result = await client.createOrReplace(document)
      console.log(`✅ Imported: ${data.title}`)
    }

    console.log('🎉 Migration complete!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
  }
}

// Run the import
// Put your markdown files in a folder
importMarkdownFiles('./markdown-content')
```

#### Step 4: Prepare Your Markdown Files

Your markdown files should have frontmatter like this:

```markdown
---
title_en: "CRISPR Gene Editing: A Revolution in Biotechnology"
title_th: "CRISPR การแก้ไขยีน: การปฏิวัติในเทคโนโลยีชีวภาพ"
slug: "crispr-gene-editing-revolution"
excerpt_en: "Explore how CRISPR technology is transforming medicine and agriculture"
excerpt_th: "สำรวจว่าเทคโนโลยี CRISPR กำลังเปลี่ยนแปลงการแพทย์และเกษตรกรรมอย่างไร"
publishedAt: "2024-01-15T10:00:00Z"
readTime: 8
featured: true
categoryId: "gene-editing"
authorId: "dr-smith"
---

Your article content here in English...
```

#### Step 5: Create Categories & Authors First

Before importing articles, manually create categories and authors in Sanity Studio:

**Categories to create:**
1. Gene Editing (gene-editing)
2. Synthetic Biology (synthetic-biology)
3. Drug Discovery (drug-discovery)

**Authors to create:**
1. Default Author (default-author)
2. Your actual authors

#### Step 6: Run the Import

```bash
# Add to package.json
"scripts": {
  "import": "node scripts/import-markdown.js"
}

# Run it
npm run import
```

---

## Part 4: Connect Your Replit App to Sanity

### Step 1: Get Your Project ID

Visit https://manage.sanity.io and copy your Project ID

### Step 2: Add Environment Variables in Replit

In your Replit project, add these secrets:
- `VITE_SANITY_PROJECT_ID` = your-project-id
- `VITE_SANITY_DATASET` = production

### Step 3: Install Sanity Client

In your Replit project:
```bash
npm install @sanity/client @sanity/image-url
```

### Step 4: Create Sanity Client

The configuration is already documented in `SANITY_SCHEMA.md` (lines 600-729)

Create `client/src/lib/sanityClient.ts`:

```typescript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}
```

### Step 5: Test the Connection

Create a test query in your Replit app to verify connection works.

---

## Quick Checklist

- [ ] Install Sanity CLI globally
- [ ] Create Sanity project with `sanity init`
- [ ] Copy schemas from SANITY_SCHEMA.md
- [ ] Start Studio locally (`npm run dev`)
- [ ] Deploy Studio (`sanity deploy`)
- [ ] Create initial categories and authors in Studio
- [ ] Prepare markdown files with proper frontmatter
- [ ] Create import script and run migration
- [ ] Get Project ID from Sanity dashboard
- [ ] Add environment variables to Replit
- [ ] Install @sanity/client in Replit
- [ ] Create sanityClient.ts
- [ ] Test connection and fetch data

---

## Resources

- **Sanity Documentation**: https://www.sanity.io/docs
- **Sanity Manage Dashboard**: https://manage.sanity.io
- **GROQ Query Cheatsheet**: https://www.sanity.io/docs/query-cheat-sheet
- **Sanity Community Slack**: https://slack.sanity.io

---

## Need Help?

If you encounter any issues:
1. Check the Sanity Studio console for errors
2. Verify your API token has proper permissions
3. Make sure CORS origins are configured
4. Check that category and author IDs match your references

Let me know where you get stuck and I'll help you debug!
