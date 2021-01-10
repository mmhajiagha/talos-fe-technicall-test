import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsListRoutingModule} from './posts-list-routing.module';
import {PostsListComponent} from './posts-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CreateEntityButtonModule, SharedModule} from '@angular-test/angular-test/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    ...MATERIAL_MODULES,
    SharedModule,
    CreateEntityButtonModule
  ]
})
export class PostsListModule {
}
