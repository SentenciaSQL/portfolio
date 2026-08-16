import {Component, inject} from '@angular/core';
import {I18nService} from '../../../../core/i18n/i18n.service';
import {SITE} from '../../../../core/site/site.constants';
import {IconComponent} from '../../../../shared/icon/icon.component';
import {RevealDirective} from '../../../../shared/reveal/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly i18n = inject(I18nService);
  readonly site = SITE;
}
