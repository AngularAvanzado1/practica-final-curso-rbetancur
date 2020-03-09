import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region/region.component';
import { HttpClientModule } from '@angular/common/http';
let UiModule = class UiModule {
};
UiModule = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        declarations: [RegionComponent],
        exports: [RegionComponent]
    })
], UiModule);
export { UiModule };
//# sourceMappingURL=ui.module.js.map