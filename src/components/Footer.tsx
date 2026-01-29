import { motion } from "framer-motion";
import { Linkedin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-charcoal text-cream/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Name & Title */}
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-cream mb-1">
              Ivleena Chakraborty
            </h3>
            <p className="text-gold text-sm">Tourism Consultant • Assam Tourism Development Corporation</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+917002084976"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-gold" />
            </a>
            <a
              href="https://wa.me/917002084976"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-gold" />
            </a>
            <a
              href="https://www.linkedin.com/in/ivleena-chakraborty-426947217"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center hover:bg-[#005885] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-cream/20" />

          {/* Copyright */}
          <p className="text-sm text-center">
            © {currentYear} All rights reserved. Made by{" "}
            <a 
              href="https://nilamxsc.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors underline underline-offset-2"
            >
              nilamxsc.dev
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;