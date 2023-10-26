import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { ChronometerComponent } from './chronometer/chronometer.component';
import {TimerPipe} from "./pipes/timer.pipe";


@NgModule({
  declarations: [
    ChronometerComponent,
    TimerPipe
  ],
  imports: [
    CommonModule,
    ExerciseRoutingModule
  ]
})
export class ExerciseModule { }
