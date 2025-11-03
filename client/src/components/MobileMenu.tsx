import { Link } from "wouter";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/translations";
import { Home, FolderOpen, Users, Info, Plus } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const menuItems = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/categories", label: t.nav.categories, icon: FolderOpen },
    { href: "/creators", label: t.nav.creators, icon: Users },
    { href: "/about", label: t.nav.about, icon: Info },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="font-display text-lg font-bold text-primary-foreground">B</span>
            </div>
            <span className="font-display text-xl font-bold">BioTech</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <a onClick={() => onOpenChange(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 text-base"
                    data-testid={`link-mobile-${item.href}`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                </a>
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 border-t pt-6">
          <Link href="/new-article">
            <a onClick={() => onOpenChange(false)}>
              <Button className="w-full gap-2" data-testid="button-mobile-new-article">
                <Plus className="h-4 w-4" />
                {t.nav.newArticle}
              </Button>
            </a>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
