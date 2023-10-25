import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  checkPasswordStrength(password: string): number {
    if (!password) {
      return 0;
    } else if (password.length < 8) {
      return 4;
    } else {
      const hasLetters = /[A-Za-z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return 3;
      } else if (
        (hasLetters && (hasDigits || hasSymbols)) ||
        (hasDigits && hasSymbols)
      ) {
        return 2;
      } else {
        return 1;
      }
    }
  }
}
