import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface CreatorCardProps {
  id: string;
  name: string;
  position: string;
  role?: string;
  avatar?: string;
  expertise: string[];
  publicationsCount: number;
}

export function CreatorCard({ 
  id, 
  name, 
  position,
  role = "Creator",
  avatar, 
  expertise, 
  publicationsCount 
}: CreatorCardProps) {
  return (
    <Link href={`/creator/${id}`}>
      <a data-testid={`card-creator-${id}`}>
        <Card className="group p-8 text-center transition-transform hover:-translate-y-1 hover-elevate">
          <Avatar className="mx-auto mb-4 h-24 w-24">
            {avatar && <AvatarImage src={avatar} />}
            <AvatarFallback className="text-2xl">{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="mb-1 font-display text-xl font-semibold" data-testid={`text-creator-name-${id}`}>
            {name}
          </h3>
          <p className="mb-1 text-sm font-medium text-primary" data-testid={`text-creator-role-${id}`}>
            {role}
          </p>
          <p className="mb-4 text-sm text-muted-foreground" data-testid={`text-creator-position-${id}`}>
            {position}
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
