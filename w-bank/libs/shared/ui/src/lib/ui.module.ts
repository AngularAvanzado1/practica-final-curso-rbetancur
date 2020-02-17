import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region/region.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RegionComponent],
  exports: [RegionComponent]
})
export class UiModule {}
