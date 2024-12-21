import { AbstractControl } from '@angular/forms';

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 20;
const NAME_REQUIRED_MESSAGE = 'Name is required';
const NAME_LENGTH_MESSAGE = 'Name there must be a minimum of 2 and a maximum of 20 symbols.';
const NAME_LATIN_MESSAGE = 'The first letter in the name must be capitalized, name must contain only latin letters';

export class NameValidator {
  static requireCheck(control: AbstractControl): boolean {
    return control.value ? true : false;
  }

  static lengthCheck(control: AbstractControl): boolean {
    if (!control.value) return false;
    const check = control.value.length > MIN_NAME_LENGTH && control.value.length < MAX_NAME_LENGTH;
    return check ? true : false;
  }
  /* Explanation of the updated regular expression:
      ^[A-Z] asserts that the string starts with an uppercase letter.
      [a-z]+$ asserts that the rest of the string consists of one or more lowercase letters and ends at the end of the string
  */
  static latinCheck(control: AbstractControl): boolean | null {
    const regex = new RegExp('^[A-Z][a-z]+$');
    return regex.test(control.value) ? true : false;
  }

  static allNameChecks(control: AbstractControl): object[] {
    const errorList: object[] = [];
    if (!NameValidator.requireCheck(control)) {
      errorList.push({ message: NAME_REQUIRED_MESSAGE });
    }
    if (!NameValidator.lengthCheck(control)) errorList.push({ message: NAME_LENGTH_MESSAGE });
    if (!NameValidator.latinCheck(control)) errorList.push({ message: NAME_LATIN_MESSAGE });

    return errorList;
  }
}
