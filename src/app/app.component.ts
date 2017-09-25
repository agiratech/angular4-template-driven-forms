import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private count = 1;

  phoneNumberIds: number[] = [1];

  @ViewChild('validateForm')
  private validateForm: NgForm;

  constructor() {
  }


  register(validateForm: NgForm) {
    console.log('Registration successful.');
    console.log(validateForm.value);
    alert("Hi "+validateForm.value.name+" you information are valid.")
  }
}
