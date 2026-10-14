import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-fintrack-privacy',
  templateUrl: './fintrack-privacy.component.html',
})
export class FintrackPrivacyComponent {
  readonly i18n = inject(I18nService);

  readonly email = 'afriasdev@gmail.com';

  readonly copy = computed(() =>
    this.i18n.lang() === 'es'
      ? {
          title: 'Política de privacidad de FinTrack',
          updated: 'Última actualización: 14 de octubre de 2026',
          intro:
            'Esta política explica qué información se trata cuando utilizas FinTrack, cómo se utiliza y cómo puedes solicitar la eliminación de tu cuenta y tus datos.',
          sections: [
            {
              title: 'Información que tratamos',
              body: 'Al crear una cuenta con correo electrónico y contraseña, proporcionas tu dirección de correo y los datos necesarios para autenticarte. Si eliges iniciar sesión con Google, recibimos la información de cuenta que autorizas compartir durante ese proceso, como tu correo electrónico y, si está disponible, información básica de perfil.\n\nFinTrack también trata los ingresos, gastos, importes, fechas, categorías y presupuestos que registras en la app. Si contactas a soporte, trataremos el contenido y los datos de contacto que incluyas en tu mensaje.',
            },
            {
              title: 'Cómo usamos la información',
              body: 'Utilizamos esta información para crear y administrar tu cuenta, autenticarte, guardar y mostrar tus registros financieros, generar resúmenes y presupuestos dentro de la app, y responder a tus solicitudes de soporte.',
            },
            {
              title: 'Almacenamiento y servicios',
              body: 'La información de cuenta y los registros financieros se procesan mediante el backend propio de FinTrack. Si utilizas Google Sign-In, Google participa en la autenticación y trata la información según su propia política de privacidad.',
            },
            {
              title: 'Conservación y eliminación',
              body: 'Para solicitar la eliminación de tu cuenta y los datos asociados, escríbenos desde la dirección de correo vinculada a tu cuenta. Es posible que debamos conservar cierta información cuando una obligación legal lo requiera.',
            },
            {
              title: 'Cambios y contacto',
              body: 'Podemos actualizar esta política cuando cambien la app o sus prácticas de datos. La fecha indicada al inicio muestra la última revisión. Para preguntas o solicitudes relacionadas con privacidad, contáctanos por correo.',
            },
          ],
          googlePolicy: 'Política de privacidad de Google',
          contact: 'Contacto de privacidad',
        }
      : {
          title: 'FinTrack Privacy Policy',
          updated: 'Last updated: October 14, 2026',
          intro:
            'This policy explains what information is processed when you use FinTrack, how it is used, and how you can request deletion of your account and data.',
          sections: [
            {
              title: 'Information we process',
              body: 'When you create an account with email and password, you provide your email address and the information needed to authenticate you. If you choose Google Sign-In, we receive the account information you authorize during that process, such as your email address and, when available, basic profile information.\n\nFinTrack also processes the income, expenses, amounts, dates, categories, and budgets you enter in the app. If you contact support, we process the message and contact details you include.',
            },
            {
              title: 'How we use information',
              body: 'We use this information to create and manage your account, authenticate you, store and display your financial records, provide summaries and budgets in the app, and respond to support requests.',
            },
            {
              title: 'Storage and services',
              body: 'Account information and financial records are processed through FinTrack’s own backend. If you use Google Sign-In, Google participates in authentication and processes information under its own privacy policy.',
            },
            {
              title: 'Retention and deletion',
              body: 'To request deletion of your account and associated data, email us from the address linked to your account. We may need to retain certain information when required by law.',
            },
            {
              title: 'Changes and contact',
              body: 'We may update this policy when the app or its data practices change. The date above reflects the latest revision. For privacy questions or requests, contact us by email.',
            },
          ],
          googlePolicy: 'Google Privacy Policy',
          contact: 'Privacy contact',
        },
  );
}
