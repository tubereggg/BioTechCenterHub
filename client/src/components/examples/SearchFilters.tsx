import { SearchFilters } from '../SearchFilters';
import { ThemeProvider } from '../ThemeProvider';
import { useState } from 'react';

export default function SearchFiltersExample() {
  const [activeFilters, setActiveFilters] = useState(['Gene Therapy', 'Last 30 days']);

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
    console.log('Removed filter:', filter);
  };

  return (
    <ThemeProvider>
      <div className="p-8">
        <SearchFilters 
          activeFilters={activeFilters}
          onRemoveFilter={handleRemoveFilter}
        />
      </div>
    </ThemeProvider>
  );
}
