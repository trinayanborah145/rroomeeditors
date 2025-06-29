export interface PortfolioItem {
  image: string;
  title: string;
  description: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

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
  portfolio?: PortfolioItem[];
  whyChooseUs: string;
  seoDescription: string;
  seoKeywords: string;
  testimonial?: Testimonial;
  faqs?: FAQ[];
}

export const services: Service[] = [
  {
    id: 'false-ceiling',
    title: 'False Ceiling Design',
    tagline: 'Elevate your space with stunning false ceiling designs in Nalbari',
    description: 'Transform your rooms with elegant false ceiling designs that enhance lighting, hide wiring, and add a touch of sophistication to your interiors.',
    seoDescription: 'Expert false ceiling design services in Nalbari. We offer modern, elegant false ceiling solutions for homes and offices with professional installation.',
    seoKeywords: 'false ceiling design Nalbari, POP ceiling Joymangla, gypsum ceiling Assam, false ceiling contractor, modern false ceiling designs, living room false ceiling, bedroom false ceiling, office false ceiling',
    icon: 'Layers',
    overview: 'Our false ceiling designs in Nalbari combine aesthetics with functionality, offering solutions that enhance your space while hiding unsightly wiring and improving acoustics. We work with various materials including gypsum, POP, and wood to create custom designs that match your style and budget.',
    deliverables: [
      'Free consultation and site visit in Nalbari',
      'Custom 2D and 3D design visualization',
      'Material selection (Gypsum, POP, Wood, etc.)',
      'Professional installation by experienced technicians',
      'Lighting integration and electrical planning',
      'Complete project management'
    ],
    timeline: '7-15 days depending on area and design complexity',
    tools: ['AutoCAD', '3D Visualization', 'Laser Level'],
    portfolio: [
      {
        image: '/images/false-ceiling-1.jpg',
        title: 'Modern Living Room False Ceiling',
        description: 'Contemporary design with cove lighting',
        alt: 'Modern false ceiling design for living room in Nalbari with cove lighting'
      },
      {
        image: '/images/false-ceiling-2.jpg',
        title: 'Bedroom False Ceiling with Wooden Panels',
        description: 'Warm and cozy bedroom ceiling design',
        alt: 'Wooden false ceiling design for bedroom in Assam'
      }
    ],
    whyChooseUs: 'With over 5 years of experience in false ceiling installation across Nalbari, we bring precision and creativity to every project. Our team uses only high-quality materials and follows strict safety standards to ensure durable and beautiful results.',
    testimonial: {
      quote: 'The false ceiling in our living room has completely transformed the space. The team was professional and completed the work on time.',
      author: 'Rahul Sharma',
      location: 'Nalbari, Assam'
    },
    faqs: [
      {
        question: 'What is the best material for false ceiling in Assam\'s climate?',
        answer: 'Gypsum is ideal for Assam\'s humid climate as it is moisture-resistant and doesn\'t sag or warp easily. We also offer POP and wooden options depending on your requirements.'
      },
      {
        question: 'How long does a false ceiling installation take?',
        answer: 'Most residential projects take 7-15 days, depending on the area and design complexity. We ensure minimal disruption to your daily routine during installation.'
      }
    ]
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    tagline: 'Design your dream kitchen with our modular solutions in Assam',
    description: 'Create a functional and stylish kitchen with our custom modular kitchen designs that maximize space and efficiency.',
    seoDescription: 'Expert modular kitchen designers in Nalbari offering custom, space-efficient kitchen solutions with premium finishes and smart storage solutions.',
    seoKeywords: 'modular kitchen Nalbari, kitchen design Assam, modular kitchen cost, modern kitchen design, small modular kitchen, kitchen interior designer, modular kitchen Joymangla, kitchen cabinet design',
    icon: 'Utensils',
    overview: 'Our modular kitchen designs in Nalbari blend aesthetics with functionality, offering smart storage solutions and premium finishes. We create kitchens that are not just beautiful but also highly efficient for your cooking needs.',
    deliverables: [
      'Custom kitchen layout planning',
      '3D visualization of your dream kitchen',
      'Premium quality modular cabinets',
      'Countertop selection (Granite, Quartz, etc.)',
      'Appliance integration',
      'Lighting and electrical planning'
    ],
    timeline: '4-6 weeks from design to installation',
    tools: ['AutoCAD', '3D Visualization', 'Material Samples'],
    portfolio: [
      {
        image: '/images/kitchen-1.jpg',
        title: 'Modern L-shaped Modular Kitchen',
        description: 'Sleek handle-less design with quartz countertop',
        alt: 'Modern L-shaped modular kitchen design in Nalbari'
      },
      {
        image: '/images/kitchen-2.jpg',
        title: 'U-shaped Kitchen with Island',
        description: 'Spacious design with breakfast counter',
        alt: 'U-shaped modular kitchen with island in Assam'
      }
    ],
    whyChooseUs: 'As leading kitchen designers in Assam, we focus on creating ergonomic and beautiful spaces that make cooking a pleasure. Our kitchens are built to last with high-quality materials and expert craftsmanship.',
    testimonial: {
      quote: 'Our new modular kitchen has transformed our cooking experience. The team at Room Editors understood our needs perfectly and delivered beyond our expectations.',
      author: 'Priya Das',
      location: 'Nalbari, Assam'
    },
    faqs: [
      {
        question: 'What is the average cost of a modular kitchen in Nalbari?',
        answer: 'The cost varies based on size, materials, and features. Our modular kitchens typically start from ₹1.5 lakhs for a basic setup and can go up based on your requirements and choice of materials.'
      },
      {
        question: 'How long does it take to install a modular kitchen?',
        answer: 'The installation typically takes 3-4 weeks after finalizing the design. This includes manufacturing, delivery, and installation. We ensure minimal disruption to your daily routine during the process.'
      }
    ]
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    tagline: 'See your space before it exists',
    description: 'Experience your space before it\'s built with photorealistic 3D renderings and virtual walkthroughs.',
    seoDescription: 'Professional 3D visualization services in Nalbari, Assam. We create photorealistic renderings and virtual walkthroughs for residential and commercial spaces.',
    seoKeywords: '3D visualization Nalbari, 3D rendering Assam, architectural visualization, interior design rendering, 3D walkthrough, virtual tour, 3D floor plan',
    icon: 'Box',
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
        description: 'Photorealistic rendering of a modern living space',
        alt: '3D visualization of a modern living room in Nalbari'
      },
      {
        image: '/images/3d-2.jpg',
        title: 'Commercial Lobby',
        description: '3D visualization of a corporate lobby with natural lighting',
        alt: '3D rendering of a commercial lobby in Assam'
      }
    ],
    whyChooseUs: 'Our 3D visualization team combines technical expertise with an artist\'s eye for detail, creating renderings that are not just accurate but truly breathtaking. We use the latest technology to help you visualize every aspect of your space before any physical work begins.',
    testimonial: {
      quote: 'The 3D visualizations helped us make critical design decisions before construction, saving us time and money on changes.',
      author: 'Lisa M. Das',
      location: 'Nalbari, Assam'
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
    seoDescription: 'Custom furniture design and manufacturing in Nalbari, Assam. Handcrafted, bespoke furniture tailored to your space and style preferences.',
    seoKeywords: 'custom furniture Nalbari, bespoke furniture Assam, handcrafted furniture, custom woodwork, made-to-order furniture, custom cabinetry',
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
        description: 'Handcrafted solid wood dining table with metal base',
        alt: 'Custom solid wood dining table with metal base in Nalbari'
      },
      {
        image: '/images/furniture-2.jpg',
        title: 'Built-in Bookshelves',
        description: 'Floor-to-ceiling bookshelves with integrated lighting',
        alt: 'Custom built-in bookshelves with lighting in Assam'
      }
    ],
    whyChooseUs: 'Our custom furniture is crafted with precision and attention to detail, using only the finest materials and construction techniques. We work with skilled artisans who take pride in creating heirloom-quality pieces that will last for generations.',
    testimonial: {
      quote: 'The custom dining table they created is the centerpiece of our home. The craftsmanship is exceptional!',
      author: 'David Roy',
      location: 'Nalbari, Assam'
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
    seoDescription: 'Custom TV unit design and installation in Nalbari. We create stylish and functional entertainment centers with smart storage solutions.',
    seoKeywords: 'TV unit design Nalbari, entertainment unit Assam, custom TV stand, wall-mounted TV unit, modern TV cabinet, living room furniture',
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
        description: 'Floating entertainment unit with LED lighting and hidden storage',
        alt: 'Modern TV unit design with LED lighting in Nalbari'
      },
      {
        image: '/images/tvunit-2.jpg',
        title: 'Rustic TV Console',
        description: 'Reclaimed wood TV unit with industrial metal accents',
        alt: 'Rustic TV unit design with reclaimed wood in Assam'
      }
    ],
    whyChooseUs: 'We understand that your entertainment center is more than just a place for your TV - it\'s the focal point of your living space. Our designs combine cutting-edge technology integration with timeless aesthetics to create a piece that enhances both your viewing experience and your room\'s decor.',
    testimonial: {
      quote: 'The custom TV unit they designed perfectly fits our space and hides all the electronics. It looks like a piece of art!',
      author: 'Jennifer Lahon',
      location: 'Guwahati, Assam'
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
    seoDescription: 'Semi-modular kitchen solutions in Nalbari offering the perfect balance of affordability and customization for your dream kitchen.',
    seoKeywords: 'semi-modular kitchen Nalbari, affordable kitchen design, kitchen renovation Assam, kitchen cabinet design, budget kitchen makeover',
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
        description: 'Sleek white cabinets with quartz countertops and stainless steel appliances',
        alt: 'Modern L-shaped semi-modular kitchen in Nalbari'
      },
      {
        image: '/images/kitchen-2.jpg',
        title: 'U-Shaped Kitchen',
        description: 'Warm wood cabinets with stone backsplash and pendant lighting',
        alt: 'U-shaped semi-modular kitchen in Assam'
      }
    ],
    whyChooseUs: 'Our semi-modular kitchens offer the perfect blend of affordability and customization. We work with high-quality pre-fabricated cabinets that we can modify to fit your exact space and style requirements, giving you a custom look without the custom price tag.',
    testimonial: {
      quote: 'Our semi-modular kitchen looks like it was custom-built for our home. The team was able to modify stock cabinets to fit our unique space perfectly.',
      author: 'Robert & Maria Bora',
      location: 'Nalbari, Assam'
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
    seoDescription: 'Premium full modular kitchen design and installation in Nalbari. Custom-built kitchens with high-end finishes and smart storage solutions.',
    seoKeywords: 'modular kitchen Nalbari, luxury kitchen design, custom kitchen cabinets, modern kitchen Assam, kitchen renovation, smart kitchen storage',
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
        description: 'Gourmet kitchen with professional-grade appliances and custom cabinetry',
        alt: 'Luxury modular kitchen with high-end appliances in Nalbari'
      },
      {
        image: '/images/modular-2.jpg',
        title: 'Contemporary Open Kitchen',
        description: 'Sleek handleless cabinets with integrated smart storage solutions',
        alt: 'Contemporary open modular kitchen in Assam'
      }
    ],
    whyChooseUs: 'Our full modular kitchens are the epitome of luxury and functionality. Every inch is designed with your cooking style and storage needs in mind, using premium materials and hardware that stand the test of time. We combine innovative design with practical solutions to create a kitchen that\'s as beautiful as it is functional.',
    testimonial: {
      quote: 'Our new modular kitchen has transformed how we cook and entertain. The custom storage solutions have maximized every inch of space.',
      author: 'The Patel Family',
      location: 'Guwahati, Assam'
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
    seoDescription: 'Professional renovation consultation in Nalbari. Get expert advice for your home renovation projects with personalized solutions.',
    seoKeywords: 'renovation consultation Nalbari, home renovation expert, interior design consultation Assam, home makeover advice, renovation planning',
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
        description: 'Complete transformation of a dated living space into a modern family room',
        alt: 'Living room renovation before and after in Nalbari'
      },
      {
        image: '/images/renovation-2.jpg',
        title: 'Bathroom Remodel',
        description: 'Spa-like bathroom renovation with custom tile work and fixtures',
        alt: 'Bathroom renovation with modern fixtures in Assam'
      }
    ],
    whyChooseUs: 'With years of experience in renovation projects of all sizes, we can help you navigate the complexities of home improvement, avoid common pitfalls, and make informed decisions that align with your vision and budget.',
    testimonial: {
      quote: 'The renovation consultation helped us prioritize our project and avoid costly mistakes. Their advice was invaluable!',
      author: 'Thomas & Emily Dutta',
      location: 'Nalbari, Assam'
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
    seoDescription: 'Professional material selection service in Nalbari. We help you choose the perfect finishes, fixtures, and materials for your interior design project.',
    seoKeywords: 'material selection Nalbari, interior finishes, flooring options Assam, wall treatments, countertop materials, sustainable building materials',
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
        description: 'Premium marble and brass fixtures for a spa-like bathroom',
        alt: 'Luxury bathroom finishes with marble and brass in Nalbari'
      },
      {
        image: '/images/materials-2.jpg',
        title: 'Sustainable Flooring Options',
        description: 'Eco-friendly flooring materials with high durability and style',
        alt: 'Sustainable flooring options available in Assam'
      }
    ],
    whyChooseUs: 'We have established relationships with top suppliers and manufacturers, giving you access to a wide range of high-quality materials. Our expertise in material properties, durability, and design aesthetics ensures that your selections will not only look beautiful but also perform well in your space.',
    testimonial: {
      quote: 'The material selection service was a game-changer for our renovation. They introduced us to options we never would have found on our own.',
      author: 'Alex & Jordan Baruah',
      location: 'Guwahati, Assam'
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