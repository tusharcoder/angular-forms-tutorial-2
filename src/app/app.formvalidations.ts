/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2016-12-30T05:29:28+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.formvalidations.ts
* @Last modified by:   tushar
* @Last modified time: 2016-12-30T10:57:08+05:30
*/
import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector:'form-validation',
  template:`<div class="container-fluid">
    <div class="text-center">
      <h1>Model Driven(Reactive) Registration form</h1>
    </div>
    <div class="jumbotron">
      <form [formGroup]="modelDrivenForm" (ngSubmit)='submitForm(modelDrivenForm.value)' >
        <div class="form-group">
          <label for="emailInput1">Email:</label>
          <input type="text" name="email" class="form-control" id="emailInput1" placeholder="user@somewhere.com" [formControl]="modelDrivenForm.controls['email']">
        </div>

        <div class="form-group">
          <label for="passwordInput1">Password:</label>
          <input type="password" name="password" class="form-control" id="passwordInput1" placeholder="password" [formControl]="modelDrivenForm.controls['password']">
        </div>

        <div class="form-group">
          <label for="dateInput1"></label>
          <input type="date" name="dob" class="form-control" id="dateInput1" placeholder="Date of Birth:" [formControl]="modelDrivenForm.controls['dob']">
        </div>

        <div class="form-group">
          <label>Gender</label>
          <div class="radio">
            <label>
              <input type="radio" name="gender" id="radioInput1" value="Male" [formControl]="modelDrivenForm.controls['gender']">Male
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="gender" id="radioInput2" value="Female" [formControl]="modelDrivenForm.controls['gender']">Female
            </label>
          </div>
        </div>

        <div class="form-group">
          <div class="checkbox-inline">
            <label>
              <input type="checkbox" name="newsletter" id="checkboxInput1" [formControl]="modelDrivenForm.controls['newsletter']"><label for="checkboxInput1">Interested in newsletter, updates</label>
            </label>
          </div>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary" name="button">Submit</button>
        </div>

      </form>
    </div>
  </div>
`
})

export class Formvalidation{
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
    console.log('Model based reactive form with Validations');
    console.log(value);
  }
}
