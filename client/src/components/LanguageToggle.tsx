import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-md border p-1">
      <Button
        variant={language === "en" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-7 px-3 text-xs"
        data-testid="button-lang-en"
      >
        EN
      </Button>
      <Button
        variant={language === "th" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("th")}
        className="h-7 px-3 text-xs"
        data-testid="button-lang-th"
      >
        TH
      </Button>
    </div>
  );
}
