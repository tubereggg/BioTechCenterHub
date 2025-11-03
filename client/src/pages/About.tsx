import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Card } from "@/components/ui/card";
import { Dna, Users, Globe, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Dna,
      title: "Scientific Excellence",
      description: "We maintain the highest standards of scientific accuracy and rigor in all our content."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by researchers and scientists for the global biotech community."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting researchers and readers from around the world to advance biotechnology."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Highlighting breakthrough discoveries and cutting-edge research that shapes the future."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="border-t">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 md:mb-16">
              <h1 className="mb-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">About Us</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Advancing scientific knowledge through cutting-edge biotechnology research and innovation
              </p>
            </div>

            <div className="prose prose-lg mb-12 max-w-none md:mb-16">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">Our Mission</h2>
              <p className="text-muted-foreground">
                BioTech Research Hub is dedicated to bridging the gap between groundbreaking scientific research 
                and the global community. We provide a platform where researchers, scientists, and writers can 
                share their discoveries, insights, and expertise in biotechnology and deep tech fields.
              </p>

              <h2 className="mt-8 font-display text-2xl font-semibold md:text-3xl">Our Story</h2>
              <p className="text-muted-foreground">
                Founded by a team of passionate scientists and technologists, our platform emerged from the need 
                for a centralized hub where the latest advancements in gene therapy, CRISPR technology, synthetic 
                biology, and other biotech innovations could be easily accessed and understood by both experts and 
                enthusiasts alike.
              </p>

              <p className="text-muted-foreground">
                Today, we serve thousands of researchers, students, and industry professionals worldwide, providing 
                them with high-quality, peer-reviewed content that pushes the boundaries of what's possible in 
                biotechnology.
              </p>
            </div>

            <div className="mb-12 md:mb-16">
              <h2 className="mb-8 font-display text-2xl font-semibold md:text-3xl">Our Values</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="p-6 md:p-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-display text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg bg-muted/30 p-8 md:p-12">
              <h2 className="mb-4 font-display text-2xl font-semibold md:text-3xl">Join Our Community</h2>
              <p className="mb-6 text-muted-foreground">
                Whether you're a researcher looking to share your work, a student eager to learn, or an industry 
                professional staying updated with the latest trends, we welcome you to join our growing community.
              </p>
              <p className="text-muted-foreground">
                Together, we're shaping the future of biotechnology and advancing human knowledge one breakthrough 
                at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
