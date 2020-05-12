import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';
import { TarjetaRopaComponent } from './tarjeta-ropa/tarjeta-ropa.component';

const routes: Routes = [
  {path:'', component:ViewChildComponent},
  {path:'products/:productId', component: TestComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'map',
    loadChildren: './map/map.module#MapPageModule'
  },
  {
    path: 'place-page',
    loadChildren: './place-page/place-page.module#PlacePageModule'
  },
  {
    path: 'user-stats',
    loadChildren: './user-stats/user-stats.module#UserStatsPageModule'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    ViewChildComponent,
    TestComponent,
    TarjetaRopaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  RouterModule.forChild(...)
    RouterModule.forRoot(
      routes,
      {enableTracing: true, useHash: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
