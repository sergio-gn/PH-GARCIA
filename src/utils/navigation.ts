// An array of links for navigation bar
const navBarLinks = [
  { name: "Início", url: "/" },
  { name: "Obras Concluídas", url: "/obras" },
  { name: "Serviços", url: "/servicos" },
  { name: "Blog", url: "/blog" },
  { name: "Contato", url: "/contato" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Informações",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/PH Garcia Reparos",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};