import { Component } from '@angular/core';
import { FormExampleComponent } from './form-example/form-example.component';
import { RegFormComponent } from './reg-form/reg-form.component';

@Component({
  selector: 'app-root',
  imports: [FormExampleComponent, RegFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Angular';
}
