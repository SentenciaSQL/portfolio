import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SeoService } from './core/seo/seo.service';
import { I18nService } from './core/i18n/i18n.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BackToTopComponent],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  /** Eagerly construct i18n so `<html lang>` syncs on bootstrap. */
  private readonly i18n = inject(I18nService);

  readonly isFintrack = signal(false);

  ngOnInit(): void {
    this.seo.init();
    this.syncLayout(this.router.url);
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.syncLayout(event.urlAfterRedirects));
  }

  private syncLayout(url: string): void {
    const path = url.split(/[?#]/, 1)[0];
    this.isFintrack.set(path === '/fintrack' || path.startsWith('/fintrack/'));
  }
}
