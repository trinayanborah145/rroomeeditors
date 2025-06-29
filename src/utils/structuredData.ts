interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    sameAs: string;
  };
  areaServed: string;
  hasOfferCatalog: {
    "@type": string;
    name: string;
    itemListElement: Array<{
      "@type": string;
      itemOffered: {
        "@type": string;
        name: string;
        description: string;
      };
    }>;
  };
}

export const generateServiceSchema = (): ServiceSchema => ({
  "@context": "https://schema.org",
  "@type": "InteriorDesignService",
  "name": "Room Editors",
  "description": "Professional interior design services in Nalbari, Assam specializing in false ceilings, modular kitchens, and complete home interiors.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Room Editors",
    "sameAs": "https://roomeditors.netlify.app"
  },
  "areaServed": "Nalbari, Assam, India",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "itemOffered": {
          "@type": "Service",
          "name": "False Ceiling Design",
          "description": "Custom false ceiling designs including POP, gypsum, and wooden ceilings."
        }
      },
      {
        "@type": "OfferCatalog",
        "itemOffered": {
          "@type": "Service",
          "name": "Modular Kitchen",
          "description": "Custom modular kitchen designs with premium finishes and smart storage solutions."
        }
      },
      {
        "@type": "OfferCatalog",
        "itemOffered": {
          "@type": "Service",
          "name": "TV Unit Design",
          "description": "Custom TV unit designs that combine style and functionality."
        }
      },
      {
        "@type": "OfferCatalog",
        "itemOffered": {
          "@type": "Service",
          "name": "Wallpaper Installation",
          "description": "Premium wallpaper installation services with a wide range of designs."
        }
      },
      {
        "@type": "OfferCatalog",
        "itemOffered": {
          "@type": "Service",
          "name": "Complete Home Interior",
          "description": "End-to-end interior design solutions for your entire home."
        }
      }
    ]
  }
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; item: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Room Editors",
  "image": "https://roomeditors.netlify.app/logo.png",
  "@id": "https://roomeditors.netlify.app",
  "url": "https://roomeditors.netlify.app",
  "telephone": "+91-XXXXXXXXXX",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Joymangla, Nalbari District",
    "addressLocality": "Nalbari",
    "addressRegion": "Assam",
    "postalCode": "781335",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.4429,
    "longitude": 91.4343
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/roomeditors",
    "https://www.instagram.com/roomeditors",
    "https://twitter.com/roomeditors"
  ]
});
