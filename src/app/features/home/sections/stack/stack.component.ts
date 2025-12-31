import {Component, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {I18nService} from '../../../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-stack',
  imports: [MatCardModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {
  i18n = inject(I18nService);
}
