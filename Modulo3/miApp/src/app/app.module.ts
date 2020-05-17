import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgAsyncLoaderDirective } from './directive/img-async-loader.directive';
import { TestDirectivaComponent } from './test-directiva/test-directiva.component';
import { TruncateTextPipe } from './truncate-text.pipe';
import { TestPipeComponent } from './test-pipe/test-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgAsyncLoaderDirective,
    TestDirectivaComponent,
    TruncateTextPipe,
    TestPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
