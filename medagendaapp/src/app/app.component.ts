import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medagendaapp';
  menuOpen = false; 

  toggleMenu() {
    this.menuOpen = !this.menuOpen; 
  }
}