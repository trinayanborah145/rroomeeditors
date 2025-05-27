export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  videoUrl?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Flat Interior Design in Guwahati",
    category: "Residential space",
    description: "Modern retail space design with efficient layout and customer-friendly features.",
    image: "/images/User-friendly-Interior-Design.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/amar_notun_ghor_eohqnl",
    technologies: ["React Native", "Redux", "Firebase"],
    githubUrl: "https://github.com/username/task-manager"
  },
  {
    id: 2,
    title: "Full Modular Design in Jorhat",
    category: "Kitchen Interior Design",
    description: "Contemporary interior design showcasing elegant living spaces and modern aesthetics.",
    image: "/images/iitt.webp",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/Modular_Kitchen_eu6kz9",
    technologies: ["Modular Design", "Premium Materials", "Smart Storage"]
  },
  {
    id: 3,
    title: "Full Flat Interior in Six-Mile",
    category: "Residential space",
    description: "Sophisticated office design with walnut wood accents and premium finishes for a professional workspace.",
    image: "/images/flat-interior-designing-1000x1000.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/dbre_ooff5o",
    technologies: ["Office Design", "Premium Materials", "Ergonomic Layout"]
  },
  {
    id: 4,
    title: "Super Mart Interior Design in Bongaigoan",
    category: "commercial space",
    description: "Spacious L-shaped modular kitchen with modern appliances and efficient storage solutions.",
    image: "/images/ardaas-super-market-baddi-house-of-dc-3.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/bongaigaon_x8bbfr",
    technologies: ["Modular Kitchen", "Smart Storage", "Contemporary Design"]
  },
  {
    id: 5,
    title: "Living Space",
    category: "Residential",
    description: "User-friendly interior design featuring a harmonious blend of functionality and modern aesthetics.",
    image: "/images/appartments-flats-interior-design.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/RESIDENTIAL_vkzmyc",
    technologies: ["Modern Living", "Functional Design", "Elegant Interiors"]
  },
  {
    id: 6,
    title: "Ladies ParlourInterior Design ",
    category: "commercial space",
    description: "A modern and responsive portfolio website to showcase creative work and skills.",
    image: "/images/beat.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/Video_by_room.editors_-_ID_C7dhpdGyq-X_mfmrj1",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/username/portfolio"
  }
];