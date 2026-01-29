import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import aseanImage from "@/assets/asean-exchange.jpg";
import concertImage from "@/assets/post-malone-concert.jpg";
import carnivalImage from "@/assets/brahmaputra-carnival.jpg";
import advantageAssamImage from "@/assets/advantage-assam-2.jpg";

const projects = [
  {
    id: 1,
    title: "Advantage Assam 2.0 - Global Investors Summit",
    category: "Investment Summit",
    date: "February 2025",
    location: "Guwahati, Assam",
    image: advantageAssamImage,
    description:
      "A flagship global investment summit organized by the Government of Assam to showcase the state's immense potential across sectors. This landmark event brought together investors, policymakers, and industry leaders from around the world to explore business opportunities in Assam.",
    highlights: [
      "Global investors and delegates",
      "Multi-sector investment opportunities",
      "Policy announcements and MoU signings",
      "B2B meetings and networking",
      "Showcase of Assam's economic potential",
    ],
    impact: "Positioning Assam as a premier investment destination and driving economic growth through strategic partnerships and investments.",
  },
  {
    id: 2,
    title: "ASEAN-India Tourism Professional Exchange Programme 2025",
    category: "International Diplomacy",
    date: "December 12-17, 2025",
    location: "Guwahati, Assam",
    image: aseanImage,
    description:
      "A landmark international initiative organized by ATDC under the aegis of the Ministry of External Affairs, Government of India. This programme brought together tourism professionals from all 10 ASEAN Member States for intensive knowledge exchange and collaborative learning in Guwahati.",
    highlights: [
      "Delegates from 10 ASEAN nations",
      "5-day intensive programme",
      "Cultural immersion experiences",
      "B2B networking sessions",
      "Policy dialogue forums",
    ],
    impact: "Strengthening ASEAN-India tourism ties and positioning Assam as a gateway to Northeast India for international visitors.",
  },
  {
    id: 3,
    title: "Post Malone Live in Guwahati",
    category: "Concert Tourism",
    date: "December 8, 2025",
    location: "Guwahati, Assam",
    image: concertImage,
    description:
      "A historic milestone in Assam's cultural calendar — the first-ever major international concert in Northeast India. Part of Assam's ambitious concert tourism strategy under an MoU with Big Tree Entertainment, this event brought global star Post Malone to Guwahati.",
    highlights: [
      "First international concert in Northeast India",
      "Part of strategic MoU with Big Tree Entertainment",
      "Thousands of attendees from across India",
      "Massive boost to local hospitality sector",
      "National and international media coverage",
    ],
    impact: "Establishing Assam on the global entertainment map and demonstrating the state's capability to host world-class events.",
  },
  {
    id: 4,
    title: "Brahmaputra Carnival 2024-25",
    category: "Cultural Festival",
    date: "December 2024 - March 2025",
    location: "Lachit Ghat, Guwahati",
    image: carnivalImage,
    description:
      "A three-month riverside extravaganza celebrating Assam's rich cultural heritage along the banks of the mighty Brahmaputra. Organized by the Assam Tourism Department, this carnival offers a vibrant mix of culture, adventure, and luxury experiences.",
    highlights: [
      "3-month long festival",
      "Adventure sports activities",
      "Cultural performances daily",
      "Artisan markets and food festivals",
      "Riverside camping experiences",
    ],
    impact: "Creating a signature winter tourism product for Assam and boosting the local economy through sustained visitor engagement.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Landmark Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing initiatives that have shaped Assam's tourism landscape and created 
            lasting impact on the regional and international stage.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    Key Highlights
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                  <p className="text-sm font-medium text-primary mb-1">Impact</p>
                  <p className="text-muted-foreground text-sm">{project.impact}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;