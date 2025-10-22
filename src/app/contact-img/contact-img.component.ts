import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-img',
  imports: [],
  templateUrl: './contact-img.component.html',
  styleUrl: './contact-img.component.css'
})
export class ContactImgComponent {

  @Output() close = new EventEmitter<void>();
  
  closePopup() { 
    this.close.emit(); // ส่ง event กลับไปยัง parent
  }
}
