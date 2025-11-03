import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 py-12 md:grid-cols-2 md:py-20 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-medium">Latest Research & Innovation</span>
            </div>
            
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {t.hero.biotech}
              </span>
            </h1>
            
            <p className="mb-8 text-base text-muted-foreground md:text-lg lg:text-xl">
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" data-testid="button-explore">
                {t.hero.exploreButton}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-latest">
                {t.hero.latestButton}
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />
              
              <div className="absolute left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 animate-pulse rounded-full border-2 border-primary/20" />
                <div className="absolute inset-4 animate-pulse rounded-full border-2 border-primary/30" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-8 animate-pulse rounded-full border-2 border-primary/40" style={{ animationDelay: '2s' }} />
                
                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/50">
                  <Sparkles className="h-16 w-16 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]" />
    </div>
  );
}
