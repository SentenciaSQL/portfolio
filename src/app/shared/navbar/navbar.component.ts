import {DOCUMENT} from '@angular/common';
import {
  Component,
  DestroyRef,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {I18nService} from '../../core/i18n/i18n.service';
import {NAV_ITEMS, SITE} from '../../core/site/site.constants';
import {IconComponent, IconName} from '../icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink, IconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly i18n = inject(I18nService);
  readonly site = SITE;
  readonly navItems = NAV_ITEMS;

  readonly menuOpen = signal(false);
  readonly active = signal('home');
  readonly isHome = signal(true);

  private sectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.syncRoute(this.router.url);
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.syncRoute(event.urlAfterRedirects));
  }

  go(id: string): void {
    this.closeMenu();
    if (this.isHome()) {
      this.document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
      this.document.defaultView?.history.replaceState(null, '', `/#${id}`);
      this.active.set(id);
      return;
    }
    void this.router.navigate(['/'], {fragment: id});
  }

  menuIcon(): IconName {
    return this.menuOpen() ? 'close' : 'menu';
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  private syncRoute(url: string): void {
    const path = url.split('#')[0].split('?')[0];
    const home = path === '/' || path === '';
    this.isHome.set(home);
    this.closeMenu();

    if (!home) {
      this.sectionObserver?.disconnect();
      this.active.set('');
      return;
    }

    queueMicrotask(() => this.observeSections());
  }

  private observeSections(): void {
    this.sectionObserver?.disconnect();
    const ids = this.navItems.map((item) => item.id);

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          this.active.set(visible.target.id);
        }
      },
      {rootMargin: '-28% 0px -58% 0px', threshold: [0.15, 0.35, 0.6]},
    );

    for (const id of ids) {
      const el = this.document.getElementById(id);
      if (el) {
        this.sectionObserver.observe(el);
      }
    }
  }
}
