interface Article {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  date: string;
}

export const articles: Article[] = [
  {
    title: "Modelos de ciclo de vida del software",
    description:
      "Los modelos de proceso prescriptivo fueron propuestos originalmente para poner orden en el caos del desarrollo de software (Pressman, 2010).",
    imageUrl: "/imagenesActividades/ciclo_vida_software.jpeg",
    link: "/actividades/ciclo_vida_software",
    date: "2025-02-09",
  },
  {
    title: "Sistemas de información",
    description:
      "Los sistemas de información permiten recoger y manejar de la mejor forma todos los datos con los que cuenta una empresa (OBS Business School, s.f.).",
    imageUrl: "/imagenesActividades/sistema_informacion-edit.png",
    link: "/actividades/sistemas_informacion",
    date: "2025-02-10",
  },
];
