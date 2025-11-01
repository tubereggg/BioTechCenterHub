import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface SearchFiltersProps {
  activeFilters?: string[];
  onRemoveFilter?: (filter: string) => void;
}

export function SearchFilters({ activeFilters = [], onRemoveFilter }: SearchFiltersProps) {
  const categories = ["Gene Therapy", "CRISPR", "Synthetic Biology", "Immunotherapy", "Stem Cells"];
  const dateRanges = ["Last 7 days", "Last 30 days", "Last 3 months", "Last year"];

  return (
    <div className="space-y-4">
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <Badge 
              key={filter} 
              variant="secondary" 
              className="gap-1 pr-1"
              data-testid={`badge-filter-${filter}`}
            >
              {filter}
              <button
                onClick={() => onRemoveFilter?.(filter)}
                className="ml-1 rounded-sm p-0.5 hover-elevate"
                data-testid={`button-remove-filter-${filter}`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <Card className="p-4">
        <div className="space-y-4">
          <div>
            <h3 className="mb-3 font-display text-sm font-semibold">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`cat-${category}`} data-testid={`checkbox-category-${category}`} />
                  <Label 
                    htmlFor={`cat-${category}`}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="mb-3 font-display text-sm font-semibold">Published</h3>
            <div className="space-y-2">
              {dateRanges.map((range) => (
                <div key={range} className="flex items-center space-x-2">
                  <Checkbox id={`date-${range}`} data-testid={`checkbox-date-${range}`} />
                  <Label 
                    htmlFor={`date-${range}`}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {range}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
