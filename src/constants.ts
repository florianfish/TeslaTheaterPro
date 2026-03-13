export interface Service {
  id: string;
  name: string;
  url: string;
  icon: string;
  logoSvg?: string;
  color: string;
}

export const SERVICES: Service[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com',
    icon: 'Youtube',
    logoSvg: '<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="#FF0000"/>',
    color: '#FF0000',
  },
  {
    id: 'freetv',
    name: 'Free TV',
    url: 'https://tv.free.fr/',
    icon: 'Tv',
    logoSvg: '<path d="M21 7L12 3L3 7V17L12 21L21 17V7Z" stroke="white" stroke-width="2" fill="none"/><path d="M12 8V16M8 12H16" stroke="white" stroke-width="2"/>',
    color: '#FFFFFF',
  },
  {
    id: 'plex',
    name: 'Plex',
    url: 'https://app.plex.tv',
    icon: 'Tv',
    logoSvg: '<path d="M11.643 0H2.143L8.357 12L2.143 24H11.643L17.857 12L11.643 0Z" fill="#EBAF00"/><path d="M21.857 0H12.357L18.571 12L12.357 24H21.857L28.071 12L21.857 0Z" fill="#EBAF00"/>',
    color: '#EBAF00',
  },
  {
    id: 'jellyfin',
    name: 'Jellyfin',
    url: 'https://jellyfin.poissonmail.fr/',
    icon: 'Tv',
    logoSvg: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" fill="#00A4DC"/><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14.5v-13l8.66 6.5-8.66 6.5z" fill="#AA5CC3" fill-opacity="0.5"/>',
    color: '#00A4DC',
  },
  {
    id: 'tf1plus',
    name: 'TF1+',
    url: 'https://www.tf1.fr/',
    icon: 'Tv',
    logoSvg: '<rect width="24" height="24" rx="4" fill="#0026FF"/><path d="M7 8h10M12 8v8" stroke="white" stroke-width="2.5" stroke-linecap="round"/><path d="M16 12h3M17.5 10.5v3" stroke="white" stroke-width="2" stroke-linecap="round"/>',
    color: '#0026FF',
  },
  {
    id: 'm6plus',
    name: 'M6+',
    url: 'https://www.m6plus.fr',
    icon: 'Tv',
    logoSvg: '<rect width="24" height="24" rx="4" fill="#E31937"/><path d="M6 16V8l3 3 3-3v8" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 12h3M17.5 10.5v3" stroke="white" stroke-width="2" stroke-linecap="round"/>',
    color: '#E31937',
  },
];
