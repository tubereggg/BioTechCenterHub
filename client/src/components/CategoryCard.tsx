import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  articleCount: number;
  color?: string;
}

export function CategoryCard({ 
  id, 
  name, 
  description, 
  icon: Icon, 
  articleCount,
  color = "primary"
}: CategoryCardProps) {
  return (
    <Link href={`/category/${id}`}>
      <a data-testid={`card-category-${id}`}>
        <Card className="group p-8 transition-transform hover:-translate-y-1 hover-elevate">
          <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-${color}/10`}>
            <Icon className={`h-6 w-6 text-${color}`} />
          </div>
          <h3 className="mb-2 font-display text-2xl font-semibold" data-testid={`text-category-name-${id}`}>
            {name}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground" data-testid={`text-category-desc-${id}`}>
            {description}
          </p>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {articleCount} Articles
          </span>
        </Card>
      </a>
    </Link>
  );
}
