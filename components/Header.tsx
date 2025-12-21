"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon, Globe, Car } from "lucide-react";
import { useApp } from "../lib/context";
import { COMPANY_CONFIG } from "../lib/company-config";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, theme, setTheme, t } = useApp();

  const navigation = [
    { name: t("home"), href: "#home" },
    { name: t("services"), href: "#services" },
    { name: t("about"), href: "#about" },
    { name: t("faq"), href: "#faq" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-lg border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                height={34}
                width={34}
                className="rounded-full"
                alt="S3"
              />{" "}
              {/* Update with actual path and alt text */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">
                {COMPANY_CONFIG.name}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                PREMIUM DETAILING
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "ru" ? "kz" : "ru")}
              className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
