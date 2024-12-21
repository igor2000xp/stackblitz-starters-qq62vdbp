import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { NameValidator } from './name-checker';

@Directive({
  selector: '[appNamelidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidatorDirective,
      multi: true,
    },
  ],
})
export class NameValidatorDirective implements Validator {
  change!: () => void;
  validate(control: AbstractControl): ValidationErrors | null {
    // this.change();
    const messages = NameValidator.allNameChecks(control);

    return String(messages) === '' ? null : { NameValidatorDirective: messages };
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.change = fn;
  }
}
