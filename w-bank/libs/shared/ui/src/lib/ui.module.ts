import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region/region.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  declarations: [RegionComponent, CountryComponent],
  exports: [RegionComponent]
})
export class UiModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/region/i18n/', '.json');
}
