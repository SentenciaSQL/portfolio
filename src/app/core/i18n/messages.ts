export type Lang = 'en' | 'es';

export const MESSAGES: Record<Lang, any> = {
  en: {
    nav: { downloadCv: 'Download CV', contact: 'Contact' },
    hero: {
      title: 'Senior Java / Spring Boot Engineer',
      subtitle: 'Backend-focused | Scalable Systems | Remote LATAM → US',
      blurb:
        '13+ years building enterprise systems in Java, Spring Boot, and Angular for e-commerce, LMS, and mission-critical platforms.',
      ctaPrimary: 'Download CV',
      ctaSecondary: 'View GitHub',
    },
    about: {
      title: 'About',
      body:
        'Senior Software Engineer with 13+ years building backend-heavy systems using Java and Spring Boot. Experience across high-traffic e-commerce, LMS, and energy distribution systems, collaborating with US-based teams. Focused on clean architecture, performance, and long-term maintainability.',
    },
    stack: { title: 'Tech Stack' },
    projects: {
      title: 'Selected Projects',
      items: {
        cmms: {
          name: 'CMMS Platform',
          subtitle: 'Enterprise Maintenance Management System',
          stack: 'Java · Spring Boot · Angular · PostgreSQL · JWT',
          summary:
            'Full-stack enterprise system designed to manage assets, work orders, and preventive maintenance workflows.',
          bullets: [
            'Designed and implemented secure REST APIs using Spring Boot and JWT authentication.',
            'Applied layered architecture with clear separation of concerns (controllers, services, repositories).',
            'Built a modular Angular frontend integrated with backend services.',
            'Focused on maintainability, scalability, and real-world enterprise workflows.'
          ],
          links: {
            api: 'API Repository',
            ui: 'Frontend Repository'
          }
        },

        blood: {
          name: 'Blood Donation Platform',
          subtitle: 'Social Impact Application',
          stack: 'Spring Boot · Angular · Geolocation',
          summary:
            'Platform that connects blood donors with recipients through location-based search and donor registry.',
          bullets: [
            'Implemented donor registration and blood type management.',
            'Designed search flows based on location and availability.',
            'Backend-focused architecture with clean REST endpoints.',
            'Project designed for real-world social impact scenarios.'
          ],
          links: {
            repo: 'Repository'
          }
        },

        spa: {
          name: 'Beauty Spa Management System',
          subtitle: 'Reservation & Service Management',
          stack: 'Python · FastAPI · Angular · APIs REST',
          summary:
            'Full-stack system for managing spa services, customers, and appointment bookings.',
          bullets: [
            'Developed REST APIs for services, bookings, and customer management.',
            'Integrated Angular frontend consuming backend APIs.',
            'Implemented business rules for scheduling and availability.',
            'Clean and modular backend domain design.'
          ],
          links: {
            api: 'API Repository',
            ui: 'Frontend Repository'
          }
        },

        pagatodo: {
          name: 'PagaTodo',
          subtitle: 'Payment & Admin Dashboard',
          stack: 'Angular · REST Integration',
          summary:
            'Admin and UI applications focused on payment workflows and dashboard-style interfaces.',
          bullets: [
            'Built UI components for administrative and payment-related workflows.',
            'Focused on usability and component-based design.',
            'Demonstrates frontend architecture and real-world UI flows.'
          ],
          links: {
            admin: 'Admin UI Repository',
            ui: 'UI Repository'
          }
        },

        learnKids: {
          name: 'Learn Kids',
          subtitle: 'Educational Learning Platform',
          stack: 'Flutter · Dart · Educational Frontend',
          summary:
            'Educational platform focused on delivering interactive learning content for children using a clean and scalable frontend architecture.',
          bullets: [
            'Designed modular and reusable Flutter widgets.',
            'Implemented structured data flows for educational content.',
            'Integrated text-to-speech features to improve accessibility.',
            'Focused on usability, clarity, and maintainable UI patterns.',
            'Demonstrates frontend architecture suitable for real-world applications.'
          ],
          links: {
            repo: 'Repository'
          }
        },

        tesloShop: {
          name: 'UrbanWear',
          subtitle: 'Clothing E-commerce Platform',
          stack: 'React · NestJS · PostgreSQL · JWT · Docker',
          summary:
            'E-commerce platform for clothing with a backend architecture in NestJS and frontend in React, including JWT authentication and Docker deployment.',
          bullets: [
            'Designed and implemented secure REST APIs using NestJS and JWT authentication.',
            'Built a modular React frontend integrated with backend services.',
            'Focused on maintainability, scalability, and real-world e-commerce workflows.'
          ],
          links: {
            api: 'API Repository',
            ui: 'Frontend Repository'
          }
        },

        pokemonEncyclopedia:{
          name: 'Pokémon Encyclopedia',
          subtitle: 'Pokémon Lookup Application',
          stack: 'Kotlin · Android · Retrofit · MVVM',
          summary:
            'Android application that allows users to look up information about Pokémon using the public PokéAPI.',
          bullets: [
            'Implemented MVVM architecture to separate business logic from UI.',
            'Used Retrofit for making HTTP requests to the PokéAPI.',
            'Efficiently managed application lifecycle and optimized performance.',
            'Designed an intuitive and user-friendly interface.'
          ],
          links: {
            repo: 'Repository'
          }
        }
      }
    },
    experience: { title: 'Experience Snapshot' },
    contact: {
      title: 'Contact',
      subtitle: 'Open to remote roles (LATAM → US time overlap).',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      timezone: 'Timezone',
    },
    secondaryTech: {
      title: 'Additional Technologies',
      subtitle:
        'Technologies I have used professionally or in production projects alongside my primary stack.',
      items: {
        csharp: {
          name: 'C# / .NET',
          description:
            'Used for backend services and integrations, including REST APIs and business logic.'
        },
        php: {
          name: 'PHP',
          description:
            'Experience maintaining and extending legacy systems and backend services.'
        },
        python: {
          name: 'Python',
          description:
            'Used for backend APIs with FastAPI, as well as scripting, automation, and rapid prototyping.'
        }
      }
    },
  },



  es: {
    nav: { downloadCv: 'Descargar CV', contact: 'Contacto' },
    hero: {
      title: 'Ingeniero Senior – Java / Spring Boot',
      subtitle: 'Backend-focused | Sistemas Escalables | Remoto LATAM → USA',
      blurb:
        'Más de 13 años construyendo sistemas empresariales con Java, Spring Boot y Angular para e-commerce, LMS y plataformas críticas.',
      ctaPrimary: 'Descargar CV',
      ctaSecondary: 'Ver GitHub',
    },
    about: {
      title: 'Acerca de mí',
      body:
        'Ingeniero de Software Senior con 13+ años desarrollando sistemas backend robustos con Java y Spring Boot. Experiencia en e-commerce de alto tráfico, LMS y sistemas críticos de distribución de energía, colaborando con equipos de EE. UU. Enfocado en arquitectura limpia, rendimiento y mantenibilidad.',
    },
    stack: { title: 'Tecnologías' },
    projects: {
      title: 'Proyectos Destacados',
      items: {
        cmms: {
          name: 'Plataforma CMMS',
          subtitle: 'Sistema Empresarial de Gestión de Mantenimiento',
          stack: 'Java · Spring Boot · Angular · PostgreSQL · JWT',
          summary:
            'Sistema empresarial full-stack para la gestión de activos, órdenes de trabajo y mantenimiento preventivo.',
          bullets: [
            'Diseño e implementación de APIs REST seguras con Spring Boot y autenticación JWT.',
            'Arquitectura en capas con separación clara de responsabilidades.',
            'Frontend Angular modular integrado con servicios backend.',
            'Enfoque en mantenibilidad, escalabilidad y flujos empresariales reales.'
          ],
          links: {
            api: 'Repositorio API',
            ui: 'Repositorio Frontend'
          }
        },

        blood: {
          name: 'Plataforma de Donación de Sangre',
          subtitle: 'Aplicación de Impacto Social',
          stack: 'Spring Boot · Angular · Geolocalización',
          summary:
            'Plataforma que conecta donantes de sangre con receptores mediante búsqueda por ubicación.',
          bullets: [
            'Registro de donantes y gestión de tipos de sangre.',
            'Flujos de búsqueda basados en ubicación y disponibilidad.',
            'Arquitectura backend clara con endpoints REST.',
            'Proyecto orientado a escenarios reales de impacto social.'
          ],
          links: {
            repo: 'Repositorio'
          }
        },

        spa: {
          name: 'Sistema Beauty Spa',
          subtitle: 'Gestión de Reservas y Servicios',
          stack: 'Python · FastAPI · Angular · APIs REST',
          summary:
            'Sistema full-stack para la gestión de servicios de spa, clientes y reservas.',
          bullets: [
            'APIs REST para servicios, reservas y clientes.',
            'Frontend Angular consumiendo servicios backend.',
            'Reglas de negocio para horarios y disponibilidad.',
            'Diseño de dominio limpio y modular.'
          ],
          links: {
            api: 'Repositorio API',
            ui: 'Repositorio Frontend'
          }
        },
        pagatodo: {
          name: 'PagaTodo',
          subtitle: 'Sistema de Pagos y Panel Administrativo',
          stack: 'Angular · Integración REST',
          summary:
            'Aplicaciones administrativas y UI orientadas a flujos de pago y dashboards.',
          bullets: [
            'Componentes UI para flujos administrativos y de pagos.',
            'Diseño enfocado en usabilidad y reutilización.',
            'Ejemplo claro de arquitectura frontend.'
          ],
          links: {
            admin: 'Repositorio Admin',
            ui: 'Repositorio UI'
          }
        },
        learnKids: {
          name: 'Learn Kids',
          subtitle: 'Plataforma Educativa Infantil',
          stack: 'Flutter · Dart · Interfaz educativa',
          summary:
            'Plataforma educativa enfocada en ofrecer contenido interactivo para niños utilizando una arquitectura frontend clara y escalable.',
          bullets: [
            'Diseño de widgets modulares y reutilizables.',
            'Implementación de flujos de datos estructurados para contenido educativo.',
            'Funciones de texto a voz integradas para mejorar la accesibilidad.',
            'Enfoque en usabilidad, claridad y mantenibilidad del UI.',
            'Ejemplo de arquitectura frontend aplicable a proyectos reales.'
          ],
          links: {
            repo: 'Repositorio'
          }
        },
        tesloShop: {
          name: 'UrbanWear',
          subtitle: 'E-commerce de prendas para vestir',
          stack: 'React · NestJS · PostgreSQL · JWT · Docker',
          summary:
            'E-commerce de prendas de vestir con arquitectura backend en NestJS y frontend en React, incluyendo autenticación JWT y despliegue en Docker.',
          bullets: [
            'Diseño e implementación de APIs REST seguras con NestJS y autenticación JWT.',
            'Frontend React modular integrado con servicios backend.',
            'Enfoque en mantenibilidad, escalabilidad y flujos de e-commerce reales.'
          ],
          links: {
            api: 'Repositorio API',
            ui: 'Repositorio Frontend'
          }
        },

        pokemonEncyclopedia:{
          name: 'Enciclopedia Pokémon',
          subtitle: 'Aplicación de consulta de Pokémon',
          stack: 'Kotlin · Android · Retrofit · MVVM',
          summary:
            'Aplicación Android que permite a los usuarios consultar información sobre Pokémon utilizando la API pública de PokéAPI.',
          bullets: [
            'Implementación de arquitectura MVVM para separar la lógica de negocio de la interfaz de usuario.',
            'Uso de Retrofit para realizar solicitudes HTTP a la API de PokéAPI.',
            'Manejo eficiente del ciclo de vida de la aplicación y optimización del rendimiento.',
            'Diseño de una interfaz intuitiva y amigable para el usuario.'
          ],
          links: {
            repo: 'Repositorio'
          }
        }

      }
    },
    experience: { title: 'Resumen de Experiencia' },
    contact: {
      title: 'Contacto',
      subtitle: 'Disponible para roles remotos (solape horario LATAM → US).',
      email: 'Correo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      timezone: 'Zona Horaria',
    },
    secondaryTech: {
      title: 'Tecnologías Secundarias',
      subtitle:
        'Tecnologías utilizadas profesionalmente o en proyectos productivos junto al stack principal.',
      items: {
        csharp: {
          name: 'C# / .NET',
          description:
            'Utilizado en servicios backend e integraciones, incluyendo APIs REST y lógica de negocio.'
        },
        php: {
          name: 'PHP',
          description:
            'Experiencia manteniendo y extendiendo sistemas legacy y servicios backend.'
        },
        python: {
          name: 'Python',
          description:
            'Utilizado para desarrollar APIs backend con FastAPI, así como para scripting, automatización y prototipado rápido.'
        }
      }
    },
  },
};
