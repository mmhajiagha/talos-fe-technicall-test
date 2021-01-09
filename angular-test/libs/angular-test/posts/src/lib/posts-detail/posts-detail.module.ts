import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsDetailRoutingModule } from './posts-detail-routing.module';
import { PostsDetailComponent } from './posts-detail.component';


@NgModule({
  declarations: [PostsDetailComponent],
  imports: [
    CommonModule,
    PostsDetailRoutingModule
  ]
})
export class PostsDetailModule { }
