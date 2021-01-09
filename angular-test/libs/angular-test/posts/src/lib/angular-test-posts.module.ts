import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularTestPostsComponent} from './angular-test-posts.component';
import {AngularTestPostsRoutingModule} from './angular-test-posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularTestPostsRoutingModule
  ],
  declarations: [
    AngularTestPostsComponent
  ]
})
export class AngularTestPostsModule {
}
