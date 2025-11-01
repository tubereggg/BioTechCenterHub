import { Link } from "wouter";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">B</span>
              </div>
              <span className="font-display text-xl font-bold">BioTech Research</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advancing scientific knowledge through cutting-edge biotechnology research and innovation.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Browse</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories">
                  <a className="text-muted-foreground hover-elevate rounded px-2 py-1" data-testid="link-footer-categories">
                    Categories
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/researchers">
                  <a className="text-muted-foreground hover-elevate rounded px-2 py-1" data-testid="link-footer-researchers">
                    Researchers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/writers">
                  <a className="text-muted-foreground hover-elevate rounded px-2 py-1" data-testid="link-footer-writers">
                    Writers
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover-elevate rounded px-2 py-1" data-testid="link-footer-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-elevate rounded px-2 py-1" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover-elevate rounded px-2 py-1" data-testid="link-footer-privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Connect</h3>
            <div className="flex gap-2">
              <a 
                href="#" 
                className="flex h-9 w-9 items-center justify-center rounded-md border hover-elevate" 
                data-testid="link-social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="flex h-9 w-9 items-center justify-center rounded-md border hover-elevate" 
                data-testid="link-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="flex h-9 w-9 items-center justify-center rounded-md border hover-elevate" 
                data-testid="link-social-github"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BioTech Research Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
