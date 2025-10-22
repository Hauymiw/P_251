import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  imports: [],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {
  constructor(private router: Router) {}

  goHandelAccout(){
    this.router.navigate(['Handle-account']);
  }
}
