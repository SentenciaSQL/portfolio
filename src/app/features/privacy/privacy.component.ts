import {Component, computed, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {I18nService} from '../../core/i18n/i18n.service';
import {IconComponent} from '../../shared/icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-privacy',
  imports: [RouterLink, IconComponent],
  templateUrl: './privacy.component.html',
})
export class PrivacyComponent {
  readonly i18n = inject(I18nService);

  readonly sections = computed(() => this.i18n.dict().privacy.sections as Array<{
    title: string;
    body: string;
  }>);
}
