import {DOCUMENT} from '@angular/common';
import {computed, inject, Injectable, signal} from '@angular/core';
import {Lang, MESSAGES} from './messages';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private _lang = signal<Lang>(this.loadLang());

  lang = computed(() => this._lang());
  dict = computed(() => MESSAGES[this._lang()]);

  constructor() {
    this.syncDocumentLang(this._lang());
  }

  setLang(lang: Lang) {
    this._lang.set(lang);
    localStorage.setItem('lang', lang);
    this.syncDocumentLang(lang);
  }

  toggle() {
    this.setLang(this._lang() === 'en' ? 'es' : 'en');
  }

  t(path: string): string {
    const keys = path.split('.');
    let cur: any = this.dict();
    for (const k of keys) cur = cur?.[k];
    return typeof cur === 'string' ? cur : path;
  }

  private syncDocumentLang(lang: Lang): void {
    this.document.documentElement.lang = lang;
  }

  private loadLang(): Lang {
    const saved = (localStorage.getItem('lang') as Lang | null);
    return saved === 'es' || saved === 'en' ? saved : 'en';
  }
}
