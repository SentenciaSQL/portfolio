import {Component, computed, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {I18nService} from '../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-privacy',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css',
})
export class PrivacyComponent {
  i18n = inject(I18nService);

  readonly year = new Date().getFullYear();

  readonly sections = computed(() => this.i18n.dict().privacy.sections as Array<{
    title: string;
    body: string;
  }>);
}
