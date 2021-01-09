import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('@angular-test/angular-test/posts').then(m => m.AngularTestPostsModule),
    data: {},
  },
];

const routerConfig: ExtraOptions = {
  initialNavigation: 'enabled',
  preloadingStrategy: QuicklinkStrategy,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
