import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Dna, Microscope, Atom, Pill, Sparkles, Zap, Activity, Beaker } from "lucide-react";

export default function Categories() {
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
    },
    {
      id: "protein-engineering",
      name: "Protein Engineering",
      description: "Designing and optimizing proteins for therapeutic and industrial uses.",
      icon: Activity,
      articleCount: 13
    },
    {
      id: "drug-discovery",
      name: "Drug Discovery",
      description: "Innovative approaches to identifying and developing new pharmaceutical compounds.",
      icon: Beaker,
      articleCount: 28
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">Research Categories</h1>
            <p className="text-lg text-muted-foreground">
              Explore cutting-edge research across diverse biotechnology and deep tech fields
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
