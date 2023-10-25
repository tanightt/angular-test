import { Injectable } from '@angular/core';
import { PasswordStrengthLevel } from './password-strength-level.enum';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  checkPasswordStrength(password: string): PasswordStrengthLevel {
    if (!password) {
      return PasswordStrengthLevel.Empty;
    } else if (password.length < 8) {
      return PasswordStrengthLevel.Short;
    } else {
      const hasLetters = /[A-Za-z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return PasswordStrengthLevel.Strong;
      } else if (
        (hasLetters && (hasDigits || hasSymbols)) ||
        (hasDigits && hasSymbols)
      ) {
        return PasswordStrengthLevel.Medium;
      } else {
        return PasswordStrengthLevel.Easy;
      }
    }
  }
}
