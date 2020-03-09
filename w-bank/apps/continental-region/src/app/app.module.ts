import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@w-bank/ui';
import { ManageRegionsComponent } from './core/shell/main-content/manage-regions.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [AppComponent, ManageRegionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UiModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

