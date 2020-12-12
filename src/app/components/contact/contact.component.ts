import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName:string;
  lastName:string;
  address:string;
  phone:string;
  email:string;
  message:string;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

    /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.firstName} ${this.lastName} . My email is ${this.email}. My Address is ${this.address} My phone is ${this.phone}` ;
    console.log(allInfo);
    this.message="Thank you for registering. Your information has been saved sucessfully";
    
    this.resetForm();
  }

  resetForm(){
    setTimeout(()=>{
      this.message="";  
      },1000);

    this.address="";
    this.email="";
    this.firstName="";
    this.lastName="";
    this.phone="";
  }

}
