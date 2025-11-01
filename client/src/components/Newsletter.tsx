import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="border-t bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Stay Updated on BioTech Breakthroughs
          </h2>
          <p className="mb-8 text-muted-foreground">
            Get the latest research articles, insights, and discoveries delivered directly to your inbox every week.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="input-newsletter-email"
            />
            <Button type="submit" size="lg" data-testid="button-subscribe">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
