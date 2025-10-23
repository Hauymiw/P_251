import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactImgComponent } from "../contact-img/contact-img.component";
import { ContactPhoneComponent } from "../contact-phone/contact-phone.component";

@Component({
  selector: 'app-accout-details',
  imports: [ContactPhoneComponent, CommonModule, ContactImgComponent , FormsModule],
  templateUrl: './accout-details.component.html',
  styleUrl: './accout-details.component.css'
})
export class AccoutDetailsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  hpno: string | null = null; 
  showContactPhone = false;
  showContracImg = false;
  nextContactDate: string = new Date().toISOString().split('T')[0];

  
  ngOnInit() {
    this.hpno = this.route.snapshot.paramMap.get('hpno'); 
  }
  

  openContactPhone(){
    this.showContactPhone = true; 
  }

  closeContactPhone(){
    this.showContactPhone = false; 
  }

  openContracImg(){
    this.showContracImg = true; 
  }

  closeContracImg(){
    this.showContracImg = false; 
  }

  goHandleaccount(){
    this.router.navigate(['Handle-account']);
  }

  
}
