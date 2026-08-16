import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SeoService} from './core/seo/seo.service';
import {I18nService} from './core/i18n/i18n.service';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {BackToTopComponent} from './shared/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BackToTopComponent],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly seo = inject(SeoService);
  /** Eagerly construct i18n so `<html lang>` syncs on bootstrap. */
  private readonly i18n = inject(I18nService);

  ngOnInit(): void {
    this.seo.init();
  }
}
