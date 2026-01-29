import { motion } from "framer-motion";
import { MapPin, Award, Calendar, Globe, Linkedin } from "lucide-react";
import profileImage from "@/assets/ivleena-profile.jpeg";

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "5+" },
  { icon: Globe, label: "International Events", value: "10+" },
  { icon: Award, label: "Major Projects", value: "20+" },
  { icon: MapPin, label: "Destinations Covered", value: "50+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative mb-8">
              {/* Profile Picture */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-full blur-lg opacity-30" />
                <img
                  src={profileImage}
                  alt="Ivleena Chakraborty"
                  className="relative w-full h-full object-cover rounded-full border-4 border-secondary shadow-elevated"
                />
                {/* LinkedIn Badge */}
                <a
                  href="https://www.linkedin.com/in/ivleena-chakraborty-426947217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card p-5 sm:p-6 rounded-xl shadow-soft border border-border hover:shadow-elevated hover:border-secondary/30 transition-all group"
                >
                  <stat.icon className="w-7 h-7 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Shaping the Future of{" "}
              <span className="text-primary">Tourism in Assam</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a Tourism Consultant at the Assam Tourism Development Corporation, 
                I specialize in conceptualizing and executing large-scale tourism initiatives 
                that showcase the rich cultural heritage and natural beauty of Northeast India.
              </p>
              <p>
                My work bridges international collaboration with local excellence, bringing 
                world-class events to Assam while promoting sustainable tourism practices 
                that benefit local communities and preserve our unique ecosystems.
              </p>
              <p>
                From coordinating international exchange programs with ASEAN nations to 
                managing historic concert events and cultural carnivals, I am committed to 
                positioning Assam as a premier global tourism destination.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+917002084976"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-forest-light transition-colors shadow-soft"
              >
                <span>📞</span> +91 7002084976
              </a>
              <a
                href="https://wa.me/917002084976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-gold-light transition-colors shadow-soft"
              >
                <span>💬</span> WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/ivleena-chakraborty-426947217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0077B5] text-[#0077B5] rounded-lg font-medium hover:bg-[#0077B5] hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;