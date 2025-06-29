import { useEffect } from 'react';
import { generateServiceSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/utils/structuredData';

type SchemaType = 'service' | 'breadcrumb' | 'localBusiness';

interface BreadcrumbItem {
  name: string;
  item: string;
}

export const useStructuredData = (type: SchemaType, breadcrumbItems?: BreadcrumbItem[]) => {
  useEffect(() => {
    // Remove existing structured data
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => {
      if (el.id === 'structured-data') {
        el.remove();
      }
    });

    let schema;
    
    switch (type) {
      case 'service':
        schema = generateServiceSchema();
        break;
      case 'breadcrumb':
        if (!breadcrumbItems) break;
        schema = generateBreadcrumbSchema(breadcrumbItems);
        break;
      case 'localBusiness':
      default:
        schema = generateLocalBusinessSchema();
    }

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById('structured-data');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [type, breadcrumbItems]);
};
