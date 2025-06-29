import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type OpenGraphType = 'website' | 'article' | 'profile' | 'book' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: OpenGraphType | 'service'; // Allow 'service' as a custom type
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'interior designer Nalbari, false ceiling designer Joymangla, modular kitchen Assam, semi modular kitchen, wallpaper installation, TV unit design, home interior design, affordable interior designer Assam',
  image = 'https://roomeditors.netlify.app/og-image.jpg',
  type = 'website',
}) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://roomeditors.netlify.app';
  const currentUrl = `${siteUrl}${pathname}`;
  const siteName = 'Room Editors';

  useEffect(() => {
    // Update document title
    document.title = `${title} | ${siteName} - Interior Designers in Nalbari, Assam`;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update or create Open Graph / Facebook tags
    const createOrUpdateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Set Open Graph tags
    createOrUpdateMeta('og:title', title);
    createOrUpdateMeta('og:description', description);
    createOrUpdateMeta('og:url', currentUrl);
    // Map 'service' to 'website' for OpenGraph compatibility
    const ogType: OpenGraphType = type === 'service' ? 'website' : type;
    createOrUpdateMeta('og:type', ogType);
    createOrUpdateMeta('og:image', image);
    createOrUpdateMeta('og:site_name', siteName);
    createOrUpdateMeta('og:locale', 'en_IN');
    createOrUpdateMeta('og:image:width', '1200');
    createOrUpdateMeta('og:image:height', '630');
    createOrUpdateMeta('og:image:alt', `${title} - ${siteName}`);

    // Update or create Twitter Card tags
    const createOrUpdateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="twitter:${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', `twitter:${name}`);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Set Twitter Card tags
    createOrUpdateTwitterMeta('card', 'summary_large_image');
    createOrUpdateTwitterMeta('title', title);
    createOrUpdateTwitterMeta('description', description);
    createOrUpdateTwitterMeta('image', image);
    createOrUpdateTwitterMeta('site', '@roomeditors');
    createOrUpdateTwitterMeta('creator', '@roomeditors');

    // Update canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    }, [title, description, keywords, image, type, currentUrl, siteName]);

  return null;
};

// Export the SEO component as default for backward compatibility
export default SEO;
