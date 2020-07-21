import { Injectable } from '@angular/core';
import { Theme } from './themes/Theme';
import { ThemeRepository } from './themes/ThemeRepository';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: Theme;

  changeTheme(name: string) {
    this.currentTheme = ThemeRepository[name];
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
  constructor() {
    this.currentTheme = ThemeRepository['Kalie'];
  }
}
