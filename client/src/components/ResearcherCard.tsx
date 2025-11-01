import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface ResearcherCardProps {
  id: string;
  name: string;
  title: string;
  avatar?: string;
  expertise: string[];
  publicationsCount: number;
}

export function ResearcherCard({ 
  id, 
  name, 
  title, 
  avatar, 
  expertise, 
  publicationsCount 
}: ResearcherCardProps) {
  return (
    <Link href={`/researcher/${id}`}>
      <a data-testid={`card-researcher-${id}`}>
        <Card className="group p-8 text-center transition-transform hover:-translate-y-1 hover-elevate">
          <Avatar className="mx-auto mb-4 h-24 w-24">
            {avatar && <AvatarImage src={avatar} />}
            <AvatarFallback className="text-2xl">{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="mb-1 font-display text-xl font-semibold" data-testid={`text-researcher-name-${id}`}>
            {name}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground" data-testid={`text-researcher-title-${id}`}>
            {title}
          </p>
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {expertise.slice(0, 2).map((exp, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {exp}
              </Badge>
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {publicationsCount} Publications
          </span>
        </Card>
      </a>
    </Link>
  );
}
