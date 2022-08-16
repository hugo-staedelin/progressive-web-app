import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./home/menu/menu.component";
import {MediaComponent} from "./features/audio-video/media.component";

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'media', component: MediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
