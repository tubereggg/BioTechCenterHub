import { CategoryCard } from '../CategoryCard';
import { ThemeProvider } from '../ThemeProvider';
import { Dna } from 'lucide-react';

export default function CategoryCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <CategoryCard
          id="gene-therapy"
          name="Gene Therapy"
          description="Advanced techniques for treating genetic disorders through targeted gene modification."
          icon={Dna}
          articleCount={24}
        />
      </div>
    </ThemeProvider>
  );
}
