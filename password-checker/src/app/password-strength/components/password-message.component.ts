import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-message',
  templateUrl: './password-message.component.html',
})
export class PasswordMessageComponent {
  @Input() passwordStrength: string = '';
}
