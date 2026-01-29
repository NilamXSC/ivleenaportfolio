import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, ExternalLink, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-12">
              Whether you're planning a major tourism initiative, seeking collaboration 
              on cultural events, or exploring partnership opportunities in Northeast India — 
              I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {/* Phone */}
            <a
              href="tel:+917002084976"
              className="group p-6 bg-cream/10 backdrop-blur-sm rounded-xl border border-cream/20 hover:bg-cream/20 transition-all duration-300"
            >
              <Phone className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Call Me</h3>
              <p className="text-cream/70 text-sm mb-2">Mon-Sat, 9AM-6PM IST</p>
              <p className="text-gold font-medium group-hover:underline">+91 7002084976</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917002084976"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-cream/10 backdrop-blur-sm rounded-xl border border-cream/20 hover:bg-cream/20 transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-cream/70 text-sm mb-2">Quick responses</p>
              <p className="text-gold font-medium inline-flex items-center gap-1 group-hover:underline">
                Message Me <ExternalLink className="w-3 h-3" />
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ivleena-chakraborty-426947217"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-cream/10 backdrop-blur-sm rounded-xl border border-cream/20 hover:bg-cream/20 transition-all duration-300"
            >
              <Linkedin className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-cream/70 text-sm mb-2">Connect professionally</p>
              <p className="text-gold font-medium inline-flex items-center gap-1 group-hover:underline">
                View Profile <ExternalLink className="w-3 h-3" />
              </p>
            </a>

            {/* Location */}
            <div className="p-6 bg-cream/10 backdrop-blur-sm rounded-xl border border-cream/20">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-cream/70 text-sm mb-2">Based in Assam</p>
              <p className="text-gold font-medium">Guwahati, India</p>
            </div>
          </motion.div>

          {/* Organization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex flex-col items-center p-6 bg-cream/5 rounded-xl border border-cream/10"
          >
            <p className="text-cream/60 text-sm uppercase tracking-wider mb-2">Currently with</p>
            <p className="font-display text-xl font-semibold text-gold">
              Assam Tourism Development Corporation
            </p>
            <p className="text-cream/70 text-sm mt-1">Government of Assam</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;