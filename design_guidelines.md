# BioTech Content Platform Design Guidelines

## Design Approach

**Reference-Based Approach** drawing inspiration from:
- **Medium** for content card layouts and reading experience
- **Linear** for minimal, futuristic aesthetic and typography
- **Nature.com** for scientific credibility and content hierarchy
- **Stripe** for sophisticated restraint and clean interfaces

**Core Principles**: Minimalist futuristic, scientific precision, content-first hierarchy, accessible complexity

---

## Typography System

**Font Families** (via Google Fonts):
- Primary: "Inter" (400, 500, 600) - UI, body text, labels
- Display: "Space Grotesk" (500, 600, 700) - headlines, section titles
- Mono: "JetBrains Mono" (400) - code snippets, technical data

**Hierarchy**:
- Hero Headlines: text-5xl to text-7xl, font-bold, Space Grotesk
- Section Titles: text-3xl to text-4xl, font-semibold, Space Grotesk
- Article Titles: text-2xl, font-semibold, Inter
- Body Text: text-base (16px), leading-relaxed, Inter
- Metadata/Labels: text-sm, font-medium, uppercase tracking-wide
- Captions: text-xs to text-sm, Inter

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 8, 12, 16, 20** consistently
- Component padding: p-4, p-8
- Section spacing: py-16, py-20, py-24
- Card gaps: gap-4, gap-8
- Element margins: mb-2, mb-4, mb-8

**Container Widths**:
- Full-width sections: w-full with inner max-w-7xl mx-auto
- Content articles: max-w-3xl (optimal reading)
- Grid layouts: max-w-6xl

**Grid Patterns**:
- Content cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Featured content: grid-cols-1 lg:grid-cols-2
- Researcher/writer profiles: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Mobile: Always single column

---

## Component Library

### Navigation
- Top navigation bar: sticky, minimal, logo left, primary links center, search + CTA right
- Secondary navigation: category pills/tabs beneath header for filtering
- Breadcrumbs: On article/profile pages for hierarchy
- Mobile: Hamburger menu with slide-in drawer

### Content Cards
- Elevated cards with subtle border, no heavy shadows
- Card structure: Featured image (16:9), category tag, title, excerpt (2 lines), author avatar + name, read time, date
- Hover: Subtle lift transform and border highlight
- Grid spacing: gap-8 for breathing room

### Article Layout
- Hero section: Full-width featured image with gradient overlay, title + metadata overlaid
- Progress bar: Fixed top, shows reading progress
- Content width: max-w-3xl, generous line-height (1.7)
- Inline code blocks with mono font and subtle background
- Pull quotes: Large text, minimal decoration
- Image captions: Small text beneath images
- Table of contents: Sticky sidebar on desktop

### Author/Researcher Profiles
- Profile header: Avatar (large, rounded), name, title/expertise, bio, social links
- Stats row: Publications count, research areas, citations
- Content grid: Their published articles in card format
- Expertise tags: Pill-shaped, clickable for filtering

### Search & Filters
- Search bar: Prominent, with icon, placeholder "Search articles, researchers, topics..."
- Filter panel: Sidebar or dropdown with checkboxes for categories, authors, dates, tags
- Active filters: Displayed as removable pills above results
- Results: Same card layout as content browse

### CMS/Editor Interface (Admin)
- Clean markdown editor with live preview side-by-side
- Toolbar: Minimal icons for formatting (bold, italic, headings, links, images, code)
- Metadata fields: Category dropdown, tags input, author selection, featured image upload
- Publish controls: Draft/Publish toggle, schedule option, prominent publish button

### Homepage Sections
1. **Hero**: Full-width image (scientific/lab imagery), headline about latest breakthroughs, CTA to explore
2. **Featured Content**: 2-column grid of highlighted articles with large images
3. **Browse by Category**: Horizontal scrolling cards or grid with category icons + names
4. **Latest Research**: 3-column grid of recent articles
5. **Featured Researchers**: Horizontal scrolling profile cards
6. **Newsletter CTA**: Centered, minimal form with headline + email input + subscribe button
7. **Footer**: Logo, quick links (categories, about, contact), social icons, copyright

### Category Browse Pages
- Hero: Category name + description, gradient background
- Filter bar: Sort by (latest, popular), view toggle (grid/list)
- Content grid: 3 columns of article cards
- Pagination: Numbered, load more option

### Tags/Topics
- Tag cloud: Varying sizes based on frequency
- Tag pages: Similar to category pages but with tag-specific filtering

---

## Imagery

**Hero Image**: Yes - full-width scientific/lab imagery (microscopy, DNA strands, laboratory equipment, futuristic biotech visualization). Gradient overlay (dark to transparent) for text legibility.

**Content Card Images**: Each article card includes a 16:9 featured image (research photos, diagrams, abstract scientific visuals)

**Profile Avatars**: Circular, professional researcher/writer photos

**Category Icons**: Minimal line icons representing each category (DNA helix, microscope, molecule, etc.)

**Background Elements**: Subtle geometric patterns or dot grids for section backgrounds (very low opacity)

---

## Interactive Elements

### Buttons
- Primary CTA: Solid background, medium padding (px-8 py-3), rounded-md, font-medium
- Secondary: Outlined border, same padding
- Text links: Underline on hover
- Buttons on hero images: Backdrop blur background for contrast

### Forms
- Input fields: Border, rounded corners, generous padding (px-4 py-3)
- Labels: Above inputs, font-medium, text-sm
- Focus states: Border highlight
- Newsletter form: Inline layout (input + button side-by-side)

### Cards
- Hover: translateY(-4px), subtle border highlight
- Click: Navigate to article/profile

### Navigation
- Active state: Underline or subtle background
- Hover: Opacity change

---

## Animations

**Minimal Use**:
- Page transitions: Smooth fade-in
- Card hover: Transform lift (duration-200)
- Progress bar: Smooth width transition
- Modal/drawer: Slide-in (duration-300)
- No scroll-triggered animations

---

## Accessibility

- Consistent focus states: Visible outline on all interactive elements
- ARIA labels: For icons, navigation
- Semantic HTML: Proper heading hierarchy (h1-h6)
- Keyboard navigation: Full support for all interactions
- Alt text: Required for all images
- Contrast ratios: Meet WCAG AA standards minimum

---

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layouts
- Stacked navigation
- Reduced font sizes (scale down by 0.875)
- Reduced spacing (py-12 instead of py-20)
- Hamburger menu
- Bottom-fixed CTA buttons where appropriate

**Tablet (768px - 1024px)**:
- 2-column grids
- Moderate spacing
- Side-by-side layouts for some sections

**Desktop (> 1024px)**:
- 3-column grids
- Full spacing
- Sidebar layouts for filters/TOC
- Horizontal navigation