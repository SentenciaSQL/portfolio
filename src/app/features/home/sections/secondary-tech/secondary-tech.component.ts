import {Component, inject} from '@angular/core';
import {I18nService} from '../../../../core/i18n/i18n.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-secondary-tech',
  imports: [MatCardModule],
  templateUrl: './secondary-tech.component.html',
  styleUrl: './secondary-tech.component.css',
})
export class SecondaryTechComponent {
  i18n = inject(I18nService);
}
