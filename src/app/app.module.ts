/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2016-12-30T05:15:04+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.module.ts
* @Last modified by:   tushar
* @Last modified time: 2016-12-30T05:34:23+05:30
*/



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {TemplateDrivenForm} from './app.templatedrivenform';
import {ModelDrivenForm} from './app.modeldrivenform';
import {Formvalidation} from './app.formvalidations';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenForm,
    ModelDrivenForm,
    Formvalidation,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
