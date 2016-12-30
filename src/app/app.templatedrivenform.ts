/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2016-12-30T05:22:22+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.templatedrivenform.ts
* @Last modified by:   tushar
* @Last modified time: 2016-12-30T09:52:22+05:30
*/
import {Component} from '@angular/core';

@Component({
  selector:'template-driven',
  template:`<div class="container-fluid">
  <div class="text-center">
    <h1>Template Driven form</h1>
  </div>
  <div class="jumbotron">
    <form #form="ngForm" (ngSubmit)='submitForm(form.value)'>
      <div class="form-group">
        <label for="emailInput1">Email:</label>
        <input type="text" name="email" class="form-control" id="emailInput1" placeholder="user@somewhere.com" ngModel required>
      </div>

      <div class="form-group">
        <label for="passwordInput1">Password:</label>
        <input type="text" name="password" class="form-control" id="passwordInput1" placeholder="password" ngModel required>
      </div>

      <div class="form-group">
        <label for="dateInput1"></label>
        <input type="date" name="dob" class="form-control" id="dateInput1" placeholder="Date of Birth:" ngModel required>
      </div>

      <div class="form-group">
        <label>Gender</label>
        <div class="alert alert-danger">
          *Select your Gender
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="gender" id="radioInput1" value="Male" ngModel>Male
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="gender" id="radioInput2" value="Female" ngModel>Female
          </label>
        </div>
      </div>

      <div class="form-group">
        <div class="checkbox-inline">
          <label>
            <input type="checkbox" name="newsletter" id="checkboxInput1" ngModel><label for="checkboxInput1">Interested in newsletter, updates</label>
          </label>
        </div>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary" name="button">Submit</button>
      </div>

    </form>
  </div>
</div>`
})

export class TemplateDrivenForm{
  submitForm(value:any):void{
    console.log('template base form: ');
    console.log(value);
  }
}
