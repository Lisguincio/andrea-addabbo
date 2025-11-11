export type Company = {
	id: number,
	name: string
	logo:string,
	url?:string
}

const COMPANIES: Company[] = [
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