import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgAsyncLoaderDirective } from './directive/img-async-loader.directive';
import { TestDirectivaComponent } from './test-directiva/test-directiva.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgAsyncLoaderDirective,
    TestDirectivaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
