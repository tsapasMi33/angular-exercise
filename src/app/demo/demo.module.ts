import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo1Component } from './demo1/demo1.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Demo1Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
