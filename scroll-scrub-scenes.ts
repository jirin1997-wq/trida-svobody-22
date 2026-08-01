// Design tokens (měď, černá, bílá, šedá)
export const BRAND_TOKENS = {
  colors: {
    black: '#1A1A1A',
    white: '#FFFFFF',
    grey: '#808080',
    copper: '#8B7355',
    lightGrey: '#F5F5F5',
    darkGrey: '#3A3A3A',
  },
  typography: {
    heading: 'Lora',
    body: 'Inter',
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '48px',
    xl: '64px',
  },
};

// Scene config
export const SCROLL_SCRUB_SCENES = [
  {
    id: 'heritage',
    title: 'Historický dům',
    duration: 2.5,
    bgColor: BRAND_TOKENS.colors.black,
    content: {
      headline: 'HISTORICKÝ DŮM V CENTRU',
      subheadline: 'Třída Svobody 22, Olomouc',
      description: 'Elegantní historická nemovitost v srdci města',
      image: '/images/hero-facade.jpg',
    },
  },
  {
    id: 'welcome',
    title: 'Vstup do domu',
    duration: 2.5,
    bgColor: BRAND_TOKENS.colors.white,
    content: {
      headline: 'VSTUP DO DOMU',
      subheadline: 'Vřelá atmosféra',
      description: 'Elegantní foyer s historickým nádechem',
      image: '/images/foyer.jpg',
    },
  },
  {
    id: 'spaces-apt',
    title: 'Byt 4+1',
    duration: 3,
    bgColor: BRAND_TOKENS.colors.lightGrey,
    content: {
      headline: 'BYT 4+1',
      subheadline: '127 m² | 24 000 Kč/měsíc + energie',
      description: 'Prostorný a elegantní byt s moderním komfortem',
      specs: [
        { label: 'Plocha', value: '127 m²' },
        { label: 'Místnosti', value: '4+1' },
        { label: 'Cena', value: '24 000 Kč/měsíc' },
      ],
      image: '/images/apartment.jpg',
      cta: { text: 'Kontaktuj nás', color: BRAND_TOKENS.colors.copper },
    },
  },
  {
    id: 'spaces-cellar',
    title: 'Sklepy',
    duration: 2,
    bgColor: BRAND_TOKENS.colors.darkGrey,
    content: {
      headline: 'SKLEPY K PRONÁJMU',
      subheadline: 'Historická architektura',
      description: 'Bezpečné prostory s klasickou architekturu',
      image: '/images/cellar.jpg',
    },
  },
  {
    id: 'details',
    title: 'Detaily',
    duration: 3,
    bgColor: BRAND_TOKENS.colors.white,
    content: {
      headline: 'PRAKTICKÉ INFORMACE',
      specs: [
        { label: 'Adresa', value: 'Tř. Svobody 619/22, Olomouc' },
        { label: 'Dostupnost', value: 'Ihned' },
        { label: 'Energie', value: 'Nájemce' },
        { label: 'Parkování', value: 'Vnitřní dvůr' },
      ],
      ctas: [
        { text: 'Kontaktuj nás', color: BRAND_TOKENS.colors.copper, primary: true },
        { text: 'Napsat email', color: BRAND_TOKENS.colors.grey, primary: false },
      ],
    },
  },
  {
    id: 'contact',
    title: 'Kontakt',
    duration: 2,
    bgColor: BRAND_TOKENS.colors.lightGrey,
    content: {
      headline: 'NAPIŠ NÁM',
      phone: '+420 732 613 208',
      email: 'jiri.n@outlook.com',
      address: 'Tř. Svobody 619/22, 779 00 Olomouc',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.123456!2d17.2499975!3d49.5914115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471098765432%3A0x1234567890abcdef!2sTř.%20Svobody%20619%2F22%2C%20Olomouc!5e0!3m2!1scs!2scz!4v1234567890',
      cta: { text: 'Prohlédnout si prostor', color: BRAND_TOKENS.colors.copper },
    },
  },
];
