import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgAsyncLoaderDirective } from './directive/img-async-loader.directive';
import { TestDirectivaComponent } from './test-directiva/test-directiva.component';
import { TruncateTextPipe } from './pipe/truncate-text.pipe';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestReactiveFormsComponent } from './test-reactive-forms/test-reactive-forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImgAsyncLoaderDirective,
    TestDirectivaComponent,
    TruncateTextPipe,
    TestPipeComponent,
    TestReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
