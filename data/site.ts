export type Procedure = { name: string; description: string; image: string };

export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Jéssica Martins',
  monogram: 'JM',

  headline: 'Rejuvenescimento e harmonização para valorizar a sua beleza natural.',

  cro: 'CRBM 02818',
  bio: 'Há 7 anos, a Dra. Jéssica Martins valoriza a beleza natural e sofisticada com um olhar atento à identidade de cada pessoa.',
  education: [] as string[],
  specialties: ['Rejuvenescimento', 'Harmonização', 'Alta estética'],

  phone: '',
  whatsapp: '',
  whatsappUrl: 'https://wa.me/message/LBO37247WHZQG1',
  address: 'Rio de Janeiro · RJ',
  professionalPhilosophy: 'Beleza natural, cuidado individual e sofisticação sem excessos.',

  instagram: 'https://www.instagram.com/dra.jessicamartins_/',
  instagramHandle: '@dra.jessicamartins_',

  philosophy: ['NATURALIDADE', 'ANTES DE', 'EXCESSOS.'],

  colors: {
    paper: '#f7efe8',
    ink: '#321912',
    taupe: '#a34f31',
    champagne: '#d6a287',
    dark: '#2f1710',
  },

  images: {
    hero: '/images/jessica-hero.webp',
    about: '/images/jessica-about.webp',
    essence: '/images/jessica-result-01.webp',
    beauty: '/images/jessica-essence.webp',
  },

  procedures: [
    { name: 'Harmonização facial', description: 'Um olhar integrado para proporções, contornos e identidade.', image: '' },
    { name: 'Rejuvenescimento', description: 'Planos de cuidado voltados à leveza e à naturalidade da expressão.', image: '' },
    { name: 'Lábios', description: 'Contorno e equilíbrio para valorizar o que já é seu.', image: '' },
    { name: 'Estímulo de colágeno', description: 'Cuidado com a qualidade e a vitalidade da pele.', image: '' },
    { name: 'Olheiras e rugas', description: 'Avaliação individual para uma aparência mais descansada.', image: '' },
  ] as Procedure[],

  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],

  results: {
    enabled: true,
    items: [
      { image: '/images/jessica-result-02.webp', label: 'Harmonia de perfil', alt: 'Antes e depois em perfil compartilhado pela Dra. Jéssica Martins', orientation: 'horizontal', beforeShare: 0.5, comparisonRatio: (1283 / 2) / 1270 },
      { image: '/images/jessica-result-03.webp', label: 'Olhar e textura da pele', alt: 'Antes e depois do olhar e da textura da pele compartilhado pela Dra. Jéssica Martins', orientation: 'horizontal', beforeShare: 0.5, comparisonRatio: (1284 / 2) / 1574 },
      { image: '/images/jessica-result-04.webp', label: 'Perfil e contorno', alt: 'Antes e depois de perfil e contorno facial compartilhado pela Dra. Jéssica Martins', orientation: 'horizontal', beforeShare: 0.49, comparisonRatio: (1284 / 2) / 1565 },
      { image: '/images/jessica-result-05.webp', label: 'Suavidade da expressão', alt: 'Antes e depois da expressão facial compartilhado pela Dra. Jéssica Martins', orientation: 'horizontal', beforeShare: 0.49, comparisonRatio: (1284 / 2) / 1554 },
      { image: '/images/jessica-result-06.webp', label: 'Uniformidade da pele', alt: 'Antes e depois da qualidade da pele compartilhado pela Dra. Jéssica Martins', orientation: 'horizontal', beforeShare: 0.49, comparisonRatio: (1284 / 2) / 1566 },
      { image: '/images/jessica-result-07.webp', label: 'Contornos faciais', alt: 'Antes e depois de contornos faciais compartilhado pela Dra. Jéssica Martins', orientation: 'vertical', beforeShare: 0.51, comparisonRatio: 1228 / 800 },
      { image: '/images/jessica-result-08.webp', label: 'Definição labial', alt: 'Antes e depois de definição labial compartilhado pela Dra. Jéssica Martins', orientation: 'vertical', beforeShare: 0.496, comparisonRatio: 1256 / 800 },
    ],
  },

  seo: {
    title: 'Dra. Jéssica Martins | Rejuvenescimento e Harmonização no RJ',
    description: 'Alta estética, rejuvenescimento e harmonização com naturalidade no Rio de Janeiro. Conheça o trabalho da Dra. Jéssica Martins e agende sua avaliação.',
    url: '',
  },
};

export const appointmentUrl = site.whatsappUrl || (site.whatsapp
  ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, gostaria de agendar uma avaliação com a Dra. Jéssica.')}`
  : site.instagram);
