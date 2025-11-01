import { ResearcherCard } from '../ResearcherCard';
import { ThemeProvider } from '../ThemeProvider';
import researcherImage from "@assets/generated_images/Female_researcher_profile_photo_9dfa74e0.png";

export default function ResearcherCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <ResearcherCard
          id="sarah-chen"
          name="Dr. Sarah Chen"
          title="Professor of Molecular Biology"
          avatar={researcherImage}
          expertise={["CRISPR", "Gene Therapy"]}
          publicationsCount={42}
        />
      </div>
    </ThemeProvider>
  );
}
