export type Lang = 'en' | 'es';

export const MESSAGES: Record<Lang, any> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      stack: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
      downloadCv: 'Download CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      kicker: 'Senior Full Stack Software Engineer',
      blurb:
        'Full Stack Software Engineer with 13+ years building enterprise applications, SaaS platforms, and scalable systems using Java, Spring Boot, Angular, React, .NET, and cloud technologies.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
      now: 'Currently',
      contractor: 'US-based contractor experience',
      systems: 'Backend-heavy, performance-focused systems',
    },
    about: {
      title: 'About',
      body: 'Software Engineer specialized in Full Stack development — building enterprise applications, APIs, SaaS platforms, and distributed systems. I have worked with international teams and US-based clients across high-traffic e-commerce, LMS, and energy distribution. Focused on clean architecture, performance, and long-term maintainability.',
      stats: {
        years: '13+ years of experience',
        focus: 'Full Stack Development',
        location: 'Remote / LATAM',
        english: 'English · Professional Working Proficiency',
      },
    },
    stack: {
      title: 'Tech Stack',
      subtitle: 'A recruiter-friendly map of the tools I use to design, build, and ship production systems.',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        mobile: 'Mobile',
        databases: 'Databases',
        cloud: 'Cloud & DevOps',
        tools: 'Tools and Methodologies',
        architecture: 'Architecture',
      },
      architecture: [
        'Layered backend architecture (Controllers, Services, Repositories)',
        'RESTful APIs with JWT-based authentication and authorization',
        'Clean Code and SOLID principles applied across backend services',
        'Clear separation of concerns between backend and frontend',
        'Database-driven design with optimized SQL and migrations',
        'Production-oriented error handling and validation strategies',
      ],
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'A focused set of full-stack platforms — APIs, web, and mobile.',
      viewAll: 'View all projects',
      viewGithub: 'View all projects on GitHub',
      items: {
        cmms: {
          name: 'CMMS-Platform',
          subtitle: 'Enterprise Maintenance Management System',
          stack: 'Java · Spring Boot · Angular · Flutter · PostgreSQL · JWT',
          summary:
            'Full-stack enterprise CMMS to manage assets, work orders, and preventive maintenance — web, mobile, and API in one monorepo.',
          bullets: [
            'Monorepo with a Spring Boot API, Angular web app, and Flutter mobile client sharing PostgreSQL.',
            'JWT authentication, Flyway migrations, OpenAPI/Swagger, and Docker Compose.',
            'Work orders, preventive plans, inventory, reliability, and technician mobile workflows.',
            'Clean Architecture on the backend with a modular Angular UI and a Flutter field app.',
          ],
          links: {
            repo: 'Repository',
          },
        },

        comercia: {
          name: 'Comercia-multi-tenant',
          subtitle: 'Multi-tenant Commercial SaaS Platform',
          stack: 'Java · Spring Boot · Angular · PostgreSQL · Redis · JWT',
          summary:
            'SaaS platform for commerce, suppliers, and consumers with logical multi-tenant isolation on shared PostgreSQL.',
          bullets: [
            'Hexagonal / Clean Architecture Spring Boot API with Angular 20 web, Capacitor, and Tauri clients.',
            'Tenant isolation via JWT and a Hibernate filter; cross-tenant access returns 404.',
            'Catalog, dual-location inventory, POS/cash register, supplier orders with chat, and consumer pickup codes.',
            'JWT with refresh rotation, RBAC, Redis rate-limit, OpenAPI/Swagger, and Docker Compose.',
          ],
          links: {
            repo: 'Repository',
          },
        },

        blood: {
          name: 'BloodConnectRD',
          subtitle: 'Blood Donation Platform for the Dominican Republic',
          stack: 'Java · Spring Boot · Angular · Flutter · PostgreSQL · JWT',
          summary:
            'Platform that connects people who need blood with available donors, hospitals, clinics, and blood banks in the Dominican Republic.',
          bullets: [
            'Monorepo with a Spring Boot API, Angular web app, and Flutter mobile client sharing PostgreSQL.',
            'Donor registry, blood requests, compatible-donor search, and donation center management.',
            'JWT authentication, Flyway migrations, OpenAPI/Swagger, and Docker Compose.',
            'Internal and push notifications plus an admin panel with statistics.',
          ],
          links: {
            repo: 'Repository',
          },
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
            'Clean and modular backend domain design.',
          ],
          links: {
            api: 'API Repository',
            ui: 'Frontend Repository',
          },
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
            'Demonstrates frontend architecture and real-world UI flows.',
          ],
          links: {
            admin: 'Admin UI Repository',
            ui: 'UI Repository',
          },
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
            'Demonstrates frontend architecture suitable for real-world applications.',
          ],
          links: {
            repo: 'Repository',
          },
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
            'Focused on maintainability, scalability, and real-world e-commerce workflows.',
          ],
          links: {
            api: 'API Repository',
            ui: 'Frontend Repository',
          },
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
            'Focused on mobile architecture fundamentals and maintainable code.',
          ],
          links: {
            repo: 'Repository',
          },
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
            'Flyway migrations, OpenAPI/Swagger, and Docker Compose for local full-stack runs.',
          ],
          links: {
            repo: 'Repository',
          },
        },

        finTrack: {
          name: 'FinTrack',
          subtitle: 'Personal Finance Platform',
          stack: 'Flutter · Dart · C# · .NET · PostgreSQL · JWT',
          summary:
            'Bilingual personal finance platform with a Flutter mobile app, ASP.NET Core REST API, and PostgreSQL.',
          bullets: [
            'JWT-secured income and expense tracking with categories, budgets, savings goals, and recurring transactions.',
            'Dashboard and reports with charts for spending, income vs expenses, and balance history.',
            'Spanish/English switching, light/dark themes, and DOP/USD/EUR display.',
            'Clean Architecture on .NET 8 with a Flutter client using Riverpod, Dio, and GoRouter.',
          ],
          links: {
            repo: 'Repository',
          },
        },

        expenseTracker: {
          name: 'Expense Tracker',
          subtitle: 'Offline Personal Finance App',
          stack: 'Flutter · Dart · Hive · Material 3',
          summary:
            'Offline-first Flutter app for tracking income, expenses, budgets, and savings goals with local persistence — no backend or accounts.',
          bullets: [
            'Dashboard with balance, period totals, budgets, and charts using local Hive storage.',
            'Transaction CRUD with search, filters, recurring movements, and savings goals.',
            'Monthly budgets with 80%/100%/overspend alerts and CSV/PDF export.',
            'Feature-first Clean Architecture with Riverpod, GoRouter, and Material 3.',
          ],
          links: {
            repo: 'Repository',
          },
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
            'Feature-first Clean Architecture with Riverpod, Dio, and GoRouter.',
          ],
          links: {
            repo: 'Repository',
          },
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
            'Demonstrates practical .NET application design.',
          ],
          links: {
            repo: 'Repository',
          },
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
            'Emphasized clean Dart structure and UI consistency.',
          ],
          links: {
            repo: 'Repository',
          },
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
            'Useful showcase of backend messaging foundations.',
          ],
          links: {
            repo: 'Repository',
          },
        },
      },
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
    experience: {
      title: 'Experience',
      items: {
        oneseven: {
          summary: 'Full-stack work on a high-traffic SaaS audience builder platform.',
        },
        ceshop: {
          summary: 'Senior systems engineering for high-traffic e-commerce and learning management platforms.',
        },
        indra: {
          summary: 'Enterprise systems work focused on performance optimization and a Flutter migration.',
        },
        excellent: {
          summary: 'Full-stack development across multiple enterprise client systems.',
        },
      },
    },
    contact: {
      title: 'Let’s work together',
      subtitle:
        'Available for Senior Full Stack, Backend, and Frontend roles — especially remote work with international teams.',
      cta: 'Contact me',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio',
      timezone: 'Timezone',
    },
    common: {
      backToTop: 'Back to top',
      skipToContent: 'Skip to content',
    },
    secondaryTech: {
      title: 'Additional Technologies',
      subtitle:
        'Technologies I have used professionally or in production projects alongside my primary stack.',
      items: {
        csharp: {
          name: 'C# / .NET',
          description:
            'Used for backend services and integrations, including REST APIs and business logic.',
        },
        php: {
          name: 'PHP',
          description:
            'Experience maintaining and extending legacy systems and backend services.',
        },
        python: {
          name: 'Python',
          description:
            'Used for backend APIs with FastAPI, as well as scripting, automation, and rapid prototyping.',
        },
      },
    },
    footer: {
      role: 'Senior Full Stack Software Engineer',
      privacy: 'Privacy Policy',
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: August 12, 2026',
      intro:
        'This privacy policy explains how andresfrias.dev (the “Site”), a personal portfolio operated by Andrés Frías, handles information when you visit or interact with it.',
      backHome: 'Home',
      contactPrefix: 'If you have questions about this policy, contact:',
      sections: [
        {
          title: '1. Information I collect',
          body:
            'This Site does not require accounts and does not include contact forms that store submissions on a server.\n\nIf you email me or reach out through LinkedIn or GitHub, I receive the information you choose to share in that conversation.',
        },
        {
          title: '2. Local preferences',
          body:
            'The Site stores your language preference (English or Spanish) in your browser’s localStorage so the interface can remember your choice on later visits. This preference stays on your device and is not sent to a backend database.',
        },
        {
          title: '3. Analytics and cookies',
          body:
            'The Site may use Google Analytics (or similar tools) to understand aggregate traffic, such as pages viewed and approximate location. These tools may set cookies or use similar technologies.\n\nYou can control cookies through your browser settings. Blocking cookies may limit analytics measurement but should not prevent browsing the portfolio content.',
        },
        {
          title: '4. Third-party links',
          body:
            'The Site links to external services such as GitHub, LinkedIn, and project repositories. Those services have their own privacy policies, and I am not responsible for their practices.',
        },
        {
          title: '5. Data sharing',
          body:
            'I do not sell personal information. Analytics providers may process usage data on my behalf under their terms. Contact messages you send are used only to respond to your inquiry.',
        },
        {
          title: '6. Changes',
          body:
            'I may update this privacy policy from time to time. The “Last updated” date at the top of this page reflects the latest revision.',
        },
      ],
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      stack: 'Stack',
      projects: 'Proyectos',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    hero: {
      kicker: 'Senior Full Stack Software Engineer',
      blurb:
        'Full Stack Software Engineer con más de 13 años de experiencia desarrollando aplicaciones empresariales, plataformas SaaS y soluciones escalables utilizando Java, Spring Boot, Angular, React, .NET y tecnologías Cloud.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      now: 'Disponible',
      contractor: 'Experiencia como contractor con equipos de EE. UU.',
      systems: 'Sistemas backend de alto rendimiento',
    },
    about: {
      title: 'Sobre mí',
      body: 'Software Engineer especializado en desarrollo Full Stack, con experiencia construyendo aplicaciones empresariales, APIs, plataformas SaaS y sistemas distribuidos. He trabajado con equipos internacionales y clientes de Estados Unidos en e-commerce de alto tráfico, LMS y distribución de energía. Enfocado en arquitectura limpia, rendimiento y mantenibilidad.',
      stats: {
        years: '13+ años de experiencia',
        focus: 'Full Stack Development',
        location: 'Remote / LATAM',
        english: 'English · Professional Working Proficiency',
      },
    },
    stack: {
      title: 'Stack tecnológico',
      subtitle: 'Un mapa fácil de escanear de las herramientas con las que diseño, construyo y publico sistemas en producción.',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        mobile: 'Mobile',
        databases: 'Bases de datos',
        cloud: 'Cloud & DevOps',
        tools: 'Tools and Methodologies',
        architecture: 'Arquitectura',
      },
      architecture: [
        'Arquitectura backend en capas (Controladores, Servicios, Repositorios)',
        'APIs REST con autenticación y autorización basada en JWT',
        'Aplicación de principios Clean Code y SOLID',
        'Separación clara de responsabilidades entre backend y frontend',
        'Diseño orientado a base de datos con SQL optimizado y migraciones',
        'Manejo de errores y validaciones orientadas a entornos productivos',
      ],
    },
    projects: {
      title: 'Proyectos destacados',
      subtitle: 'Una selección de plataformas full-stack — APIs, web y móvil.',
      viewAll: 'Ver todos los proyectos',
      viewGithub: 'Ver todos los proyectos en GitHub',
      items: {
        cmms: {
          name: 'CMMS-Platform',
          subtitle: 'Sistema Empresarial de Gestión de Mantenimiento',
          stack: 'Java · Spring Boot · Angular · Flutter · PostgreSQL · JWT',
          summary:
            'CMMS empresarial full-stack para gestionar activos, órdenes de trabajo y mantenimiento preventivo: web, móvil y API en un monorepo.',
          bullets: [
            'Monorepo con API Spring Boot, web Angular y cliente móvil Flutter compartiendo PostgreSQL.',
            'Autenticación JWT, migraciones Flyway, OpenAPI/Swagger y Docker Compose.',
            'Órdenes de trabajo, planes preventivos, inventario, confiabilidad y flujos móviles del técnico.',
            'Clean Architecture en el backend, UI Angular modular y app Flutter de campo.',
          ],
          links: {
            repo: 'Repositorio',
          },
        },

        comercia: {
          name: 'Comercia-multi-tenant',
          subtitle: 'Plataforma SaaS Comercial Multi-tenant',
          stack: 'Java · Spring Boot · Angular · PostgreSQL · Redis · JWT',
          summary:
            'Plataforma SaaS para comercios, proveedores y consumidores con aislamiento multi-tenant lógico sobre PostgreSQL compartido.',
          bullets: [
            'API Spring Boot hexagonal / Clean Architecture con web Angular 20, Capacitor y Tauri.',
            'Aislamiento de tenant por JWT y filtro Hibernate; el acceso cruzado entre tenants responde 404.',
            'Catálogo, inventario de doble ubicación, POS/caja, pedidos a proveedor con chat y códigos de retiro.',
            'JWT con rotación de refresh, RBAC, rate-limit Redis, OpenAPI/Swagger y Docker Compose.',
          ],
          links: {
            repo: 'Repositorio',
          },
        },

        blood: {
          name: 'BloodConnectRD',
          subtitle: 'Plataforma de Donación de Sangre en República Dominicana',
          stack: 'Java · Spring Boot · Angular · Flutter · PostgreSQL · JWT',
          summary:
            'Plataforma que conecta a personas que necesitan sangre con donantes disponibles, hospitales, clínicas y bancos de sangre en República Dominicana.',
          bullets: [
            'Monorepo con API Spring Boot, web Angular y cliente móvil Flutter compartiendo PostgreSQL.',
            'Registro de donantes, solicitudes de sangre, búsqueda de donantes compatibles y gestión de centros.',
            'Autenticación JWT, migraciones Flyway, OpenAPI/Swagger y Docker Compose.',
            'Notificaciones internas y push, más un panel administrativo con estadísticas.',
          ],
          links: {
            repo: 'Repositorio',
          },
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
            'Diseño de dominio limpio y modular.',
          ],
          links: {
            api: 'Repositorio API',
            ui: 'Repositorio Frontend',
          },
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
            'Ejemplo claro de arquitectura frontend.',
          ],
          links: {
            admin: 'Repositorio Admin',
            ui: 'Repositorio UI',
          },
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
            'Ejemplo de arquitectura frontend aplicable a proyectos reales.',
          ],
          links: {
            repo: 'Repositorio',
          },
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
            'Enfoque en mantenibilidad, escalabilidad y flujos de e-commerce reales.',
          ],
          links: {
            api: 'Repositorio API',
            ui: 'Repositorio Frontend',
          },
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
            'Enfoque en fundamentos de arquitectura móvil y código mantenible.',
          ],
          links: {
            repo: 'Repositorio',
          },
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
            'Migraciones Flyway, OpenAPI/Swagger y Docker Compose para ejecución full-stack local.',
          ],
          links: {
            repo: 'Repositorio',
          },
        },

        finTrack: {
          name: 'FinTrack',
          subtitle: 'Plataforma de Finanzas Personales',
          stack: 'Flutter · Dart · C# · .NET · PostgreSQL · JWT',
          summary:
            'Plataforma bilingüe de finanzas personales con app Flutter, API REST ASP.NET Core y PostgreSQL.',
          bullets: [
            'Seguimiento de ingresos y gastos con JWT, categorías, presupuestos, metas de ahorro y recurrentes.',
            'Dashboard y reportes con gráficos de gastos, ingresos vs egresos e historial de balance.',
            'Cambio de idioma español/inglés, temas claro/oscuro y visualización en DOP/USD/EUR.',
            'Clean Architecture en .NET 8 y cliente Flutter con Riverpod, Dio y GoRouter.',
          ],
          links: {
            repo: 'Repositorio',
          },
        },

        expenseTracker: {
          name: 'Expense Tracker',
          subtitle: 'App de Finanzas Personales Offline',
          stack: 'Flutter · Dart · Hive · Material 3',
          summary:
            'App Flutter offline-first para registrar ingresos, gastos, presupuestos y metas de ahorro con persistencia local, sin backend ni cuentas.',
          bullets: [
            'Dashboard con balance, totales del periodo, presupuestos y gráficos usando almacenamiento local Hive.',
            'CRUD de transacciones con búsqueda, filtros, movimientos recurrentes y metas de ahorro.',
            'Presupuestos mensuales con alertas al 80%/100%/sobrecosto y exportación CSV/PDF.',
            'Arquitectura limpia por features con Riverpod, GoRouter y Material 3.',
          ],
          links: {
            repo: 'Repositorio',
          },
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
            'Arquitectura limpia feature-first con Riverpod, Dio y GoRouter.',
          ],
          links: {
            repo: 'Repositorio',
          },
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
            'Ejemplo práctico de diseño de aplicaciones .NET.',
          ],
          links: {
            repo: 'Repositorio',
          },
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
            'Énfasis en estructura Dart limpia y consistencia visual.',
          ],
          links: {
            repo: 'Repositorio',
          },
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
            'Ejemplo de fundamentos backend para mensajería.',
          ],
          links: {
            repo: 'Repositorio',
          },
        },
      },
    },
    allProjects: {
      title: 'Todos los Proyectos',
      subtitle: 'Explora el catálogo completo y filtra por stack tecnológico.',
      filterByStack: 'Filtrar por stack',
      allStacks: 'Todos',
      clearFilters: 'Limpiar filtros',
      results: 'proyectos',
      empty:
        'No hay proyectos que coincidan con los filtros de stack seleccionados.',
      backHome: 'Inicio',
    },
    experience: {
      title: 'Experiencia',
      items: {
        oneseven: {
          summary: 'Desarrollo full-stack en una plataforma SaaS de audience builder de alto tráfico.',
        },
        ceshop: {
          summary: 'Ingeniería de sistemas senior para plataformas de e-commerce y LMS de alto tráfico.',
        },
        indra: {
          summary: 'Sistemas empresariales con foco en optimización de rendimiento y una migración a Flutter.',
        },
        excellent: {
          summary: 'Desarrollo full-stack para múltiples sistemas de clientes empresariales.',
        },
      },
    },
    contact: {
      title: '¿Trabajamos juntos?',
      subtitle:
        'Estoy disponible para oportunidades Senior Full Stack, Backend y Frontend, especialmente proyectos remotos para equipos internacionales.',
      cta: 'Contactarme',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portafolio',
      timezone: 'Zona horaria',
    },
    common: {
      backToTop: 'Volver arriba',
      skipToContent: 'Saltar al contenido',
    },
    secondaryTech: {
      title: 'Tecnologías Secundarias',
      subtitle:
        'Tecnologías utilizadas profesionalmente o en proyectos productivos junto al stack principal.',
      items: {
        csharp: {
          name: 'C# / .NET',
          description:
            'Utilizado en servicios backend e integraciones, incluyendo APIs REST y lógica de negocio.',
        },
        php: {
          name: 'PHP',
          description:
            'Experiencia manteniendo y extendiendo sistemas legacy y servicios backend.',
        },
        python: {
          name: 'Python',
          description:
            'Utilizado para desarrollar APIs backend con FastAPI, así como para scripting, automatización y prototipado rápido.',
        },
      },
    },
    footer: {
      role: 'Senior Full Stack Software Engineer',
      privacy: 'Política de privacidad',
    },
    privacy: {
      title: 'Política de privacidad',
      updated: 'Última actualización: 12 de agosto de 2026',
      intro:
        'Esta política de privacidad explica cómo andresfrias.dev (el “Sitio”), un portafolio personal operado por Andrés Frías, trata la información cuando visitas o interactúas con él.',
      backHome: 'Inicio',
      contactPrefix: 'Si tienes preguntas sobre esta política, contacta:',
      sections: [
        {
          title: '1. Información que recopilo',
          body:
            'Este Sitio no requiere cuentas y no incluye formularios de contacto que almacenen envíos en un servidor.\n\nSi me escribes por correo o me contactas por LinkedIn o GitHub, recibo la información que eliges compartir en esa conversación.',
        },
        {
          title: '2. Preferencias locales',
          body:
            'El Sitio guarda tu preferencia de idioma (inglés o español) en el localStorage del navegador para recordar tu elección en visitas posteriores. Esta preferencia permanece en tu dispositivo y no se envía a una base de datos backend.',
        },
        {
          title: '3. Analítica y cookies',
          body:
            'El Sitio puede usar Google Analytics (o herramientas similares) para entender el tráfico agregado, como páginas vistas y ubicación aproximada. Estas herramientas pueden establecer cookies o usar tecnologías similares.\n\nPuedes controlar las cookies desde la configuración de tu navegador. Bloquearlas puede limitar la medición analítica, pero no debería impedir navegar el contenido del portafolio.',
        },
        {
          title: '4. Enlaces de terceros',
          body:
            'El Sitio enlaza a servicios externos como GitHub, LinkedIn y repositorios de proyectos. Esos servicios tienen sus propias políticas de privacidad y no soy responsable de sus prácticas.',
        },
        {
          title: '5. Compartición de datos',
          body:
            'No vendo información personal. Los proveedores de analítica pueden procesar datos de uso en mi nombre según sus términos. Los mensajes de contacto que envíes se usan solo para responder a tu consulta.',
        },
        {
          title: '6. Cambios',
          body:
            'Puedo actualizar esta política de privacidad ocasionalmente. La fecha de “Última actualización” al inicio de esta página refleja la revisión más reciente.',
        },
      ],
    },
  },
};
