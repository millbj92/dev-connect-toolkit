import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  colors = [
    'primary',
    'primary-medium',
    'primary-dark',
    'primary-darkest',
    'secondary',
    'secondary-medium',
    'secondary-dark',
    'secondary-darkest',
    'accent',
    'success',
    'warn',
  ];

  selectedColor: string = this.colors[0];
  btnDisabled: boolean = false;
  showPanel = false;
  arr = Array(200).fill(1);

  toggleDisabled() {
    this.btnDisabled = !this.btnDisabled;
  }

  randomColor() {
    this.selectedColor = this.colors[
      Math.floor(Math.random() * this.colors.length)
    ];
  }

  togglePanel() {
    this.showPanel = !this.showPanel;
  }
}
