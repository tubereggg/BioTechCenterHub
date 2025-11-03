import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";
import { Link } from "wouter";

interface ArticleCardProps {
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

export function ArticleCard({ 
  id, 
  title, 
  excerpt, 
  category, 
  image, 
  author, 
  readTime, 
  date 
}: ArticleCardProps) {
  return (
    <Link href={`/article/${id}`}>
      <a data-testid={`card-article-${id}`}>
        <Card className="group overflow-hidden transition-transform hover:-translate-y-1 hover-elevate">
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${id}`}>
              {category}
            </Badge>
            <h3 className="mb-2 line-clamp-2 font-display text-xl font-semibold" data-testid={`text-title-${id}`}>
              {title}
            </h3>
            <p className="mb-4 line-clamp-2 text-sm text-secondary-foreground" data-testid={`text-excerpt-${id}`}>
              {excerpt}
            </p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  {author.avatar && <AvatarImage src={author.avatar} />}
                  <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium" data-testid={`text-author-${id}`}>
                  {author.name}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{readTime} min</span>
                </div>
                <span>{date}</span>
              </div>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}
