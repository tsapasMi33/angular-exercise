import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChronometerComponent} from "./chronometer/chronometer.component";

const routes: Routes = [
  {path: "timer", component:ChronometerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
