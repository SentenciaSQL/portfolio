import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideRouter, Router, RouterOutlet } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';
import { SeoService } from './seo.service';
import {
  FINTRACK_SEO,
  FINTRACK_PRIVACY_SEO,
  FINTRACK_SUPPORT_SEO,
  HOME_SEO,
  PRIVACY_SEO,
  PROJECTS_SEO,
  SITE_URL,
} from './seo.config';
import { Component } from '@angular/core';

@Component({ standalone: true, template: '' })
class StubHomeComponent {}

@Component({ standalone: true, template: '' })
class StubProjectsComponent {}

@Component({ standalone: true, template: '' })
class StubPrivacyComponent {}

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
class StubFintrackShellComponent {}

describe('SeoService', () => {
  let service: SeoService;
  let title: Title;
  let meta: Meta;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([
          { path: '', component: StubHomeComponent },
          { path: 'projects', component: StubProjectsComponent },
          { path: 'privacy', component: StubPrivacyComponent },
          {
            path: 'fintrack',
            component: StubFintrackShellComponent,
            children: [
              { path: '', component: StubHomeComponent },
              { path: 'support', component: StubPrivacyComponent },
              { path: 'privacy', component: StubPrivacyComponent },
            ],
          },
        ]),
        SeoService,
      ],
    }).compileComponents();

    service = TestBed.inject(SeoService);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
    router = TestBed.inject(Router);
    service.init();
  });

  it('applies home SEO by default', () => {
    expect(title.getTitle()).toBe(HOME_SEO.title);
    expect(meta.getTag('name="description"')?.content).toBe(
      HOME_SEO.description,
    );
    expect(meta.getTag('property="og:url"')?.content).toBe(`${SITE_URL}/`);
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/`);
    expect(document.getElementById('seo-person-jsonld')).toBeTruthy();
    expect(document.getElementById('seo-website-jsonld')).toBeTruthy();
  });

  it('updates SEO when navigating to projects', async () => {
    await router.navigateByUrl('/projects');

    expect(title.getTitle()).toBe(PROJECTS_SEO.title);
    expect(meta.getTag('name="description"')?.content).toBe(
      PROJECTS_SEO.description,
    );
    expect(meta.getTag('property="og:url"')?.content).toBe(
      `${SITE_URL}/projects`,
    );
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/projects`);
  });

  it('updates SEO when navigating to privacy', async () => {
    await router.navigateByUrl('/privacy');

    expect(title.getTitle()).toBe(PRIVACY_SEO.title);
    expect(meta.getTag('name="description"')?.content).toBe(
      PRIVACY_SEO.description,
    );
    expect(meta.getTag('property="og:url"')?.content).toBe(
      `${SITE_URL}/privacy`,
    );
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/privacy`);
  });

  it('updates SEO when navigating to FinTrack marketing', async () => {
    await router.navigateByUrl('/fintrack');

    expect(title.getTitle()).toBe(FINTRACK_SEO.title);
    expect(meta.getTag('name="description"')?.content).toBe(
      FINTRACK_SEO.description,
    );
    expect(meta.getTag('property="og:url"')?.content).toBe(
      `${SITE_URL}/fintrack`,
    );
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/fintrack`);
  });

  it('updates SEO when navigating to FinTrack support', async () => {
    await router.navigateByUrl('/fintrack/support');

    expect(title.getTitle()).toBe(FINTRACK_SUPPORT_SEO.title);
    expect(meta.getTag('name="description"')?.content).toBe(
      FINTRACK_SUPPORT_SEO.description,
    );
    expect(meta.getTag('property="og:url"')?.content).toBe(
      `${SITE_URL}/fintrack/support`,
    );
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/fintrack/support`);
  });

  it('updates SEO when navigating to FinTrack privacy', async () => {
    await router.navigateByUrl('/fintrack/privacy');

    expect(title.getTitle()).toBe(FINTRACK_PRIVACY_SEO.title);
    expect(meta.getTag('name="description"')?.content).toBe(
      FINTRACK_PRIVACY_SEO.description,
    );
    expect(meta.getTag('property="og:url"')?.content).toBe(
      `${SITE_URL}/fintrack/privacy`,
    );
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/fintrack/privacy`);
  });

  it('sets the document language', () => {
    service.setLanguage('es');
    expect(document.documentElement.lang).toBe('es');
    service.setLanguage('en');
    expect(document.documentElement.lang).toBe('en');
  });
});
