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
    title: "EVALUACION METRICAS SW - EQUIPO 17 (DROGUERIANE)",
    description:
      "EVALUACION de METRICAS DE Software (Resolución 285 y 693 de 2004 Colciencias)",
    imageUrl: "imagenesActividades/metricas.jpg",
    imageAlt: "METRICAS SW",
    docUrl: "/docsActividades/EVALUACION METRICAS SW - EQUIPO 17 (DROGUERIANE).pdf",
    link: "/actividades/metricas_software_ne",
    date: "2025-09-16",
    author: members.find((member) => member.code === "1152277")!,
    slug: "metricas_software_ne",
  },
  {
    title: "EVALUACION METRICAS SW - EQUIPO 10 (ADELA)",
    description:
      "EVALUACION de METRICAS DE Software (Resolución 285 y 693 de 2004 Colciencias)",
    imageUrl: "imagenesActividades/metricas.jpg",
    imageAlt: "METRICAS SW",
    docUrl: "/docsActividades/EVALUACION METRICAS SW - EQUIPO 10 (ADELA).pdf",
    link: "/actividades/metricas_software_adela",
    date: "2025-09-16",
    author: members.find((member) => member.code === "1152263")!,
    slug: "metricas_software_adela",
  },
  {
    title: "Plan de gestión de la Configuración - EQUIPO 17 (DROGUERIANE)",
    description: "El propósito de este plan es establecer los lineamientos, actividades y responsabilidades necesarias para la gestión de la configuración del software, garantizando la trazabilidad, integridad y control de los elementos de configuración durante todo el ciclo de vida del proyecto.",
    imageUrl: "imagenesActividades/configuracion.jpg",
    imageAlt: "Plan de gestión de la Configuración",
    docUrl: "/docsActividades/Plan de gestión de la Configuración - EQUIPO 17 (DROGUERIANE).pdf",
    link: "/actividades/plan_gestion_configuracion",
    date: "2025-10-14",
    author: members.find((member) => member.code === "1152280")!,
    slug: "plan_gestion_configuracion"
  },
  {
    title: "Auditoria Gestión de la Configuración - EQUIPO 17 (DROGUERIANE)",
    description: "El propósito de la presente auditoría es evaluar el nivel de conformidad y efectividad de los procesos, procedimientos y actividades establecidos en el Plan de Gestión de Configuración del software “Aplicativo web con IA para la gestión de inventario y registro de ventas en la Droguería La Nueva Esperanza”, con el fin de verificar la correcta aplicación de los mecanismos de control, trazabilidad, integridad y consistencia de los elementos de configuración a lo largo de su ciclo de vida.",
    imageUrl: "imagenesActividades/auditoria.svg",
    imageAlt: "Auditoria Gestión de la Configuración",
    docUrl: "/docsActividades/Auditoria Gestión de la Configuración - EQUIPO 17.pdf",
    link: "/actividades/auditoria_gestion_configuracion_ne",
    date: "2025-10-24",
    author: members.find((member) => member.code === "1152277")!,
    slug: "auditoria_gestion_configuracion_ne"
  },
  {
    title: "Auditoria Gestión de la Configuración - EQUIPO 10 (ADELA)",
    description: "El objetivo de la auditoría es verificar el cumplimiento de los procesos y actividades definidos en el Plan de Gestión de Configuración, asegurando la integridad, trazabilidad y control de los elementos de configuración del software conforme a la norma IEEE 828:2022.",
    imageUrl: "imagenesActividades/auditoria.svg",
    imageAlt: "Auditoria Gestión de la Configuración",
    docUrl: "/docsActividades/Auditoria Gestión de la Configuración - EQUIPO 10 (ADELA).pdf",
    link: "/actividades/auditoria_gestion_configuracion_adela",
    date: "2025-10-24",
    author: members.find((member) => member.code === "1152263")!,
    slug: "auditoria_gestion_configuracion_adela"
  }
];

