import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, Validators, NgControl, FormControl, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormConfig } from '../app.component';

export interface Address {
  address1: string,
  address2: string,
  city: string,
  state: string,
  zip: string
}

export const ADDRESS_FORM_CONFIG: FormConfig<Address> = {
  address1: ['', Validators.required],
  address2: ['', Validators.required],
  city: ['', Validators.required],
  state: ['', Validators.required],
  zip: ['']
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements ControlValueAccessor, OnInit {

  touched = false;

  form = this.fb.group(ADDRESS_FORM_CONFIG);

  constructor(
    public ngControl: NgControl,
    private readonly fb: FormBuilder) {
      ngControl.valueAccessor = this;
    }

  ngOnInit() {
    const control = this.ngControl.control;
    control.setValidators(this.validate);
    control.updateValueAndValidity();
  }

	writeValue(value: Address): void {
		if (value) {
			this.form.setValue(value, { emitEvent: false });
		}
	}

	registerOnChange(fn: (value: Address) => void) {
		this.form.valueChanges.subscribe(fn);
	}

	registerOnTouched(fn: () => void) {
		this.onTouched = () => console.log("hello");//Object.keys(this.form.controls).map(k => this.form.controls[k].markAsTouched());
	}

  validate = (): ValidationErrors => { 
    const errors = this.collectErrors(this.form);
    return errors && errors.length > 0 ? errors : null;
  }

	onTouched: () => void = () => {};

  collectErrors(ctrl: FormGroup): ValidationErrors {
    return Object.keys(ctrl.controls).reduce((a, k) => ctrl.controls[k].errors ? a.concat(ctrl.controls[k].errors) : a, []) as ValidationErrors;
  }
}