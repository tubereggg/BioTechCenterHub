import { Search, Menu, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";
import { Link } from "wouter";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-4">
          {onMenuClick && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden"
              data-testid="button-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <Link href="/">
            <a className="flex items-center gap-2" data-testid="link-home">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">B</span>
              </div>
              <span className="hidden font-display text-xl font-bold sm:inline-block">BioTech Research</span>
            </a>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/">
            <a className="text-sm font-medium text-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-home">
              {t.nav.home}
            </a>
          </Link>
          <Link href="/categories">
            <a className="text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-categories">
              {t.nav.categories}
            </a>
          </Link>
          <Link href="/creators">
            <a className="text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-creators">
              {t.nav.creators}
            </a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-about">
              {t.nav.about}
            </a>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t.nav.searchPlaceholder}
              className="w-64 pl-9"
              data-testid="input-search"
            />
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-search-mobile">
            <Search className="h-5 w-5" />
          </Button>
          <LanguageToggle />
          <ThemeToggle />
          <Link href="/new-article">
            <Button size="sm" className="hidden gap-2 md:flex" data-testid="button-new-article">
              <Plus className="h-4 w-4" />
              {t.nav.newArticle}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
