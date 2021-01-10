import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxTranslateService} from './services';
import {VerticalTopNavigationModule} from './layouts';

const LAYOUTS = [
  VerticalTopNavigationModule
];

@NgModule({
  imports: [
    CommonModule,
    ...LAYOUTS
  ],
  exports: [
    ...LAYOUTS
  ],
  providers: [
    NgxTranslateService
  ]
})
export class AngularTestCoreModule {
}
