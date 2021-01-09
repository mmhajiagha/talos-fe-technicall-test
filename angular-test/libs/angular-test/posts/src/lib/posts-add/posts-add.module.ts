import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsAddRoutingModule } from './posts-add-routing.module';
import { PostsAddComponent } from './posts-add.component';


@NgModule({
  declarations: [PostsAddComponent],
  imports: [
    CommonModule,
    PostsAddRoutingModule
  ]
})
export class PostsAddModule { }
