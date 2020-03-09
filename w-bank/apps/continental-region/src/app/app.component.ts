import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'wb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'continental-region';
  selectedLanguage = navigator.language;


  constructor(private translateService: TranslateService) {

    this.selectedLanguage = navigator.language;
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  toogleLanguage(lang: string) {
      this.translateService.use(lang);
  }
}
