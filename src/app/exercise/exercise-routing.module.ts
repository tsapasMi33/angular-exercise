import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChronometerComponent} from "./chronometer/chronometer.component";
import {ShoppingComponent} from "./shopping/shopping.component";

const routes: Routes = [
  {path: "timer", component:ChronometerComponent},
  {path: "shopping", component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
