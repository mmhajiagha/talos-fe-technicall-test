import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostsAddComponent} from './posts-add.component';

const routes: Routes = [
  {
    path: '',
    component: PostsAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsAddRoutingModule {
}
