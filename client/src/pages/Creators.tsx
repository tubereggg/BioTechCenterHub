import { Header } from "@/components/Header";
import { CreatorCard } from "@/components/CreatorCard";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import femaleResearcher from "@assets/generated_images/Female_researcher_profile_photo_9dfa74e0.png";
import maleResearcher from "@assets/generated_images/Male_researcher_profile_photo_cc5dedd3.png";

export default function Creators() {
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
      id: "emma-liu",
      name: "Dr. Emma Liu",
      position: "Director of Immunotherapy Research",
      role: "Researcher",
      avatar: femaleResearcher,
      expertise: ["Immunotherapy", "Oncology"],
      publicationsCount: 51
    },
    {
      id: "james-wilson",
      name: "Dr. James Wilson",
      position: "Professor of Regenerative Medicine",
      role: "Researcher",
      avatar: maleResearcher,
      expertise: ["Stem Cells", "Tissue Engineering"],
      publicationsCount: 47
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
    },
    {
      id: "marcus-lee",
      name: "Marcus Lee",
      position: "Technology Columnist",
      role: "Writer",
      avatar: maleResearcher,
      expertise: ["DeepTech", "Innovation"],
      publicationsCount: 124
    },
    {
      id: "rachel-stone",
      name: "Rachel Stone",
      position: "Research Editor",
      role: "Writer",
      avatar: femaleResearcher,
      expertise: ["Synthetic Biology", "Ethics"],
      publicationsCount: 103
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="border-t">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="mb-8 md:mb-12">
            <h1 className="mb-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">Creators</h1>
            <p className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg">
              Discover the researchers, scientists, and writers advancing biotechnology and deep tech
            </p>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search creators by name or expertise..."
                className="pl-9"
                data-testid="input-search-creators"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {creators.map((creator) => (
              <CreatorCard key={creator.id} {...creator} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
