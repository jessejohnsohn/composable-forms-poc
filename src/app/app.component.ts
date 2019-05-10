import { Component, ViewChildren,ViewChild, AfterViewInit, Injector, QueryList, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName, FormControl, Validators, NG_VALUE_ACCESSOR, FormControlDirective, DefaultValueAccessor } from '@angular/forms';
import { Address, AddressComponent } from './address/address.component';

// This is a type I carry around for type-safety on my forms. Ignore for now.
export type FormConfig<T extends object = {}> = {
	[K in keyof T]: any;
};

interface Employee {
  firstName: string,
  lastName: string,
  address: Address
}

const EMPLOYEE_FORM_CONFIG: FormConfig<Employee> = {
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  address: ''
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  form = this.fb.group(EMPLOYEE_FORM_CONFIG)
  
  constructor(private readonly fb: FormBuilder) {}

  save() {
    // When I click "save" I want all of the fields that have errors to highlight in red with the appropriate error message. My assumption was I could programatically mark the address FormControl as "touched" and then hook into that touch() function call inside the Address component.

  }

}
