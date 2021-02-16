import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minimus';
  showMenu: boolean = true;
  darkModeActive: boolean = false;
  toggleMenu() {}
  modeToggleSwitch() {}
}
