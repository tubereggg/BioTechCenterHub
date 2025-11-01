import { Header } from "@/components/Header";
import { ResearcherCard } from "@/components/ResearcherCard";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import femaleResearcher from "@assets/generated_images/Female_researcher_profile_photo_9dfa74e0.png";
import maleResearcher from "@assets/generated_images/Male_researcher_profile_photo_cc5dedd3.png";

export default function Researchers() {
  const researchers = [
    {
      id: "sarah-chen",
      name: "Dr. Sarah Chen",
      title: "Professor of Molecular Biology",
      avatar: femaleResearcher,
      expertise: ["CRISPR", "Gene Therapy"],
      publicationsCount: 42
    },
    {
      id: "michael-torres",
      name: "Dr. Michael Torres",
      title: "Lead Researcher, Synthetic Biology",
      avatar: maleResearcher,
      expertise: ["Synthetic Biology", "Bioinformatics"],
      publicationsCount: 38
    },
    {
      id: "emma-liu",
      name: "Dr. Emma Liu",
      title: "Director of Immunotherapy Research",
      avatar: femaleResearcher,
      expertise: ["Immunotherapy", "Oncology"],
      publicationsCount: 51
    },
    {
      id: "james-wilson",
      name: "Dr. James Wilson",
      title: "Professor of Regenerative Medicine",
      avatar: maleResearcher,
      expertise: ["Stem Cells", "Tissue Engineering"],
      publicationsCount: 47
    },
    {
      id: "maria-garcia",
      name: "Dr. Maria Garcia",
      title: "Senior Scientist, Protein Engineering",
      avatar: femaleResearcher,
      expertise: ["Protein Design", "Drug Discovery"],
      publicationsCount: 35
    },
    {
      id: "david-kim",
      name: "Dr. David Kim",
      title: "Research Director, Bioinformatics",
      avatar: maleResearcher,
      expertise: ["Machine Learning", "Genomics"],
      publicationsCount: 44
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">Featured Researchers</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Discover the brilliant minds advancing biotechnology and deep tech research
            </p>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search researchers by name or expertise..."
                className="pl-9"
                data-testid="input-search-researchers"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {researchers.map((researcher) => (
              <ResearcherCard key={researcher.id} {...researcher} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
