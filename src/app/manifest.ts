import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ahadu Financial Solutions',
    short_name: 'Ahadu',
    description: 'Ethiopia-based accounting, financial management, payroll administration, tax support, and business advisory firm.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1B3A',
    theme_color: '#0B1B3A',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
