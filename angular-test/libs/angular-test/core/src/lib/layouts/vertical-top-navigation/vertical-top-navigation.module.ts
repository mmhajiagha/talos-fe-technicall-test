import {NgModule} from '@angular/core';
import {VerticalTopNavigationComponent} from './vertical-top-navigation.component';
import {CommonModule} from '@angular/common';
import {ToolbarModule} from '../components';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule
  ],
  declarations: [
    VerticalTopNavigationComponent
  ],
  exports: [
    VerticalTopNavigationComponent
  ]
})
export class VerticalTopNavigationModule {
}
