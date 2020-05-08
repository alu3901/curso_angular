import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';
import { ListItemPickerComponent } from './list-item-picker/list-item-picker.component';

const appRoutes: Routes = [
  {path: 'micomponente', component: MicomponenteComponent},
  {path: 'componentedos', component: ComponenteDosComponent},
  {path: 'list-item-picker', component: ListItemPickerComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    ComponenteDosComponent,
    ListItemPickerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
