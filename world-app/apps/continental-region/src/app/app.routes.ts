import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ManageRegionsComponent } from './core/shell/main-content/manage-regions.component';
import { RegionComponent, CountryComponent } from '@w-bank/ui';

const APP_ROUTES: Routes=[
  { path: 'home', component: ManageRegionsComponent },
  { path: 'region/:code', component: RegionComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
