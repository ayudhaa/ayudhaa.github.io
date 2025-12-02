export default {
  navbar: {
    about: "About",
    experience: "Experience",
    contact: "Contact",
    toggle: "EN / ID",
  },

  hero: {
    title: "Hi",
    subtitle:
      "I'm Ridho Ayudha Rachman, a software engineer who builds user-friendly and developer-efficient systems and architectures.",
  },

  about: {
    title: "About Me",
    text: "I'm a developer who enjoys crafting web applications that are fast, responsive, and user-friendly.",
  },

  experience: {
    title: "Experience",

    // PT SAP
    sap: {
      role: "Software Engineer",
      company: "PT Satria Antaran Prima Tbk",
      period: "Nov 2021 – Present",
      link: "lapaksatria.id",
      internal: "Other internal apps",
      items: [
        "Develop and maintain logistics and operational systems using CodeIgniter 3 and Node.js.",
        "Build API services for AWB tracking, SLA automation, courier performance, and operational workflows.",
        "Develop withdrawal and top-up balance systems with validation, approval, and financial tracking.",
        "Integrate payment gateways for automated payouts and digital transactions.",
        "Optimize MySQL queries to improve reporting performance.",
        "Work with high-volume logistics systems handling 30,000+ AWB daily.",
      ],
      images: [
        "/projects/lapaksatria-1.png",
        "/projects/lapaksatria-2.png"
      ]
    },

    // PT CSA
    csa: {
      role: "Software Engineer",
      company: "PT Catur Sentosa Adiprana Tbk",
      period: "2020 – 2021",
      internal: "Internal apps",
      items: [
        "Develop internal distribution and retail systems.",
        "Build modules for inventory, purchasing, and logistics operations.",
        "Integrate backend systems with ERP.",
        "Improve UI/UX and reusable components.",
      ],
      images: [
        "/projects/csa-1.jfif",
        "/projects/csa-2.jfif"
      ]
    },

    // PT Reventon
    reventon: {
      role: "Software Engineer",
      company: "PT Reventon Mitra Pratama",
      period: "2018 – 2020",
      link: "cekpremi.com",
      internal: "Other internal apps",
      items: [
        "Develop web applications for clients and internal needs.",
        "Build backend APIs and role-based dashboards.",
        "Create reporting modules and multi-level approval workflows.",
        "Collaborate with designers and PMs to deliver production-ready features.",
      ],
      images: [
        "/projects/cekpremi-1.png",
        "/projects/cekpremi-2.png",
        "/projects/cekpremi-3.png"
      ]
    },

    projects: "➜ View Project",
  },

  contact: {
    title: "Get in touch",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  footer: "Always happy to chat. Drop a message anytime!",

  // NEW: Gallery translations
  gallery: {
    prev: "Prev",
    previous: "Previous",
    next: "Next"
  }
};