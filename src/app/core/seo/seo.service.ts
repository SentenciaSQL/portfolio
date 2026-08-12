import {DOCUMENT} from '@angular/common';
import {DestroyRef, inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  HOME_SEO,
  PageSeo,
  PERSON_JSON_LD,
  ROUTE_SEO,
  SITE_NAME,
  SITE_URL,
  WEBSITE_JSON_LD,
} from './seo.config';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  init(): void {
    this.ensureJsonLd();
    this.apply(HOME_SEO);

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        const path = event.urlAfterRedirects.split('?')[0].replace(/^\//, '');
        const page = ROUTE_SEO[path] ?? HOME_SEO;
        this.apply(page);
      });
  }

  apply(page: PageSeo): void {
    const url = `${SITE_URL}${page.path === '/' ? '/' : page.path}`;
    const keywords = page.keywords ?? DEFAULT_KEYWORDS;

    this.title.setTitle(page.title);

    this.updateTag('name', 'description', page.description);
    this.updateTag('name', 'keywords', keywords);
    this.updateTag('name', 'author', SITE_NAME);
    this.updateTag('name', 'robots', 'index,follow,max-image-preview:large');

    this.updateTag('property', 'og:type', 'website');
    this.updateTag('property', 'og:site_name', SITE_NAME);
    this.updateTag('property', 'og:title', page.title);
    this.updateTag('property', 'og:description', page.description);
    this.updateTag('property', 'og:url', url);
    this.updateTag('property', 'og:image', DEFAULT_OG_IMAGE);
    this.updateTag('property', 'og:image:alt', `${SITE_NAME} — Senior Software Engineer`);
    this.updateTag('property', 'og:locale', 'en_US');
    this.updateTag('property', 'og:locale:alternate', 'es_DO');

    this.updateTag('name', 'twitter:card', 'summary_large_image');
    this.updateTag('name', 'twitter:title', page.title);
    this.updateTag('name', 'twitter:description', page.description);
    this.updateTag('name', 'twitter:image', DEFAULT_OG_IMAGE);

    this.setCanonical(url);
  }

  setLanguage(lang: 'en' | 'es'): void {
    this.document.documentElement.lang = lang;
  }

  private updateTag(
    attr: 'name' | 'property',
    key: string,
    content: string,
  ): void {
    const selector = `${attr}="${key}"`;
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({[attr]: key, content});
      return;
    }
    this.meta.addTag({[attr]: key, content});
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private ensureJsonLd(): void {
    this.upsertJsonLd('seo-person-jsonld', PERSON_JSON_LD);
    this.upsertJsonLd('seo-website-jsonld', WEBSITE_JSON_LD);
  }

  private upsertJsonLd(id: string, data: Record<string, unknown>): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
