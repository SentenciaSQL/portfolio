import {Component, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {I18nService} from '../../../../core/i18n/i18n.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  i18n = inject(I18nService);
}
