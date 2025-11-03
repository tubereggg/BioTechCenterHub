import { Search, Menu, Plus, LogIn, LogOut, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";
import { useLanguage } from "./LanguageProvider";
import { useAuth } from "@/hooks/useAuth";
import { translations } from "@/lib/translations";
import { Link } from "wouter";
import { useState } from "react";

export function Header() {
  const { language } = useLanguage();
  const t = translations[language];
  const { user, isAuthenticated, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden"
              data-testid="button-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/">
              <div className="flex cursor-pointer items-center gap-2" data-testid="link-home">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <span className="font-display text-lg font-bold text-primary-foreground">B</span>
                </div>
                <span className="hidden font-display text-xl font-bold sm:inline-block">BioTech Research</span>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
          <Link href="/">
            <span className="cursor-pointer text-sm font-medium text-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-home">
              {t.nav.home}
            </span>
          </Link>
          <Link href="/categories">
            <span className="cursor-pointer text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-categories">
              {t.nav.categories}
            </span>
          </Link>
          <Link href="/creators">
            <span className="cursor-pointer text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-creators">
              {t.nav.creators}
            </span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer text-sm font-medium text-muted-foreground hover-elevate rounded-md px-3 py-2" data-testid="link-nav-about">
              {t.nav.about}
            </span>
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
          
          {isAdmin && (
            <Link href="/new-article">
              <Button size="sm" className="hidden gap-2 md:flex" data-testid="button-new-article">
                <Plus className="h-4 w-4" />
                {t.nav.newArticle}
              </Button>
            </Link>
          )}
          
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full" data-testid="button-user-menu">
                  <Avatar className="h-9 w-9">
                    {user.profileImageUrl && <AvatarImage src={user.profileImageUrl} alt={user.firstName || "User"} style={{ objectFit: 'cover' }} />}
                    <AvatarFallback>
                      {user.firstName?.charAt(0) || user.email?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.firstName && user.lastName 
                        ? `${user.firstName} ${user.lastName}`
                        : user.firstName || user.email}
                    </p>
                    {user.email && (
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    )}
                    {isAdmin && (
                      <p className="text-xs font-semibold text-primary">Admin</p>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="/api/logout" className="cursor-pointer" data-testid="link-logout">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => window.location.href = '/api/login'}
              className="hidden gap-2 md:flex"
              data-testid="button-login"
            >
              <LogIn className="h-4 w-4" />
              <span>Log in</span>
            </Button>
          )}
          </div>
        </div>
      </header>
      <MobileMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </>
  );
}
