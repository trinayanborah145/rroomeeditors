export interface Service {
  id: string;
  title: string;
  description: string;
  tagline: string;
  icon: string;
  overview: string;
  deliverables: string[];
  timeline: string;
  tools?: string[];
  portfolio?: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  whyChooseUs: string;
  testimonial?: {
    quote: string;
    author: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'residential-design',
    title: 'Residential Design',
    tagline: 'Turning your house into a dream home',
    description: 'Transform your living space into a personalized sanctuary that reflects your lifestyle and aesthetic preferences.',
    icon: 'Home',
    overview: 'Our residential design service creates beautiful, functional spaces tailored to your unique needs. We work closely with you to understand your vision, lifestyle, and preferences, then bring that vision to life with thoughtful design solutions that maximize both form and function.',
    deliverables: [
      'Initial consultation and space assessment',
      'Custom 2D and 3D design concepts',
      'Material and finish selection',
      'Furniture and decor recommendations',
      'Lighting design plan',
      'Project management and vendor coordination'
    ],
    timeline: '4-12 weeks depending on project scope',
    tools: ['AutoCAD', 'SketchUp', '3ds Max', 'Photoshop'],
    portfolio: [
      {
        image: '/images/residential-1.jpg',
        title: 'Modern Living Room',
        description: 'Contemporary design with warm wood accents and natural light'
      },
      {
        image: '/images/residential-2.jpg',
        title: 'Luxury Bedroom Suite',
        description: 'Elegant master bedroom with custom walk-in closet'
      },
      {
        image: '/images/residential-3.jpg',
        title: 'Open Concept Kitchen',
        description: 'Sleek kitchen with waterfall island and smart storage'
      }
    ],
    whyChooseUs: 'With over 10 years of experience in residential design, we understand how to create spaces that are not only beautiful but also functional for everyday living. Our attention to detail and personalized approach ensures your home reflects your unique style and needs.',
    testimonial: {
      quote: 'Working with Room Editors transformed our apartment into a home we absolutely love. Their attention to detail and understanding of our lifestyle made all the difference.',
      author: 'Sarah K., Homeowner'
    },
    faqs: [
      {
        question: 'How much does residential design cost?',
        answer: 'Our residential design services typically range from $2,000 to $15,000 depending on the scope of work, size of the space, and level of detail required.'
      },
      {
        question: 'Do you work with existing furniture?',
        answer: 'Absolutely! We can incorporate your existing pieces into the new design while suggesting strategic updates to create a cohesive look.'
      },
      {
        question: 'What is the typical timeline for a residential project?',
        answer: 'Most residential projects take between 4-12 weeks from initial consultation to final installation, depending on the scope and complexity.'
      }
    ]
  },
  {
    id: 'commercial-design',
    title: 'Commercial Design',
    tagline: 'Creating workspaces that inspire and impress',
    description: 'Elevate your business environment with thoughtful design that enhances productivity and embodies your brand values.',
    icon: 'Building',
    overview: 'Our commercial design services help businesses create functional, attractive spaces that reflect their brand and support their operations. From office spaces to retail environments, we design with both aesthetics and functionality in mind.',
    deliverables: [
      'Space planning and layout optimization',
      'Brand-consistent design concepts',
      'Furniture and finish specifications',
      'Lighting and acoustic solutions',
      'Wayfinding and signage design',
      'Project management and installation oversight'
    ],
    timeline: '8-16 weeks depending on project scope',
    tools: ['AutoCAD', 'Revit', 'Enscape', 'Photoshop'],
    portfolio: [
      {
        image: '/images/commercial-1.jpg',
        title: 'Modern Office Space',
        description: 'Open concept workspace with collaborative areas and private offices'
      },
      {
        image: '/images/commercial-2.jpg',
        title: 'Retail Store Design',
        description: 'Boutique retail space with custom displays and lighting'
      }
    ],
    whyChooseUs: 'With our extensive experience in commercial design, we understand how to create spaces that not only look impressive but also enhance productivity and reflect your brand identity. We stay current with workplace trends and ergonomic best practices to deliver designs that work as hard as your team does.',
    testimonial: {
      quote: 'The team transformed our office into a space that perfectly represents our brand and has significantly improved team collaboration and morale.',
      author: 'Michael T., CEO of TechCorp'
    },
    faqs: [
      {
        question: 'What types of commercial spaces do you design?',
        answer: 'We design a variety of commercial spaces including offices, retail stores, restaurants, healthcare facilities, and more.'
      },
      {
        question: 'How do you incorporate our brand into the design?',
        answer: 'We work closely with your marketing team to understand your brand identity, values, and culture, then translate those elements into the physical space through color, materials, and layout.'
      }
    ]
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    tagline: 'See your space before it exists',
    description: 'Experience your space before it\'s built with photorealistic 3D renderings and virtual walkthroughs.',
    icon: 'Cube',
    overview: 'Our 3D visualization services bring your design concepts to life with stunning realism. Perfect for presentations, marketing materials, and ensuring everyone is aligned before construction begins.',
    deliverables: [
      'High-quality 3D renderings',
      'Virtual reality walkthroughs',
      'Material and finish visualizations',
      'Lighting studies',
      'Revision rounds'
    ],
    timeline: '2-4 weeks per space',
    tools: ['3ds Max', 'V-Ray', 'Unreal Engine', 'Blender'],
    portfolio: [
      {
        image: '/images/3d-1.jpg',
        title: 'Residential Living Room',
        description: 'Photorealistic rendering of a modern living space'
      },
      {
        image: '/images/3d-2.jpg',
        title: 'Commercial Lobby',
        description: '3D visualization of a corporate lobby with natural lighting'
      }
    ],
    whyChooseUs: 'Our 3D visualization team combines technical expertise with an artist\'s eye for detail, creating renderings that are not just accurate but truly breathtaking. We use the latest technology to help you visualize every aspect of your space before any physical work begins.',
    testimonial: {
      quote: 'The 3D visualizations helped us make critical design decisions before construction, saving us time and money on changes.',
      author: 'Lisa M., Project Manager'
    },
    faqs: [
      {
        question: 'How long does it take to create a 3D visualization?',
        answer: 'A typical 3D visualization takes 2-4 weeks depending on the complexity of the space and the number of revisions required.'
      },
      {
        question: 'What file formats do you provide?',
        answer: 'We can provide images in JPG, PNG, or TIFF formats, and we can also create interactive VR experiences or 360-degree views.'
      }
    ]
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    tagline: 'Bespoke pieces for unique spaces',
    description: 'Commission bespoke furniture pieces designed exclusively for your space.',
    icon: 'Sofa',
    overview: 'Our custom furniture service creates one-of-a-kind pieces that perfectly fit your space and style. From concept to creation, we handle every detail to bring your vision to life.',
    deliverables: [
      'Custom furniture design',
      'Material and finish selection',
      '3D renderings',
      'Prototype review',
      'Delivery and installation'
    ],
    timeline: '6-12 weeks per piece',
    tools: ['SketchUp', 'AutoCAD', 'V-Ray'],
    portfolio: [
      {
        image: '/images/furniture-1.jpg',
        title: 'Custom Dining Table',
        description: 'Handcrafted solid wood dining table with metal base'
      },
      {
        image: '/images/furniture-2.jpg',
        title: 'Built-in Bookshelves',
        description: 'Floor-to-ceiling bookshelves with integrated lighting'
      }
    ],
    whyChooseUs: 'Our custom furniture is crafted with precision and attention to detail, using only the finest materials and construction techniques. We work with skilled artisans who take pride in creating heirloom-quality pieces that will last for generations.',
    testimonial: {
      quote: 'The custom dining table they created is the centerpiece of our home. The craftsmanship is exceptional!',
      author: 'David R., Homeowner'
    },
    faqs: [
      {
        question: 'What materials do you work with?',
        answer: 'We work with a wide range of materials including hardwoods, metals, glass, and upholstery fabrics. We can source sustainable and eco-friendly options as well.'
      },
      {
        question: 'Can you match existing furniture?',
        answer: 'Yes, we can match existing furniture styles, finishes, and even replicate specific design elements to create cohesive pieces.'
      }
    ]
  },
  {
    id: 'tv-unit-design',
    title: 'TV Unit Design',
    tagline: 'Entertainment centers reimagined',
    description: 'Elevate your entertainment space with custom TV unit designs that combine style and functionality.',
    icon: 'Tv',
    overview: 'Our custom TV unit designs transform your entertainment area into a stylish focal point while providing practical storage solutions and hiding unsightly cables.',
    deliverables: [
      'Custom TV unit design',
      'Material and finish selection',
      '3D visualization',
      'Technical drawings',
      'Installation coordination'
    ],
    timeline: '4-8 weeks',
    tools: ['AutoCAD', 'SketchUp', 'V-Ray'],
    portfolio: [
      {
        image: '/images/tvunit-1.jpg',
        title: 'Modern Media Wall',
        description: 'Floating entertainment unit with LED lighting and hidden storage'
      },
      {
        image: '/images/tvunit-2.jpg',
        title: 'Rustic TV Console',
        description: 'Reclaimed wood TV unit with industrial metal accents'
      }
    ],
    whyChooseUs: 'We understand that your entertainment center is more than just a place for your TV - it\'s the focal point of your living space. Our designs combine cutting-edge technology integration with timeless aesthetics to create a piece that enhances both your viewing experience and your room\'s decor.',
    testimonial: {
      quote: 'The custom TV unit they designed perfectly fits our space and hides all the electronics. It looks like a piece of art!',
      author: 'Jennifer L., Client'
    },
    faqs: [
      {
        question: 'Can you design around my existing TV size?',
        answer: 'Absolutely! We design TV units to accommodate your current TV size and can also plan for future upgrades.'
      },
      {
        question: 'Do you include cable management in the design?',
        answer: 'Yes, we incorporate smart cable management solutions to keep all wires and components neatly organized and out of sight.'
      }
    ]
  },
  {
    id: 'semi-modular-kitchen',
    title: 'Semi Modular Kitchen',
    tagline: 'The perfect balance of style and value',
    description: 'Get the perfect balance of customization and affordability with our semi-modular kitchen solutions.',
    icon: 'Utensils',
    overview: 'Our semi-modular kitchen service offers the perfect combination of customization and cost-effectiveness, using pre-fabricated cabinets with custom modifications to suit your space and style.',
    deliverables: [
      'Kitchen layout planning',
      'Cabinet design and selection',
      'Material and finish selection',
      'Appliance recommendations',
      'Installation coordination'
    ],
    timeline: '6-10 weeks',
    tools: ['2020 Design', 'AutoCAD', 'SketchUp'],
    portfolio: [
      {
        image: '/images/kitchen-1.jpg',
        title: 'Modern L-Shaped Kitchen',
        description: 'Sleek white cabinets with quartz countertops and stainless steel appliances'
      },
      {
        image: '/images/kitchen-2.jpg',
        title: 'U-Shaped Kitchen',
        description: 'Warm wood cabinets with stone backsplash and pendant lighting'
      }
    ],
    whyChooseUs: 'Our semi-modular kitchens offer the perfect blend of affordability and customization. We work with high-quality pre-fabricated cabinets that we can modify to fit your exact space and style requirements, giving you a custom look without the custom price tag.',
    testimonial: {
      quote: 'Our semi-modular kitchen looks like it was custom-built for our home. The team was able to modify stock cabinets to fit our unique space perfectly.',
      author: 'Robert & Maria, Homeowners'
    },
    faqs: [
      {
        question: 'What is the difference between semi-modular and modular kitchens?',
        answer: 'Semi-modular kitchens use pre-fabricated cabinets that can be modified, while modular kitchens are fully customizable. Semi-modular offers a good balance of cost and customization.'
      },
      {
        question: 'Can I upgrade to a full modular kitchen later?',
        answer: 'Yes, many of our clients start with semi-modular and upgrade later. We design with future upgrades in mind.'
      }
    ]
  },
  {
    id: 'full-modular-kitchen',
    title: 'Full Modular Kitchen',
    tagline: 'Luxury and functionality, perfectly crafted',
    description: 'Experience the ultimate in kitchen design with our fully modular solutions.',
    icon: 'ChefHat',
    overview: 'Our full modular kitchen service delivers a completely customized cooking space where every element is designed specifically for your needs, preferences, and cooking style.',
    deliverables: [
      'Comprehensive kitchen design',
      'Custom cabinet design and manufacturing',
      'Material and finish selection',
      'Appliance integration',
      'Lighting design',
      'Complete installation'
    ],
    timeline: '8-14 weeks',
    tools: ['AutoCAD', 'SketchUp', '2020 Design', 'V-Ray'],
    portfolio: [
      {
        image: '/images/modular-1.jpg',
        title: 'Luxury Chef\'s Kitchen',
        description: 'Gourmet kitchen with professional-grade appliances and custom cabinetry'
      },
      {
        image: '/images/modular-2.jpg',
        title: 'Contemporary Open Kitchen',
        description: 'Sleek handleless cabinets with integrated smart storage solutions'
      }
    ],
    whyChooseUs: 'Our full modular kitchens are the epitome of luxury and functionality. Every inch is designed with your cooking style and storage needs in mind, using premium materials and hardware that stand the test of time. We combine innovative design with practical solutions to create a kitchen that\'s as beautiful as it is functional.',
    testimonial: {
      quote: 'Our new modular kitchen has transformed how we cook and entertain. The custom storage solutions have maximized every inch of space.',
      author: 'The Patel Family'
    },
    faqs: [
      {
        question: 'How long does a full modular kitchen installation take?',
        answer: 'The entire process typically takes 8-14 weeks from initial design to final installation, depending on the complexity and customizations.'
      },
      {
        question: 'What makes modular kitchens more expensive than traditional ones?',
        answer: 'Modular kitchens use higher quality materials, precision engineering, and offer fully customized solutions that are built to last longer and function better than standard cabinetry.'
      }
    ]
  },
  {
    id: 'renovation-consultation',
    title: 'Renovation Consultation',
    tagline: 'Expert guidance for your transformation',
    description: 'Expert guidance for your renovation projects from concept to completion.',
    icon: 'Hammer',
    overview: 'Our renovation consultation service provides professional guidance to help you plan and execute your renovation project successfully, whether you\'re updating a single room or your entire home.',
    deliverables: [
      'On-site assessment',
      'Space planning and layout recommendations',
      'Material and finish suggestions',
      'Contractor referrals',
      'Budget planning',
      'Project timeline estimation'
    ],
    timeline: '1-2 weeks for initial consultation',
    tools: ['AutoCAD', 'SketchUp', 'Project management software'],
    portfolio: [
      {
        image: '/images/renovation-1.jpg',
        title: 'Before & After Living Room',
        description: 'Complete transformation of a dated living space into a modern family room'
      },
      {
        image: '/images/renovation-2.jpg',
        title: 'Bathroom Remodel',
        description: 'Spa-like bathroom renovation with custom tile work and fixtures'
      }
    ],
    whyChooseUs: 'With years of experience in renovation projects of all sizes, we can help you navigate the complexities of home improvement, avoid common pitfalls, and make informed decisions that align with your vision and budget.',
    testimonial: {
      quote: 'The renovation consultation helped us prioritize our project and avoid costly mistakes. Their advice was invaluable!',
      author: 'Thomas & Emily, Homeowners'
    },
    faqs: [
      {
        question: 'Do you provide construction services?',
        answer: 'We focus on the design and planning aspects but can recommend trusted contractors who can execute the work to our specifications.'
      },
      {
        question: 'How much does a renovation consultation cost?',
        answer: 'We offer various consultation packages starting from $500, depending on the scope and size of your project.'
      }
    ]
  },
  {
    id: 'material-selection',
    title: 'Material Selection',
    tagline: 'Curated finishes for your perfect space',
    description: 'Expert guidance in selecting the perfect materials and finishes for your project.',
    icon: 'Palette',
    overview: 'Our material selection service helps you navigate the overwhelming world of finishes, fixtures, and materials to create a cohesive and beautiful space that reflects your style and meets your practical needs.',
    deliverables: [
      'Material and finish recommendations',
      'Sample coordination',
      'Vendor recommendations',
      'Budget-conscious options',
      'Sustainability considerations'
    ],
    timeline: '2-4 weeks',
    tools: ['Material samples catalog', 'Color matching tools', 'Supplier databases'],
    portfolio: [
      {
        image: '/images/materials-1.jpg',
        title: 'Luxury Bathroom Finishes',
        description: 'Premium marble and brass fixtures for a spa-like bathroom'
      },
      {
        image: '/images/materials-2.jpg',
        title: 'Sustainable Flooring Options',
        description: 'Eco-friendly flooring materials with high durability and style'
      }
    ],
    whyChooseUs: 'We have established relationships with top suppliers and manufacturers, giving you access to a wide range of high-quality materials. Our expertise in material properties, durability, and design aesthetics ensures that your selections will not only look beautiful but also perform well in your space.',
    testimonial: {
      quote: 'The material selection service was a game-changer for our renovation. They introduced us to options we never would have found on our own.',
      author: 'Alex & Jordan, Homeowners'
    },
    faqs: [
      {
        question: 'How do you help us stay within our budget?',
        answer: 'We provide options at various price points and can suggest where to splurge and where to save to get the most impact for your budget.'
      },
      {
        question: 'Do you work with sustainable materials?',
        answer: 'Absolutely! We can source eco-friendly, recycled, and sustainable materials that meet your design aesthetic and environmental values.'
      }
    ]
  }
];