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
    category: "Residential Space",
    description: "Transforming this Guwahati flat into a modern living space with smart storage solutions and contemporary aesthetics. The design focuses on maximizing space utilization while maintaining a clean, uncluttered look. Features include custom-built furniture, ambient lighting, and a neutral color palette that creates a sense of spaciousness and tranquility.",
    image: "/images/User-friendly-Interior-Design.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/amar_notun_ghor_eohqnl",
    technologies: ["Space Planning", "Custom Furniture", "Modern Aesthetics", "Smart Storage"]
  },
  {
    id: 2,
    title: "Full Modular Design in Jorhat",
    category: "Kitchen Interior Design",
    description: "Experience the perfect blend of functionality and style with our Full Modular Kitchen design. Featuring premium materials, smart storage solutions, and a modern aesthetic, this kitchen is designed for both beauty and practicality. The seamless integration of appliances and custom cabinetry creates a space that's as efficient as it is elegant.",
    image: "/images/iitt.webp",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/Modular_Kitchen_eu6kz9",
    technologies: ["Modular Design", "Premium Materials", "Smart Storage"]
  },
  {
    id: 3,
    title: "Full Flat Interior in Six-Mile",
    category: "Residential Space",
    description: "Complete interior transformation of a Six-Mile flat featuring a harmonious blend of modern design and functionality. The space showcases an open-plan living area, modular kitchen, and well-appointed bedrooms with custom wardrobes. The design incorporates warm wood tones, textured finishes, and strategic lighting to create a welcoming and sophisticated atmosphere.",
    image: "/images/flat-interior-designing-1000x1000.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/dbre_ooff5o",
    technologies: ["Complete Interior Design", "Custom Carpentry", "Lighting Design", "Space Optimization"]
  },
  {
    id: 4,
    title: "Super Mart Interior Design in Bongaigaon",
    category: "Commercial Space",
    description: "Redesigned retail space for a modern supermarket in Bongaigaon, focusing on customer flow and product visibility. The layout features wide aisles, strategic product placement, and energy-efficient LED lighting. The design includes durable, easy-to-clean surfaces and a welcoming checkout area to enhance the shopping experience.",
    image: "/images/ardaas-super-market-baddi-house-of-dc-3.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/bongaigaon_x8bbfr",
    technologies: ["Retail Design", "Space Planning", "Lighting Design", "Customer Flow"]
  },
  {
    id: 5,
    title: "Contemporary Living Space",
    category: "Residential Interior",
    description: "Elegant living space designed for modern lifestyles, featuring an open floor plan that seamlessly connects the living, dining, and kitchen areas. The design incorporates natural materials, a neutral color scheme, and floor-to-ceiling windows that flood the space with natural light. Custom built-ins and multi-functional furniture maximize both style and storage.",
    image: "/images/appartments-flats-interior-design.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/RESIDENTIAL_vkzmyc",
    technologies: ["Open Floor Plan", "Custom Millwork", "Natural Materials", "Smart Home Integration"]
  },
  {
    id: 6,
    title: "Ladies Parlour Interior Design",
    category: "Commercial Space",
    description: "Luxurious and inviting ladies' parlor designed for relaxation and beauty treatments. The space features plush seating, soft lighting, and a soothing color palette of pastel tones. Thoughtful design elements include private treatment rooms, a comfortable waiting area, and a retail display for beauty products. The layout ensures privacy while maintaining an open, airy feel.",
    image: "/images/beat.jpg",
    videoUrl: "https://res.cloudinary.com/danqijapg/video/upload/Video_by_room.editors_-_ID_C7dhpdGyq-X_mfmrj1",
    technologies: ["Spa Design", "Luxury Interiors", "Space Planning", "Ambient Lighting"]
  }
];