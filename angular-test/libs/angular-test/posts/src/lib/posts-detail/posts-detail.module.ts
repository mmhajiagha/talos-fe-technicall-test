import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsDetailRoutingModule} from './posts-detail-routing.module';
import {PostsDetailComponent} from './posts-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {CreateEntityButtonModule, SharedModule} from '@angular-test/angular-test/core';

const MATERIAL_MODULE = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule
];

@NgModule({
  declarations: [PostsDetailComponent],
  imports: [
    CommonModule,
    PostsDetailRoutingModule,
    ...MATERIAL_MODULE,
    SharedModule,
    CreateEntityButtonModule
  ]
})
export class PostsDetailModule {
}
