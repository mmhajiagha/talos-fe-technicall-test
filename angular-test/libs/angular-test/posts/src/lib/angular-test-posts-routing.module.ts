import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularTestPostsComponent} from './angular-test-posts.component';

const routes: Routes = [{
  path: '',
  component: AngularTestPostsComponent,
  children: [
    {
      path: 'list',
      loadChildren: () => import('./posts-list/posts-list.module').then(m => m.PostsListModule)
    },
    {
      path: 'add',
      loadChildren: () => import('./posts-add/posts-add.module').then(m => m.PostsAddModule)
    },
    {
      path: 'detail',
      loadChildren: () => import('./posts-detail/posts-detail.module').then(m => m.PostsDetailModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularTestPostsRoutingModule {
}
