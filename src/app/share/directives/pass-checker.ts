import { AbstractControl } from '@angular/forms';

const PASSWORD_LENTGH = 6;
const PASSWORD_REQUIRED_MESSAGE = 'Password is required';
const PASSWORD_LENTGH_MESSAGE = 'Password must contain at least 6 symbols';
const PASSWORD_NUMBER_MESSAGE = 'Password must contain at least one number';
const PASSWORD_MIX_LETTER_MESSAGE = 'Password must contain at least one uppercase and one lowercase letter';
const PASSWORD_SPECIAL_CHAR_MESSAGE = 'Password must contain at least one special character';

export class PassChecker {
  static requiredChecker(control: AbstractControl): boolean {
    return control.value === null || control.value.length > 0;
  }

  static lengthChecker(control: AbstractControl): boolean {
    return control.value.length >= PASSWORD_LENTGH;
  }

  static numberChecker(control: AbstractControl): boolean {
    // that checks whether the input string contains at least one numeric digit.
    // [0-9] specifies a character class that matches any single digit from 0 to 9.
    // + is a quantifier that means "one or more" of the preceding element. Therefore, [0-9]+ matches one or more consecutive digits.
    const regexp = new RegExp('[0-9]+');
    return regexp.test(control.value);
  }

  static mixLetterChecker(control: AbstractControl): boolean {
    // that checks whether the input string contains at least one uppercase letter and one lowercase letter.
    // [A-Z] specifies a character class that matches any uppercase letter from A to Z.
    // [a-z] specifies a character class that matches any lowercase letter from a to z.
    // /^(?=.*[a-z])(?=.*[A-Z])/ is a regular expression pattern. In this pattern:

    // ^ asserts the position at the start of the string.
    // (?=.*[a-z]) is a positive lookahead assertion that checks for the presence of at least one lowercase letter anywhere in the string. Specifically:
    // .* matches any character (except for line terminators) zero or more times.
    // [a-z] specifies a character class that matches any single lowercase letter from 'a' to 'z'.
    const regexp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])');
    return regexp.test(control.value);
  }

  static specialCharChecker(control: AbstractControl): boolean {
    // that checks whether the input string contains at least one special character.
    // \W specifies a character class that matches any non-word character.
    // \W+ is a regular expression pattern that matches one or more consecutive non-word characters.
    const regexp = new RegExp('\\W+');
    return regexp.test(control.value);
  }

  static allPassChecks(control: AbstractControl): object[] {
    const errorsList: object[] = [];

    if (!control.value) {
      errorsList.push({ message: PASSWORD_REQUIRED_MESSAGE });
      return errorsList;
    }

    if (!PassChecker.requiredChecker(control)) {
      errorsList.push({ message: PASSWORD_REQUIRED_MESSAGE });
    }

    if (!PassChecker.lengthChecker(control)) {
      errorsList.push({ message: PASSWORD_LENTGH_MESSAGE });
    }

    if (!PassChecker.numberChecker(control)) {
      errorsList.push({ message: PASSWORD_NUMBER_MESSAGE });
    }

    if (!PassChecker.mixLetterChecker(control)) {
      errorsList.push({ message: PASSWORD_MIX_LETTER_MESSAGE });
    }

    if (!PassChecker.specialCharChecker(control)) {
      errorsList.push({ message: PASSWORD_SPECIAL_CHAR_MESSAGE });
    }

    return errorsList;
  }
}
