"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Extracurriculars", href: "/extracurriculars" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110">
              N
            </div>
            <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg opacity-20 blur-sm group-hover:blur-md transition-all"></div>
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Niloy Meharchandani
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group",
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-emerald-600 to-green-600"></span>
                )}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Social Links */}
          <div className="hidden sm:flex items-center space-x-1">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/nilmeh" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://linkedin.com/in/niloymeharchandani" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="mailto:niloym@ucla.edu">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Theme Toggle */}
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                    N
                  </div>
                  <span className="font-bold text-lg">Niloy Meharchandani</span>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "px-4 py-3 text-sm font-medium transition-colors rounded-lg",
                          isActive
                            ? "bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-950 dark:to-amber-950 text-emerald-600 dark:text-emerald-400"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/nilmeh" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://linkedin.com/in/niloymeharchandani" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
