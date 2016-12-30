/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2016-12-30T05:25:50+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.modeldrivenform.ts
* @Last modified by:   tushar
* @Last modified time: 2016-12-30T10:54:14+05:30
*/
import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector:'model-driven',
  templateUrl:`./app.modeldrivenform.html`
})

export class ModelDrivenForm{
  modelDrivenForm:any
  constructor(fb:FormBuilder){
    this.modelDrivenForm=fb.group({
      'email':'',
      'password':'',
      'gender':'',
      'dob':'',
      'newsletter':false,
    });
  }

  submitForm(value:any):void{
    console.log('Model based reactive form');
    console.log(value);
  }
}
