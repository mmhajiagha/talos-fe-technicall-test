import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CreateEntityButtonComponent} from './create-entity-button.component';
import {SharedModule} from '../../shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    CreateEntityButtonComponent,
  ],
  imports: [
    RouterModule,
    ...MATERIAL_MODULES,
    SharedModule
  ],
  exports: [
    CreateEntityButtonComponent,
  ],
})
export class CreateEntityButtonModule {
}
