import { Search, Menu, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "wouter";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
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
              Home
            </a>
          </Link>
          <Link href="/categories">
            <a className="text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-categories">
              Categories
            </a>
          </Link>
          <Link href="/researchers">
            <a className="text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-researchers">
              Researchers
            </a>
          </Link>
          <Link href="/writers">
            <a className="text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-writers">
              Writers
            </a>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles, topics..."
              className="w-64 pl-9"
              data-testid="input-search"
            />
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden" data-testid="button-search-mobile">
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button size="sm" className="hidden gap-2 md:flex" data-testid="button-new-article">
            <Plus className="h-4 w-4" />
            New Article
          </Button>
        </div>
      </div>
    </header>
  );
}
