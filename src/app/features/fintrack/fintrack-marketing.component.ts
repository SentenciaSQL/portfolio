import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-fintrack-marketing',
  imports: [RouterLink],
  templateUrl: './fintrack-marketing.component.html',
})
export class FintrackMarketingComponent {
  private readonly i18n = inject(I18nService);

  readonly copy = computed(() =>
    this.i18n.lang() === 'es'
      ? {
          eyebrow: 'FINANZAS PERSONALES, EN EQUILIBRIO',
          title: 'Claridad para cada peso.',
          intro:
            'FinTrack reúne tus ingresos, gastos y ahorros en una vista sencilla para que entiendas mejor tu día a día financiero.',
          support: 'Visita el centro de soporte',
          preview: 'Vista general',
          balance: 'Balance actual',
          income: 'Ingresos del mes',
          expenses: 'Gastos del mes',
          budget: 'Presupuesto utilizado',
          chart: 'Ingresos y gastos',
          month: 'Octubre',
          sectionTitle: 'Lo importante, de un vistazo.',
          sectionIntro:
            'Una experiencia clara para seguir tus movimientos y tomar decisiones con confianza.',
          features: [
            {
              title: 'Registra tus movimientos',
              body: 'Organiza ingresos y gastos y revisa tus transacciones recientes.',
            },
            {
              title: 'Planea tu presupuesto',
              body: 'Consulta cuánto has usado y mantén tus gastos bajo control.',
            },
            {
              title: 'Entiende tus hábitos',
              body: 'Explora resúmenes visuales de ingresos, gastos y categorías.',
            },
          ],
          closingTitle: '¿Necesitas una mano?',
          closingBody:
            'Encuentra respuestas o comunícate con el equipo de soporte.',
          closingLink: 'Ir a soporte',
        }
      : {
          eyebrow: 'PERSONAL FINANCE, IN BALANCE',
          title: 'Clarity for every peso.',
          intro:
            'FinTrack brings your income, expenses, and savings into one simple view so you can better understand your day-to-day finances.',
          support: 'Visit the support center',
          preview: 'Overview',
          balance: 'Current balance',
          income: 'Monthly income',
          expenses: 'Monthly expenses',
          budget: 'Budget used',
          chart: 'Income vs expenses',
          month: 'October',
          sectionTitle: 'The essentials, at a glance.',
          sectionIntro:
            'A clear experience for tracking activity and making confident decisions.',
          features: [
            {
              title: 'Track your activity',
              body: 'Organize income and expenses, and review recent transactions.',
            },
            {
              title: 'Plan your budget',
              body: 'See how much you have used and keep spending in view.',
            },
            {
              title: 'Understand your habits',
              body: 'Explore visual summaries of income, expenses, and categories.',
            },
          ],
          closingTitle: 'Need a hand?',
          closingBody: 'Find answers or get in touch with the support team.',
          closingLink: 'Go to support',
        },
  );
}
