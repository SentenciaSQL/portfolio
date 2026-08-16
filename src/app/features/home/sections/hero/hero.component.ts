import {Component, inject} from '@angular/core';
import {I18nService} from '../../../../core/i18n/i18n.service';
import {HERO_TECHS, SITE} from '../../../../core/site/site.constants';
import {IconComponent} from '../../../../shared/icon/icon.component';
import {RevealDirective} from '../../../../shared/reveal/reveal.directive';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [IconComponent, RevealDirective],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly i18n = inject(I18nService);
  readonly site = SITE;
  readonly techs = HERO_TECHS;

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
