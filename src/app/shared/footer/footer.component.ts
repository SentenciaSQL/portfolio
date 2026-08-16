import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {I18nService} from '../../core/i18n/i18n.service';
import {openEmail} from '../../core/site/open-email';
import {SITE} from '../../core/site/site.constants';
import {IconComponent} from '../icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly i18n = inject(I18nService);
  readonly site = SITE;
  readonly year = new Date().getFullYear();
  readonly openEmail = openEmail;
}
