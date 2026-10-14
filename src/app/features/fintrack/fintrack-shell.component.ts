import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-fintrack-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './fintrack-shell.component.html',
})
export class FintrackShellComponent {
  readonly i18n = inject(I18nService);

  readonly copy = {
    en: {
      overview: 'Overview',
      support: 'Support',
      privacy: 'Privacy',
      language: 'Language',
      footer: 'Personal finance, with a clearer view.',
    },
    es: {
      overview: 'FinTrack',
      support: 'Soporte',
      privacy: 'Privacidad',
      language: 'Idioma',
      footer: 'Finanzas personales, con más claridad.',
    },
  };
}
