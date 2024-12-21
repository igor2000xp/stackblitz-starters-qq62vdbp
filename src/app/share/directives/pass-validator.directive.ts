import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPassValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassValidatorDirective,
      multi: true,
    },
  ],
})
export class PassValidatorDirective implements Validator {
  change!: () => void;

  // constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    // throw new Error('Method not implemented.');
    console.log('control:', control);
    // this.change();
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
    this.change = fn;
  }
}
