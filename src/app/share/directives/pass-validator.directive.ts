import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { PassChecker } from './pass-checker';

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

  validate(control: AbstractControl): ValidationErrors | null {
    const messages = PassChecker.allPassChecks(control);
    // this.change();
    return String(messages) === '' ? null : { PassValidatorDirective: messages };
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.change = fn;
  }
}
