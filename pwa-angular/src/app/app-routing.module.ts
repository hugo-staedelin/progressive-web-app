import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./home/menu/menu.component";
import {MediaComponent} from "./features/audio-video/media.component";
import {GeolocationComponent} from "./features/geolocation/geolocation.component";

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'media', component: MediaComponent},
  {path: 'geolocation', component: GeolocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
