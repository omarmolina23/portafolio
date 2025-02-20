import type { Member } from "./integrantesData";
import { members } from "./integrantesData";

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  docUrl: string;
  link: string;
  date: string;
  author: Member;
  slug: string;
}

export const articles: Article[] = [
  {
    title: "Modelos de ciclo de vida del software",
    description:
      "Los modelos de proceso prescriptivo fueron propuestos originalmente para poner orden en el caos del desarrollo de software (Pressman, 2010).",
    imageUrl: "imagenesActividades/ciclo_vida_software.jpeg",
    imageAlt: "Ciclo de vida del software",
    docUrl: "/docsActividades/consulta_sdlc_1152263_1152277_1152280.pdf",
    link: "/actividades/ciclo_vida_software",
    date: "2025-02-09",
    author: members.find((member) => member.code === "1152263")!,
    slug: "ciclo_vida_software"
  },
  {
    title: "Sistemas de información",
    description:
      "Los sistemas de información permiten recoger y manejar de la mejor forma todos los datos con los que cuenta una empresa (OBS Business School, s.f.).",
    imageUrl: "imagenesActividades/sistema_informacion-edit.png",
    imageAlt: "Sistemas de información",
    docUrl: "/docsActividades/consulta_sistemas_informacion_1152263_1152277_1152280.pdf",
    link: "/actividades/sistemas_informacion",
    date: "2025-02-10",
    author: members.find((member) => member.code === "1152277")!,
    slug: "sistemas_informacion"
  },
  {
    title: "Tendencias del desarrollo del software",
    description: "A la hora de crear una solución digital, los empresarios deben estar bien informados de hacia dónde se dirige la industria del software y elaborar una estrategia en consecuencia (Lores, 2023).",
    imageUrl: "imagenesActividades/tendencias_desarrollo_software.png",
    imageAlt: "Tendencias del desarrollo del software",
    docUrl: "/docsActividades/consulta_tendencias_desarrollo_software_1152263_1152277_1152280.pdf",
    link: "/actividades/tendencias_desarrollo_software",
    date: "2025-02-16",
    author: members.find((member) => member.code === "1152280")!,
    slug: "tendencias_desarrollo_software"
  }
];
