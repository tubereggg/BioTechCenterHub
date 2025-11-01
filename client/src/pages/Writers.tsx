import { Header } from "@/components/Header";
import { ResearcherCard } from "@/components/ResearcherCard";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import femaleResearcher from "@assets/generated_images/Female_researcher_profile_photo_9dfa74e0.png";
import maleResearcher from "@assets/generated_images/Male_researcher_profile_photo_cc5dedd3.png";

export default function Writers() {
  const writers = [
    {
      id: "alex-rivera",
      name: "Alex Rivera",
      title: "Science Journalist & Editor",
      avatar: maleResearcher,
      expertise: ["Science Communication", "BioTech"],
      publicationsCount: 156
    },
    {
      id: "sophia-patel",
      name: "Sophia Patel",
      title: "Medical Writer",
      avatar: femaleResearcher,
      expertise: ["Gene Therapy", "Clinical Research"],
      publicationsCount: 89
    },
    {
      id: "marcus-lee",
      name: "Marcus Lee",
      title: "Technology Columnist",
      avatar: maleResearcher,
      expertise: ["DeepTech", "Innovation"],
      publicationsCount: 124
    },
    {
      id: "rachel-stone",
      name: "Rachel Stone",
      title: "Research Editor",
      avatar: femaleResearcher,
      expertise: ["Synthetic Biology", "Ethics"],
      publicationsCount: 103
    },
    {
      id: "tom-chen",
      name: "Tom Chen",
      title: "Contributing Writer",
      avatar: maleResearcher,
      expertise: ["CRISPR", "Genomics"],
      publicationsCount: 67
    },
    {
      id: "lisa-wang",
      name: "Lisa Wang",
      title: "Senior Science Writer",
      avatar: femaleResearcher,
      expertise: ["Immunotherapy", "Oncology"],
      publicationsCount: 142
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">Our Writers</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Expert science communicators bringing complex research to life
            </p>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search writers by name or specialty..."
                className="pl-9"
                data-testid="input-search-writers"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {writers.map((writer) => (
              <ResearcherCard key={writer.id} {...writer} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
