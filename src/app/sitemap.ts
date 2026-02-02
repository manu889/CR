import { MetadataRoute } from 'next';
import { popularRoutes } from '@/data/routes';
import { services } from '@/data/services';
import { tourPackages } from '@/data/tours';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cabrentalmysore.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/routes',
    '/tours',
    '/vehicles',
    '/book',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Route pages
  const routePages = popularRoutes.map((route) => ({
    url: `${baseUrl}/routes/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Tour pages
  const tourPages = tourPackages.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...routePages, ...tourPages];
}
