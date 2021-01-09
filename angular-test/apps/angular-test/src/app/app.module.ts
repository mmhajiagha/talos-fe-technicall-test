import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AngularTestCoreModule, TranslateHttpLoaderFactory} from '@angular-test/angular-test/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {QuicklinkModule} from 'ngx-quicklink';
import {AppRoutingModule} from './app.routing.module';

const MATERIAL_MODULES = [
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuicklinkModule,
    ...MATERIAL_MODULES,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AngularTestCoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
