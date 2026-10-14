import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-fintrack-support',
  templateUrl: './fintrack-support.component.html',
})
export class FintrackSupportComponent {
  private readonly i18n = inject(I18nService);

  readonly email = 'afriasdev@gmail.com';

  readonly copy = computed(() =>
    this.i18n.lang() === 'es'
      ? {
          eyebrow: 'CENTRO DE AYUDA',
          title: '¿Cómo podemos ayudarte?',
          intro:
            'Estamos aquí para ayudarte a sacar el máximo provecho de FinTrack.',
          contactTitle: 'Habla con soporte',
          contactBody:
            'Escríbenos y cuéntanos qué sucede. Para ayudarnos a investigar, incluye el modelo de tu dispositivo y la versión de la app.',
          emailLabel: 'Enviar un correo',
          faqTitle: 'Preguntas frecuentes',
          faqs: [
            {
              question: '¿Cómo agrego un ingreso o un gasto?',
              answer:
                'Abre la pantalla de inicio o Transacciones, toca “Agregar” y completa los datos del movimiento.',
            },
            {
              question: '¿Dónde puedo revisar mis transacciones?',
              answer:
                'Entra en Transacciones para consultar tus movimientos y filtrar por ingresos o gastos.',
            },
            {
              question: '¿Cómo consulto mi presupuesto?',
              answer:
                'Abre la sección Presupuesto para revisar el progreso de tus límites y gastos.',
            },
            {
              question: '¿Puedo cambiar el idioma?',
              answer:
                'Sí. Usa el selector ES / EN en la parte superior de esta página para elegir español o inglés.',
            },
          ],
          note: '¿No encuentras lo que buscas? Escríbenos y te ayudaremos.',
        }
      : {
          eyebrow: 'HELP CENTER',
          title: 'How can we help?',
          intro: 'We are here to help you get the most out of FinTrack.',
          contactTitle: 'Talk to support',
          contactBody:
            'Send us a message and tell us what is happening. To help us investigate, include your device model and app version.',
          emailLabel: 'Email support',
          faqTitle: 'Frequently asked questions',
          faqs: [
            {
              question: 'How do I add income or an expense?',
              answer:
                'Open Home or Transactions, tap “Add,” and fill in the details of the transaction.',
            },
            {
              question: 'Where can I review my transactions?',
              answer:
                'Open Transactions to browse your activity and filter by income or expenses.',
            },
            {
              question: 'How do I check my budget?',
              answer:
                'Open the Budget section to review the progress of your limits and spending.',
            },
            {
              question: 'Can I change the language?',
              answer:
                'Yes. Use the ES / EN selector at the top of this page to choose Spanish or English.',
            },
          ],
          note: 'Can’t find what you need? Send us a message and we’ll help.',
        },
  );
}
