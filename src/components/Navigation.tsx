import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`font-display text-xl font-bold transition-colors ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Ivleena<span className="text-secondary">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium text-sm tracking-wide transition-colors hover:text-secondary ${
                    isScrolled ? "text-muted-foreground" : "text-cream/80"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://wa.me/917002084976"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-gold-light transition-colors shadow-soft"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-background/98 backdrop-blur-md border-b border-border md:hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <a
                  href="https://wa.me/917002084976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 py-3 px-4 bg-secondary text-secondary-foreground rounded-lg font-medium text-center hover:bg-gold-light transition-colors"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;