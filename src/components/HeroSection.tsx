import { motion } from "framer-motion";
import { ChevronDown, Linkedin, Phone, MessageCircle, Download } from "lucide-react";
import heroImage from "@/assets/hero-brahmaputra.jpg";
import profileImage from "@/assets/ivleena-profile.jpeg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brahmaputra River at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto">
              <div className="absolute inset-0 bg-gold rounded-full blur-lg opacity-50" />
              <img
                src={profileImage}
                alt="Ivleena Chakraborty"
                className="relative w-full h-full object-cover rounded-full border-4 border-gold shadow-gold"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Tourism Consultant
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight"
          >
            Ivleena Chakraborty
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-cream/90 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-3"
          >
            Crafting Unforgettable Experiences Across Northeast India
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gold-light text-base sm:text-lg font-medium mb-8"
          >
            Assam Tourism Development Corporation
          </motion.p>

          {/* Social Links & Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center justify-center gap-4">
              <a
                href="tel:+917002084976"
                className="w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center hover:bg-cream/20 transition-all hover:scale-110"
                aria-label="Call"
              >
                <Phone className="w-5 h-5 text-gold" />
              </a>
              <a
                href="https://wa.me/917002084976"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center hover:bg-cream/20 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-gold" />
              </a>
              <a
                href="https://www.linkedin.com/in/ivleena-chakraborty-426947217"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center hover:bg-[#005885] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Resume Download Button */}
            <Button
              asChild
              className="bg-gold hover:bg-gold-light text-charcoal font-semibold px-8 py-3 rounded-full shadow-gold hover:shadow-elevated transition-all"
            >
              <a href="/resume-ivleena-chakraborty.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 hover:text-gold transition-colors cursor-pointer"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;