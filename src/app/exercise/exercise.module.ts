import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { ChronometerComponent } from './chronometer/chronometer.component';
import {TimerPipe} from "./pipes/timer.pipe";
import { ShoppingComponent } from './shopping/shopping.component';
import { ListComponent } from './shopping/list/list.component';
import { CartComponent } from './shopping/cart/cart.component';


@NgModule({
  declarations: [
    ChronometerComponent,
    TimerPipe,
    ShoppingComponent,
    ListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ExerciseRoutingModule
  ]
})
export class ExerciseModule { }
