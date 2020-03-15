import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegionsComponent } from './manage-regions.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RouterTestingModule } from '@angular/router/testing';

import { WorldBankService } from '@w-bank/data';

describe('GIVEN: an WorldBankService', () => {

});

describe('GIVEN: an ManageRegionsComponent declared in AppModule', () => {
  describe('WHEN: the AppModule is compiled', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ManageRegionsComponent ],
        imports : [
          HttpClientModule,
          RouterTestingModule,
          TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
          })
        ],
      }).compileComponents();
    }));

    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(ManageRegionsComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`THEN: should render 'region.title' in a H1 tag`, () => {
      const fixture = TestBed.createComponent(ManageRegionsComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('region.title');
    });

    it(`THEN: should have defined a function called 'obtainContientalRegions'`, () => {
      const fixture = TestBed.createComponent(ManageRegionsComponent);
      fixture.detectChanges();
      const app = fixture.debugElement.componentInstance;
      expect(app.obtainContientalRegions).toBeDefined();
    });

    it(`THEN: should have defined a function called 'viewRegion'`, () => {
      const fixture = TestBed.createComponent(ManageRegionsComponent);
      fixture.detectChanges();
      const app = fixture.debugElement.componentInstance;
      expect(app.viewRegion).toBeDefined();
    });

    it(`THEN: should have declared a property 'regions'`, () => {
      const fixture = TestBed.createComponent(ManageRegionsComponent);
      fixture.detectChanges();
      const app = fixture.debugElement.componentInstance;
      expect(app.regions).toBeDefined();
      expect(app.regions).not.toBeNull();
      expect(app.regions).toHaveLength(0);
    });

  });

});

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
