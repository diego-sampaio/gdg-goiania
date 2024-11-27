import { Events } from "@/types";

const events: Events[] = [
  {
    id: 1,
    image: "/gdg-goiania/events/devfestCerrado2024.png",
    title: "DevFest Cerrado 10 anos",
    date: { from: "23 de novembro de 2024", to: "23 de novembro de 2024" },
    location: {
      local: "UNIALFA",
      map: "https://maps.app.goo.gl/fhem4YqVsY4tG9aLA",
    },
    url: "https://devfestcerrado.com.br/",
    description: "Descrição do evento...",
  },
  {
    id: 2,
    image: "/gdg-goiania/events/buildWithAI.webp",
    title: "Build with AI",
    date: { from: "01 de junho de 2024", to: "01 de junho de 2024" },
    location: {
      local: "HUB Goiás",
      map: "https://maps.app.goo.gl/Amxva8k7kow3Uw2c6",
    },
    url: "https://doity.com.br/workshop-build-with-ai--goiania",
    description: "Descrição do evento...",
  },
  {
    id: 3,
    image: "/gdg-goiania/events/iwd2024.webp",
    title: "IWD Cerrado",
    date: { from: "27 de abril de 2024", to: "27 de abril de 2024" },
    location: {
      local: "HUB Goiás",
      map: "https://maps.app.goo.gl/Amxva8k7kow3Uw2c6",
    },
    url: "https://doity.com.br/iwd-cerrado-2024",
    description: "Descrição do evento...",
  },
];

export default events;
