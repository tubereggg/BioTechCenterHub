import { ArticleCard } from '../ArticleCard';
import { ThemeProvider } from '../ThemeProvider';
import crispImage from "@assets/generated_images/CRISPR_technology_featured_image_430ccd6e.png";
import researcherImage from "@assets/generated_images/Female_researcher_profile_photo_9dfa74e0.png";

export default function ArticleCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <ArticleCard
          id="1"
          title="CRISPR-Cas9: Revolutionizing Gene Editing"
          excerpt="Exploring the latest advances in CRISPR technology and its applications in treating genetic disorders."
          category="Gene Therapy"
          image={crispImage}
          author={{
            name: "Dr. Sarah Chen",
            avatar: researcherImage
          }}
          readTime={8}
          date="Nov 1, 2025"
        />
      </div>
    </ThemeProvider>
  );
}
