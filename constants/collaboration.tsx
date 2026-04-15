export type Company = {
  id: number;
  name: string;
  logo: string;
  url?: string;
};

const COMPANIES: Company[] = [
  {
    id: 0,
    name: "Ghiro s.r.l.",
    logo: "/assets/collaborations/LOGO_GHIRO.png",
  },
  {
    id: 1,
    name: "Aristea",
    logo: "/assets/collaborations/LOGO_ARISTEA.png",
  },
  {
    id: 2,
    name: "Indirizzo Ambiente",
    logo: "/assets/collaborations/LOGO_INDIRIZZOAMBIENTE.png",
  },
  {
    id: 3,
    name: "Eco Certificazioni",
    logo: "/assets/collaborations/LOGO_ECO_CERTIFICAZIONI.png",
  },
  {
    id: 4,
    name: "AG Project",
    logo: "/assets/collaborations/LOGO_AG_Project.png",
  },
  {
    id: 5,
    name: "MB Safety",
    logo: "/assets/collaborations/LOGO_MB_SAFETY.png",
  },
];

const MUSICCOMPANY: Company[] = [
  {
    id: 0,
    name: "Ghiro s.r.l.",
    logo: "/assets/collaborations/GHIRO.png",
  },
  {
    id: 1,
    name: "Aristea",
    logo: "/assets/collaborations/ARISTEA.png",
    url: "https://aristea.net",
  },
  {
    id: 2,
    name: "indirizzo Ambiente",
    logo: "/assets/collaborations/INDIRIZZOAMBIENTE.png",
    url: "https://www.indirizzoambiente.com/",
  },
];

export { COMPANIES, MUSICCOMPANY };
