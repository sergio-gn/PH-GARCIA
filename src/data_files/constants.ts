import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "PH Garcia Reparos",
  tagline: "Reparos, Pintura, Elétrica e Hidráulica",
  description: "Precisou Consertar em Curitiba? Chama PH Garcia, especialista em Reparos, Pintura, Elétrica e Hidráulica",
  description_short: "Precisou Consertar em Curitiba? Chama PH Garcia, especialista em Reparos, Pintura, Elétrica e Hidráulica",
  url: "https://phgarcia.com.br/",
  author: "Ph Garcia",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "pt-BR",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "pt_BR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Reparos, Pintura, Elétrica e Hidráulica`,
  description: "Precisou Consertar em Curitiba? Chama PH Garcia, especialista em Reparos, Pintura, Elétrica e Hidráulica",
  image: ogImageSrc,
};
