import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { CreatorCard } from "@/components/CreatorCard";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { FeaturedSlideshow } from "@/components/FeaturedSlideshow";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Dna, Microscope, Atom, Pill, Sparkles, Zap } from "lucide-react";
import crispImage from "@assets/generated_images/CRISPR_technology_featured_image_430ccd6e.png";
import syntheticImage from "@assets/generated_images/Synthetic_biology_article_image_a8d539fb.png";
import geneImage from "@assets/generated_images/Gene_therapy_visualization_1239c8b4.png";
import femaleResearcher from "@assets/generated_images/Female_researcher_profile_photo_9dfa74e0.png";
import maleResearcher from "@assets/generated_images/Male_researcher_profile_photo_cc5dedd3.png";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const featuredArticles = [
    {
      id: "1",
      title: "CRISPR-Cas9: Revolutionizing Gene Editing Technology",
      excerpt: "Exploring the latest advances in CRISPR technology and its applications in treating genetic disorders and advancing personalized medicine.",
      category: "Gene Therapy",
      image: crispImage,
      author: { name: "Dr. Sarah Chen", avatar: femaleResearcher },
      readTime: 8,
      date: "Nov 1, 2025"
    },
    {
      id: "2",
      title: "Synthetic Biology: Engineering Life at the Molecular Level",
      excerpt: "How synthetic biology is transforming our ability to design and construct new biological systems for medicine and sustainability.",
      category: "Synthetic Biology",
      image: syntheticImage,
      author: { name: "Dr. Michael Torres", avatar: maleResearcher },
      readTime: 12,
      date: "Oct 28, 2025"
    },
    {
      id: "3",
      title: "Gene Therapy Breakthrough in Treating Rare Diseases",
      excerpt: "Recent clinical trials show promising results in using gene therapy to treat previously incurable genetic conditions.",
      category: "Gene Therapy",
      image: geneImage,
      author: { name: "Dr. Sarah Chen", avatar: femaleResearcher },
      readTime: 10,
      date: "Oct 25, 2025"
    }
  ];

  const latestArticles = [
    {
      id: "3",
      title: "Gene Therapy Breakthrough in Treating Rare Diseases",
      excerpt: "Recent clinical trials show promising results in using gene therapy to treat previously incurable genetic conditions.",
      category: "Gene Therapy",
      image: geneImage,
      author: { name: "Dr. Sarah Chen", avatar: femaleResearcher },
      readTime: 10,
      date: "Oct 25, 2025"
    },
    {
      id: "4",
      title: "The Future of Personalized Immunotherapy",
      excerpt: "Advances in understanding the immune system are leading to more targeted and effective cancer treatments.",
      category: "Immunotherapy",
      image: crispImage,
      author: { name: "Dr. Michael Torres", avatar: maleResearcher },
      readTime: 9,
      date: "Oct 22, 2025"
    },
    {
      id: "5",
      title: "Stem Cell Research: New Frontiers in Regenerative Medicine",
      excerpt: "How stem cell technology is opening new possibilities for tissue repair and organ regeneration.",
      category: "Stem Cells",
      image: syntheticImage,
      author: { name: "Dr. Sarah Chen", avatar: femaleResearcher },
      readTime: 11,
      date: "Oct 20, 2025"
    }
  ];

  const categories = [
    {
      id: "gene-therapy",
      name: "Gene Therapy",
      description: "Advanced techniques for treating genetic disorders through targeted gene modification.",
      icon: Dna,
      articleCount: 24
    },
    {
      id: "crispr",
      name: "CRISPR",
      description: "Revolutionary gene editing technology transforming molecular biology research.",
      icon: Zap,
      articleCount: 18
    },
    {
      id: "synthetic-biology",
      name: "Synthetic Biology",
      description: "Engineering biological systems and organisms for innovative applications.",
      icon: Atom,
      articleCount: 15
    },
    {
      id: "immunotherapy",
      name: "Immunotherapy",
      description: "Harnessing the immune system to fight diseases and improve human health.",
      icon: Pill,
      articleCount: 21
    },
    {
      id: "stem-cells",
      name: "Stem Cells",
      description: "Exploring regenerative medicine and cellular therapy breakthroughs.",
      icon: Sparkles,
      articleCount: 19
    },
    {
      id: "bioinformatics",
      name: "Bioinformatics",
      description: "Computational approaches to understanding biological data and systems.",
      icon: Microscope,
      articleCount: 16
    }
  ];

  const creators = [
    {
      id: "sarah-chen",
      name: "Dr. Sarah Chen",
      position: "Professor of Molecular Biology",
      role: "Researcher",
      avatar: femaleResearcher,
      expertise: ["CRISPR", "Gene Therapy"],
      publicationsCount: 42
    },
    {
      id: "michael-torres",
      name: "Dr. Michael Torres",
      position: "Lead Researcher, Synthetic Biology",
      role: "Researcher",
      avatar: maleResearcher,
      expertise: ["Synthetic Biology", "Bioinformatics"],
      publicationsCount: 38
    },
    {
      id: "alex-rivera",
      name: "Alex Rivera",
      position: "Science Journalist & Editor",
      role: "Writer",
      avatar: maleResearcher,
      expertise: ["Science Communication", "BioTech"],
      publicationsCount: 156
    },
    {
      id: "sophia-patel",
      name: "Sophia Patel",
      position: "Medical Writer",
      role: "Writer",
      avatar: femaleResearcher,
      expertise: ["Gene Therapy", "Clinical Research"],
      publicationsCount: 89
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      <section className="border-t py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 md:mb-8">
            <h2 className="font-display text-3xl font-bold md:text-4xl">{t.home.featuredResearch}</h2>
          </div>
          <FeaturedSlideshow articles={featuredArticles} />
        </div>
      </section>

      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="mb-2 font-display text-3xl font-bold md:text-4xl">{t.home.browseByCategory}</h2>
            <p className="text-muted-foreground">{t.home.browseByCategoryDesc}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="mb-2 font-display text-3xl font-bold md:text-4xl">{t.home.latestArticles}</h2>
            <p className="text-muted-foreground">{t.home.latestArticlesDesc}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="mb-2 font-display text-3xl font-bold md:text-4xl">{t.home.featuredCreators}</h2>
            <p className="text-muted-foreground">{t.home.featuredCreatorsDesc}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {creators.map((creator) => (
              <CreatorCard key={creator.id} {...creator} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
