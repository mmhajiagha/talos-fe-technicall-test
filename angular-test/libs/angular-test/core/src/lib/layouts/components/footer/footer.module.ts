import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer.component';
import {SharedModule} from '../../../shared.module';

const MATERIAL_MODULES = [];

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    RouterModule,
    ...MATERIAL_MODULES,
    SharedModule
  ],
  exports: [
    FooterComponent,
  ],
})
export class FooterModule {
}
