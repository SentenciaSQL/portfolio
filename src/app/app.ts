import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/seo/seo.service';
import { I18nService } from './core/i18n/i18n.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly seo = inject(SeoService);
  /** Eagerly construct i18n so `<html lang>` syncs on bootstrap. */
  private readonly i18n = inject(I18nService);

  ngOnInit(): void {
    this.seo.init();
  }
}
