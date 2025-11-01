import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/DNA_helix_hero_background_cd89d1f3.png";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="DNA helix visualization" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Exploring the Future of{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              BioTech
            </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Discover breakthrough research in gene therapy, CRISPR technology, synthetic biology, 
            and cutting-edge biotech innovations from leading scientists worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" data-testid="button-explore">
              Explore Research
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 backdrop-blur-sm" 
              data-testid="button-latest"
            >
              Latest Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
