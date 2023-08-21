import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function seatAvailableCheck(control:FormControl) {
  const value=Number(control.value);
  if(isNaN(value)||value<=0||value>=8){
    return{valueRange:true}
  }
  return null;
}

@Component({
  selector: 'app-offer-ride-component',
  templateUrl: './offer-ride-component.component.html',
  styleUrls: ['./offer-ride-component.component.css']
})

export class OfferRideComponentComponent {

  contactForm!: FormGroup;
  submittedData:any[]=[]
  constructor(private formBuilder:FormBuilder){
  }
  

  ngOnInit(): void {
  this.contactForm=this.formBuilder.group({
    name:['',Validators.required],
    startLocation:['',Validators.required],
    destination:['',Validators.required],
    car:['',Validators.required],
    seatsAvailable:['',[Validators.required,seatAvailableCheck]],
    
  });
  }
  onSubmit(){
   if(this.contactForm?.valid){
    const formData=this.contactForm.value;
    this.submittedData.push(formData);
    this.contactForm.reset();
    alert("Regiatration Complete")
   }
   else{
    alert("Invalid data")
   } 
  }
  
  


}
  
  
