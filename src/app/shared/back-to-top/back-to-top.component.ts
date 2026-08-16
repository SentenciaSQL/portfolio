import {DOCUMENT} from '@angular/common';
import {Component, DestroyRef, OnInit, inject, signal} from '@angular/core';
import {I18nService} from '../../core/i18n/i18n.service';
import {IconComponent} from '../icon/icon.component';

@Component({
  standalone: true,
  selector: 'app-back-to-top',
  imports: [IconComponent],
  template: `
    @if (visible()) {
      <button
        type="button"
        class="fixed bottom-5 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink-2/90 text-paper shadow-lg backdrop-blur-sm transition-colors hover:border-brass/50 hover:text-brass sm:bottom-8 sm:right-6"
        (click)="scrollTop()"
        [attr.aria-label]="i18n.t('common.backToTop')"
      >
        <app-icon name="arrow-up" />
      </button>
    }
  `,
})
export class BackToTopComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly i18n = inject(I18nService);
  readonly visible = signal(false);

  ngOnInit(): void {
    const onScroll = () => this.visible.set(this.document.documentElement.scrollTop > 480);
    this.document.defaultView?.addEventListener('scroll', onScroll, {passive: true});
    this.destroyRef.onDestroy(() =>
      this.document.defaultView?.removeEventListener('scroll', onScroll),
    );
  }

  scrollTop(): void {
    this.document.defaultView?.scrollTo({top: 0, behavior: 'smooth'});
  }
}
