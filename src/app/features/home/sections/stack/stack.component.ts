import {Component, computed, inject} from '@angular/core';
import {I18nService} from '../../../../core/i18n/i18n.service';
import {STACK_CATEGORIES} from '../../../../core/stack/stack.data';
import {RevealDirective} from '../../../../shared/reveal/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-stack',
  imports: [RevealDirective],
  templateUrl: './stack.component.html',
})
export class StackComponent {
  readonly i18n = inject(I18nService);
  readonly categories = STACK_CATEGORIES;
  readonly architecture = computed(() => this.i18n.dict().stack.architecture as string[]);
}
