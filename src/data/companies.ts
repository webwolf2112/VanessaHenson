export interface Company {
  name: string;
  logo?: string; // URL or path to logo
  url?: string;
  industry?: string;
}

export const companies: Company[] = [
  {
    name: "Ibotta",
    url: "https://www.ibotta.com",
    industry: "Technology",
  },
  {
    name: "Proofpoint",
    url: "https://www.proofpoint.com",
    industry: "Cybersecurity",
  },
  {
    name: "Gogo",
    url: "https://www.gogoair.com",
    industry: "Aviation",
  },
  {
    name: "Conga",
    url: "https://www.conga.com",
    industry: "SaaS",
  },
  {
    name: "Reebok",
    url: "https://www.reebok.com",
    industry: "Sportswear",
  },
  {
    name: "Crocs",
    url: "https://www.crocs.com",
    industry: "Footwear",
  },
  {
    name: "Rita Hazan",
    url: "https://ritahazan.com",
    industry: "Beauty",
  },
  {
    name: "Nordstrom",
    url: "https://www.nordstrom.com",
    industry: "Retail",
  },
  {
    name: "Big Chill",
    url: "https://www.bigchill.com",
    industry: "Appliances",
  },
  {
    name: "Voltage Advertising",
    url: "https://voltagead.com/",
    industry: "Marketing",
  },
  {
    name: "CrossFit",
    url: "https://www.crossfit.com",
    industry: "Fitness",
  },
];
