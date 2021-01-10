import {NgModule} from '@angular/core';

import {PostsAddRoutingModule} from './posts-add-routing.module';
import {PostsAddComponent} from './posts-add.component';
import {DirectivesModule, ImageUploadModule, SharedModule} from '@angular-test/angular-test/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatIconModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [PostsAddComponent],
  imports: [
    PostsAddRoutingModule,
    SharedModule,
    DirectivesModule,
    ImageUploadModule,
    ...MATERIAL_MODULES
  ]
})
export class PostsAddModule {
}
