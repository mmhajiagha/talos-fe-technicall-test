import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxTranslateService} from './services';
import {VerticalTopNavigationModule} from './layouts';
import {DirectivesModule} from './directives';

const LAYOUTS = [
  VerticalTopNavigationModule
];

@NgModule({
  imports: [
    CommonModule,
    ...LAYOUTS
  ],
  exports: [
    ...LAYOUTS,
    DirectivesModule
  ],
  providers: [
    NgxTranslateService,
    DirectivesModule
  ]
})
export class AngularTestCoreModule {
}
