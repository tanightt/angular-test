import { Component } from '@angular/core';
import { PasswordStrengthService } from './password-strength.service';
import { PasswordStrengthLevel } from './password-strength-level.enum';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: PasswordStrengthLevel = PasswordStrengthLevel.Empty;

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  checkPasswordStrength() {
    this.passwordStrength = this.passwordStrengthService.checkPasswordStrength(
      this.password
    );
  }
}
