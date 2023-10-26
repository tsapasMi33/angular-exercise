import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./layout/home/home.component";
import {Page404Component} from "./layout/page404/page404.component";

const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: "demo", loadChildren: () => import('./demo/demo.module').then(r => r.DemoModule)},
  {path: "exercises", loadChildren: () => import('./exercise/exercise.module').then(r => r.ExerciseModule)},
  {path: "404", component: Page404Component},
  {path: "**", redirectTo: "404"}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
