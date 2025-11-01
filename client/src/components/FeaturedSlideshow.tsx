import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Link } from "wouter";

interface FeaturedArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
  };
  readTime: number;
  date: string;
}

interface FeaturedSlideshowProps {
  articles: FeaturedArticle[];
}

export function FeaturedSlideshow({ articles }: FeaturedSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, articles.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
    setIsAutoPlaying(false);
  };

  const currentArticle = articles[currentIndex];

  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative aspect-video md:aspect-auto">
            <img
              src={currentArticle.image}
              alt={currentArticle.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <Badge variant="secondary" className="mb-4 w-fit" data-testid={`badge-category-${currentArticle.id}`}>
              {currentArticle.category}
            </Badge>
            
            <h3 className="mb-4 font-display text-2xl font-bold md:text-3xl lg:text-4xl" data-testid={`text-title-${currentArticle.id}`}>
              {currentArticle.title}
            </h3>
            
            <p className="mb-6 text-muted-foreground md:text-lg" data-testid={`text-excerpt-${currentArticle.id}`}>
              {currentArticle.excerpt}
            </p>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  {currentArticle.author.avatar && <AvatarImage src={currentArticle.author.avatar} />}
                  <AvatarFallback>{currentArticle.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium" data-testid={`text-author-${currentArticle.id}`}>
                    {currentArticle.author.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{currentArticle.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{currentArticle.readTime} min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href={`/article/${currentArticle.id}`}>
              <Button data-testid={`button-read-${currentArticle.id}`}>Read Article</Button>
            </Link>
          </div>
        </div>
      </Card>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted hover-elevate"
              }`}
              data-testid={`button-slide-${index}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            data-testid="button-prev-slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            data-testid="button-next-slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
