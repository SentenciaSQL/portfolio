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
      viewAll: 'View all projects',
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

        pokedexKotlin: {
          name: 'Pokedex Kotlin',
          subtitle: 'Android Mobile App',
          stack: 'Kotlin · Android',
          summary:
            'Android application built with Kotlin to browse Pokémon data through a clean mobile architecture.',
          bullets: [
            'Native Android UI implemented with Kotlin.',
            'Structured data consumption and list/detail navigation flows.',
            'Focused on mobile architecture fundamentals and maintainable code.'
          ],
          links: {
            repo: 'Repository'
          }
        },

        stockWise: {
          name: 'StockWise',
          subtitle: 'Inventory Management System',
          stack: 'Java · Spring Boot · Angular · Flutter · PostgreSQL · JWT',
          summary:
            'Full-stack inventory platform with a Spring Boot API, Angular web app, and Flutter mobile client sharing one PostgreSQL database.',
          bullets: [
            'JWT authentication with role-based access and catalog CRUD for products, suppliers, and warehouses.',
            'Stock movements, transfers, low-stock detection, and dashboard analytics.',
            'Angular SaaS UI and Flutter mobile client consuming the same Spring Boot API.',
            'Flyway migrations, OpenAPI/Swagger, and Docker Compose for local full-stack runs.'
          ],
          links: {
            repo: 'Repository'
          }
        },

        pokeFlu: {
          name: 'PokeFlu',
          subtitle: 'Pokédex Mobile App',
          stack: 'Flutter · Dart · Clean Architecture · PokéAPI',
          summary:
            'Modern Pokédex mobile app built with Flutter, Clean Architecture, and PokéAPI for browsing, searching, and exploring Pokémon.',
          bullets: [
            'Responsive Pokédex grid with infinite scroll, search, and type filters.',
            'Detail screens with evolution chains, moves, abilities, and animated base stats.',
            'Local favorites, offline cache, and light/dark theme persistence.',
            'Feature-first Clean Architecture with Riverpod, Dio, and GoRouter.'
          ],
          links: {
            repo: 'Repository'
          }
        },

        taskFlow: {
          name: 'TaskFlow',
          subtitle: 'Task Management Backend',
          stack: 'C# · .NET',
          summary:
            'Task management oriented project built with C# and .NET to model workflows and service layers.',
          bullets: [
            'Modeled task-oriented domain logic in C#.',
            'Organized backend structure around maintainable service layers.',
            'Demonstrates practical .NET application design.'
          ],
          links: {
            repo: 'Repository'
          }
        },

        adminDashboardFlutter: {
          name: 'Flutter Admin Dashboard',
          subtitle: 'Dashboard UI Kit',
          stack: 'Flutter · Dart',
          summary:
            'Admin dashboard interface built with Flutter and Dart, focused on reusable UI composition.',
          bullets: [
            'Designed dashboard layouts with Flutter widgets.',
            'Built reusable UI blocks for admin-style screens.',
            'Emphasized clean Dart structure and UI consistency.'
          ],
          links: {
            repo: 'Repository'
          }
        },

        springChat: {
          name: 'Spring Boot Chat Backend',
          subtitle: 'Real-time Messaging API',
          stack: 'Java · Spring Boot',
          summary:
            'Backend chat service built with Java and Spring Boot to support messaging-oriented APIs.',
          bullets: [
            'Implemented chat-oriented backend endpoints with Spring Boot.',
            'Focused on Java service structure and API design.',
            'Useful showcase of backend messaging foundations.'
          ],
          links: {
            repo: 'Repository'
          }
        }
      }
    },
    allProjects: {
      title: 'All Projects',
      subtitle: 'Browse the full catalog and filter by technology stack.',
      filterByStack: 'Filter by stack',
      allStacks: 'All',
      clearFilters: 'Clear filters',
      results: 'projects',
      empty: 'No projects match the selected stack filters.',
      backHome: 'Home',
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
      viewAll: 'Ver todos los proyectos',
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

        pokedexKotlin: {
          name: 'Pokedex Kotlin',
          subtitle: 'Aplicación Móvil Android',
          stack: 'Kotlin · Android',
          summary:
            'Aplicación Android en Kotlin para consultar información de Pokémon con una arquitectura móvil clara.',
          bullets: [
            'UI nativa Android implementada con Kotlin.',
            'Flujos de listado y detalle con consumo de datos estructurado.',
            'Enfoque en fundamentos de arquitectura móvil y código mantenible.'
          ],
          links: {
            repo: 'Repositorio'
          }
        },

        stockWise: {
          name: 'StockWise',
          subtitle: 'Sistema de Gestión de Inventario',
          stack: 'Java · Spring Boot · Angular · Flutter · PostgreSQL · JWT',
          summary:
            'Plataforma full-stack de inventario con API Spring Boot, web Angular y cliente móvil Flutter compartiendo una base PostgreSQL.',
          bullets: [
            'Autenticación JWT con roles y CRUD de catálogo para productos, proveedores y almacenes.',
            'Movimientos de stock, transferencias, detección de stock bajo y analítica de dashboard.',
            'UI SaaS en Angular y cliente móvil Flutter consumiendo la misma API Spring Boot.',
            'Migraciones Flyway, OpenAPI/Swagger y Docker Compose para ejecución full-stack local.'
          ],
          links: {
            repo: 'Repositorio'
          }
        },

        pokeFlu: {
          name: 'PokeFlu',
          subtitle: 'App Móvil Pokédex',
          stack: 'Flutter · Dart · Clean Architecture · PokéAPI',
          summary:
            'App móvil Pokédex moderna construida con Flutter, Clean Architecture y PokéAPI para explorar, buscar y filtrar Pokémon.',
          bullets: [
            'Grid responsivo con scroll infinito, búsqueda y filtros por tipo.',
            'Pantallas de detalle con cadenas de evolución, movimientos, habilidades y stats animados.',
            'Favoritos locales, caché offline y persistencia de tema claro/oscuro.',
            'Arquitectura limpia feature-first con Riverpod, Dio y GoRouter.'
          ],
          links: {
            repo: 'Repositorio'
          }
        },

        taskFlow: {
          name: 'TaskFlow',
          subtitle: 'Backend de Gestión de Tareas',
          stack: 'C# · .NET',
          summary:
            'Proyecto orientado a gestión de tareas con C# y .NET para modelar flujos y capas de servicio.',
          bullets: [
            'Lógica de dominio orientada a tareas en C#.',
            'Estructura backend organizada en capas mantenibles.',
            'Ejemplo práctico de diseño de aplicaciones .NET.'
          ],
          links: {
            repo: 'Repositorio'
          }
        },

        adminDashboardFlutter: {
          name: 'Dashboard Admin Flutter',
          subtitle: 'Kit de UI para Dashboards',
          stack: 'Flutter · Dart',
          summary:
            'Interfaz de dashboard administrativo construida con Flutter y Dart, enfocada en composición UI reutilizable.',
          bullets: [
            'Layouts de dashboard con widgets de Flutter.',
            'Bloques UI reutilizables para pantallas administrativas.',
            'Énfasis en estructura Dart limpia y consistencia visual.'
          ],
          links: {
            repo: 'Repositorio'
          }
        },

        springChat: {
          name: 'Chat Backend Spring Boot',
          subtitle: 'API de Mensajería',
          stack: 'Java · Spring Boot',
          summary:
            'Servicio backend de chat construido con Java y Spring Boot para APIs orientadas a mensajería.',
          bullets: [
            'Endpoints backend de chat con Spring Boot.',
            'Enfoque en estructura de servicios Java y diseño de APIs.',
            'Ejemplo de fundamentos backend para mensajería.'
          ],
          links: {
            repo: 'Repositorio'
          }
        }

      }
    },
    allProjects: {
      title: 'Todos los Proyectos',
      subtitle: 'Explora el catálogo completo y filtra por stack tecnológico.',
      filterByStack: 'Filtrar por stack',
      allStacks: 'Todos',
      clearFilters: 'Limpiar filtros',
      results: 'proyectos',
      empty: 'No hay proyectos que coincidan con los filtros de stack seleccionados.',
      backHome: 'Inicio',
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
