import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: number = 0;

  checkPasswordStrength() {
    if (!this.password) {
      this.passwordStrength = 0;
    } else if (this.password.length < 8) {
      this.passwordStrength = 4;
    } else {
      const hasLetters = /[A-Za-z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.passwordStrength = 3;
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        this.passwordStrength = 2;
      } else {
        this.passwordStrength = 1;
      }
    }
  }
}
