import {SITE} from './site.constants';

export function openEmail(event?: Event): void {
  event?.preventDefault();

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(SITE.email)}`;
  window.location.assign(SITE.mailto);

  window.setTimeout(() => {
    if (document.hasFocus()) {
      window.open(gmail, '_blank', 'noopener,noreferrer');
    }
  }, 700);
}
