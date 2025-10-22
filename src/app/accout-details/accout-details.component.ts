import { Component, inject } from '@angular/core';
import { ContactPhoneComponent } from "../contact-phone/contact-phone.component";
import { CommonModule } from '@angular/common';
import { ContactImgComponent } from "../contact-img/contact-img.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accout-details',
  imports: [ContactPhoneComponent, CommonModule, ContactImgComponent],
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
