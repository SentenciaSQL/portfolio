import { Component, input } from '@angular/core';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'download'
  | 'menu'
  | 'close'
  | 'arrow-up'
  | 'external'
  | 'mail'
  | 'globe'
  | 'arrow-right'
  | 'arrow-left'
  | 'android'
  | 'ios';

@Component({
  standalone: true,
  selector: 'app-icon',
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
    `,
  ],
  template: `
    <svg
      [attr.viewBox]="viewBox"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class="h-[1.15em] w-[1.15em]"
    >
      @switch (name()) {
        @case ('github') {
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        }
        @case ('linkedin') {
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        }
        @case ('download') {
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        }
        @case ('menu') {
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        }
        @case ('close') {
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        }
        @case ('arrow-up') {
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        }
        @case ('external') {
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        }
        @case ('mail') {
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          />
          <polyline points="22,6 12,13 2,6" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path
            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          />
        }
        @case ('arrow-right') {
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        }
        @case ('arrow-left') {
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        }
        @case ('android') {
          <path d="M5 9a7 7 0 0 1 14 0H5z" />
          <path d="M5 11v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5H5z" />
          <line x1="8" y1="18" x2="8" y2="21" />
          <line x1="16" y1="18" x2="16" y2="21" />
          <line x1="3" y1="11" x2="3" y2="16" />
          <line x1="21" y1="11" x2="21" y2="16" />
          <line x1="7" y1="3" x2="5.5" y2="1.5" />
          <line x1="17" y1="3" x2="18.5" y2="1.5" />
          <circle cx="9" cy="6" r=".5" />
          <circle cx="15" cy="6" r=".5" />
        }
        @case ('ios') {
          <path
            d="M16.5 13.2c0-2.1 1.7-3.2 1.8-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8s-1.7-.8-2.9-.8c-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.7 1.1 1.5 2.3 2.6 2.3 1-.1 1.4-.7 2.7-.7s1.6.7 2.8.7c1.2 0 1.9-1.1 2.6-2.2.8-1.2 1.1-2.4 1.1-2.5-.1 0-2.1-.8-2.1-3.9z"
          />
          <path
            d="M14.8 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.7-1 1.7-.9 2.6 1 0 2-.5 2.6-1.2z"
          />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  name = input.required<IconName>();

  readonly viewBox = '0 0 24 24';
}
