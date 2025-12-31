import {Component, inject} from '@angular/core';
import {I18nService} from '../../../../core/i18n/i18n.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-architecture',
  imports: [MatCardModule],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.css',
})
export class ArchitectureComponent {
  i18n = inject(I18nService);

  get items(): string[] {
    return this.i18n.lang() === 'en'
      ? [
        'Layered backend architecture (Controllers, Services, Repositories)',
        'RESTful APIs with JWT-based authentication and authorization',
        'Clean Code and SOLID principles applied across backend services',
        'Clear separation of concerns between backend and frontend',
        'Database-driven design with optimized SQL and migrations',
        'Production-oriented error handling and validation strategies',
      ]
      : [
        'Arquitectura backend en capas (Controladores, Servicios, Repositorios)',
        'APIs REST con autenticación y autorización basada en JWT',
        'Aplicación de principios Clean Code y SOLID',
        'Separación clara de responsabilidades entre backend y frontend',
        'Diseño orientado a base de datos con SQL optimizado y migraciones',
        'Manejo de errores y validaciones orientadas a entornos productivos',
      ];
  }
}
