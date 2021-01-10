import {NgModule} from '@angular/core';
import {ImageUploadComponent} from './image-upload.component';
import {SharedModule} from '../../shared.module';

const MATERIAL_MODULES = [];

@NgModule({
  declarations: [
    ImageUploadComponent,
  ],
  imports: [
    ...MATERIAL_MODULES,
    SharedModule
  ],
  exports: [
    ImageUploadComponent,
  ],
})
export class ImageUploadModule {
}
