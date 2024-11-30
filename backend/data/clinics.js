const clinics = [
  {
    id: 1,
    name: "Animal Saúde",
    address: "Rua das Flores, 123 - Centro",
    phone: "11999998811",
    logo: "/assets/clinic_logo/clinic1.png",
    about: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    specialties: [1, 2, 3],  // Relacionamento com as especialidades
    amenities: ["Wi-Fi", "Estacionamento Próprio", "Acessibilidade"],
    hours: "Segunda a Sexta: 08:00 - 18:00, Sábado: 08:00 - 12:00",
    socialMedia: {
      whatsapp: "https://wa.me/5511999999999",
      instagram: "https://instagram.com/animalsaude"
    }
  },
  {
    id: 2,
    name: "Pet Cuidado",
    address: "Av. Paulista, 500 - São Paulo",
    phone: "47999998822",
    logo: "/assets/clinic_logo/clinic2.png",
    about: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    specialties: [1, 4, 6],  // Relacionamento com as especialidades
    amenities: ["Wi-Fi", "Estacionamento Próprio", "Sala de Espera Confortável"],
    hours: "Segunda a Sábado: 08:00 - 20:00",
    socialMedia: {
      whatsapp: "https://wa.me/5511988888888",
      instagram: "https://instagram.com/petcuidado"
    }
  },
  {
    id: 3,
    name: "Vida Animal",
    address: "Rua Rio Grande, 45 - Moema",
    phone: "4899999866",
    logo: "/assets/clinic_logo/clinic3.png",
    about: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    specialties: [1, 3, 5],  // Relacionamento com as especialidades
    amenities: ["Acessibilidade", "Área para Pets", "Estacionamento Próprio"],
    hours: "Segunda a Sexta: 07:00 - 19:00, Sábado: 07:00 - 13:00",
    socialMedia: {
      whatsapp: "https://wa.me/5511977777777",
      instagram: "https://instagram.com/vidaanimal"
    }
  },
  {
    id: 4,
    name: "Clínica Veterinária Bem-Estar",
    address: "Rua Boa Vista, 89 - Salvador",
    phone: "4899999855",
    logo: "/assets/clinic_logo/clinic4.png",
    about: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    specialties: [1, 2, 11, 4, 7, 6],
    amenities: ["Wi-Fi", "Espaço Infantil", "Estacionamento Próprio"],
    hours: "Todos os dias: 08:00 - 18:00",
    socialMedia: {
      whatsapp: "https://wa.me/5571999999999",
      instagram: "https://instagram.com/bemestarvet",
    },
  },
  {
    id: 5,
    name: "Centro Animal",
    address: "Av. Atlântica, 700 - Rio de Janeiro",
    phone: "4899999844",
    logo: "/assets/clinic_logo/clinic5.png",
    about: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    specialties: [1, 2, 3, 6, 8, 10],
    amenities: ["Wi-Fi", "Consultório Avançado", "Estacionamento Próprio"],
    hours: "Segunda a Sábado: 08:00 - 18:00",
    socialMedia: {
      whatsapp: "https://wa.me/5521999999999",
      instagram: "https://instagram.com/centroanimal",
    },
  },
  {
    id: 6,
    name: "VetCare",
    address: "Rua do Comércio, 102 - Belo Horizonte",
    phone: "4899999833",
    logo: "/assets/clinic_logo/clinic6.png",
    about: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    specialties: [1, 4, 6, 8, 9],
    amenities: ["Wi-Fi", "Estacionamento Próprio", "Farmácia Interna"],
    hours: "Segunda a Sexta: 09:00 - 18:00, Sábado: 08:00 - 14:00",
    socialMedia: {
      whatsapp: "https://wa.me/5531999999999",
      instagram: "https://instagram.com/vetcarebh",
    },
  },
  {
    id: 7,
    name: "Pet Vida",
    address: "Av. Getúlio Vargas, 301 - Curitiba",
    phone: "4899999822",
    logo: "/assets/clinic_logo/clinic7.png",
    about: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    specialties: [1, 4, 6, 8],
    amenities: ["Wi-Fi", "Estacionamento Próprio", "Espaço para Recreação"],
    hours: "Segunda a Sábado: 08:00 - 19:00",
    socialMedia: {
      whatsapp: "https://wa.me/5541999999999",
      instagram: "https://instagram.com/petvida",
    },
  },
  {
    id: 8,
    name: "Animed",
    address: "Rua dos Veteranos, 54 - Porto Alegre",
    phone: "4899999811",
    logo: "/assets/clinic_logo/clinic8.png",
    about: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.",
    specialties: [1, 2, 3],
    amenities: ["Acessibilidade", "Wi-Fi", "Farmácia Própria"],
    hours: "Segunda a Sexta: 08:00 - 18:00, Sábado: 08:00 - 13:00",
    socialMedia: {
      whatsapp: "https://wa.me/5551999999999",
      instagram: "https://instagram.com/animedpoa",
    },
  },
];

module.exports = clinics;