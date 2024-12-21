import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PassValidatorDirective } from '../share/directives/pass-validator.directive';
import { NameValidatorDirective } from '../share/directives/name-validator.directive';

@Component({
  selector: 'app-reg-form',
  imports: [CommonModule, FormsModule, PassValidatorDirective, NameValidatorDirective],
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.css',
})
export class RegFormComponent {
  user = {
    name: '',
    email: '',
    lastName: '',
    password: '',
  };
  confirmPassword = '';

  // onSubmit(form: SubmitEvent): void {
  //   console.log('You submitted value:', form);
  //   // @ts-expect-error: ng is not defined
  //   console.log(window.ng.getDirectives(form.target));
  // }
  onSubmit(form: NgForm): void {
    console.log('You submitted value:', form);
  }

  trackByFn(index: number, item: { message: string }): string {
    return item.message;
  }
}
