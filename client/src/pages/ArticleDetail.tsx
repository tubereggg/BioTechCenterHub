import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Calendar, Share2, Bookmark } from "lucide-react";
import { useRoute } from "wouter";
import crispImage from "@assets/generated_images/CRISPR_technology_featured_image_430ccd6e.png";
import femaleResearcher from "@assets/generated_images/Female_researcher_profile_photo_9dfa74e0.png";

export default function ArticleDetail() {
  const [, params] = useRoute("/article/:id");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="border-t">
        <div className="relative h-[400px] w-full overflow-hidden">
          <img 
            src={crispImage} 
            alt="Article hero" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <article className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="-mt-32 relative">
              <Badge variant="secondary" className="mb-4">Gene Therapy</Badge>
              <h1 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
                CRISPR-Cas9: Revolutionizing Gene Editing Technology
              </h1>

              <div className="mb-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={femaleResearcher} />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Dr. Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Professor of Molecular Biology</p>
                  </div>
                </div>
                <Separator orientation="vertical" className="h-8" />
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>

              <div className="mb-8 flex gap-2">
                <Button variant="outline" size="sm" className="gap-2" data-testid="button-share">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-2" data-testid="button-bookmark">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl leading-relaxed text-muted-foreground">
                  CRISPR-Cas9 has emerged as one of the most powerful tools in modern molecular biology, 
                  enabling precise modifications to DNA with unprecedented accuracy and efficiency. This 
                  revolutionary technology is transforming our approach to treating genetic diseases.
                </p>

                <h2 className="mt-12 font-display text-2xl font-semibold">The Breakthrough</h2>
                <p>
                  The CRISPR-Cas9 system, adapted from a natural defense mechanism found in bacteria, allows 
                  scientists to target specific sequences of DNA and make precise cuts. This capability has 
                  opened up new possibilities in gene therapy, agriculture, and basic research.
                </p>

                <h2 className="mt-8 font-display text-2xl font-semibold">Clinical Applications</h2>
                <p>
                  Recent clinical trials have demonstrated the potential of CRISPR-Cas9 in treating various 
                  genetic disorders, including sickle cell disease and beta-thalassemia. Patients who received 
                  CRISPR-edited cells showed significant improvements in their conditions, with some achieving 
                  complete remission.
                </p>

                <h2 className="mt-8 font-display text-2xl font-semibold">Future Prospects</h2>
                <p>
                  As the technology continues to evolve, researchers are exploring new applications, from 
                  cancer immunotherapy to developing disease-resistant crops. The potential impact on medicine 
                  and agriculture is immense, though ethical considerations remain an important part of the 
                  conversation.
                </p>

                <p>
                  The journey of CRISPR-Cas9 from laboratory discovery to clinical application exemplifies 
                  the rapid pace of innovation in biotechnology. As we continue to refine and expand this 
                  technology, we move closer to a future where genetic diseases may become a thing of the past.
                </p>
              </div>

              <Separator className="my-12" />

              <div className="mb-12">
                <h3 className="mb-4 font-display text-xl font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CRISPR</Badge>
                  <Badge variant="secondary">Gene Editing</Badge>
                  <Badge variant="secondary">Genetic Therapy</Badge>
                  <Badge variant="secondary">Molecular Biology</Badge>
                  <Badge variant="secondary">Clinical Trials</Badge>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
