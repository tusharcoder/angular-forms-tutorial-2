/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2016-12-30T05:29:28+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.formvalidations.ts
* @Last modified by:   tushar
* @Last modified time: 2016-12-30T11:14:58+05:30
*/
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';

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
        <div class="alert alert-danger" *ngIf="modelDrivenForm.controls['email'].hasError('required')&&modelDrivenForm.controls['email'].touched">
        *Email is required
        </div>
        <div class="alert alert-danger" *ngIf="modelDrivenForm.controls['email'].hasError('validateEmail')&&modelDrivenForm.controls['email'].touched">
        *Valid Email is required
        </div>
        <div class="form-group">
          <label for="passwordInput1">Password:</label>
          <input type="password" name="password" class="form-control" id="passwordInput1" placeholder="password" [formControl]="modelDrivenForm.controls['password']">
        </div>

        <div class="alert alert-danger">
        *Password is required
        </div>
        <div class="form-group">
          <label for="dateInput1"></label>
          <input type="date" name="dob" class="form-control" id="dateInput1" placeholder="Date of Birth:" [formControl]="modelDrivenForm.controls['dob']">
        </div>

        <div class="alert alert-danger">
        *Date of Birth is required is required
        </div>
        <div class="form-group">
          <label>Gender</label>

          <div class="alert alert-danger">
          *Please select your Gender
          </div>
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
      'email':['',Validators.compose([Validators.required,this.validateEmail])],
      'password':['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5)])],
      'gender':['',Validators.required],
      'dob':['', Validators.required],
      'newsletter':false,
    });
  }

  submitForm(value:any):void{
    console.log('Model based reactive form with Validations');
    console.log(value);
  }

  validateEmail(c: FormControl) {
   let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   return EMAIL_REGEXP.test(c.value) ? null : {
     validateEmail: {
       valid: false
     }
   }
 }
}
