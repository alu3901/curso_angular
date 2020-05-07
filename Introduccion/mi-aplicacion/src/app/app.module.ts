import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';

const appRoutes: Routes = [
  {path: 'micomponente', component: MicomponenteComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
