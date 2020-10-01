import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  depositForm=this.fb.group({
    acnod:['',[Validators.required]],
    pind:['',[Validators.required]],
    amtd:['',[Validators.required]]
  }); 
  withdrawForm=this.fb.group({
acnow:['',[Validators.required]],
pinw:['',[Validators.required]],
amtw:['',[Validators.required]],
  });
  name="";
    constructor(
      public  dataService : DataService,
      private fb : FormBuilder) {this.name=localStorage.getItem("name") }
  
  ngOnInit(): void {
  }
   deposit(){
if(this.depositForm.valid){
  this.dataService.deposit(this.depositForm.value.acnod,this.depositForm.value.pind,this.depositForm.value.amtd) 
   .subscribe((result:any)=>{

  alert(result.message);
  alert(result.balance);

  },(result)=>{
alert(result.error.message);

  })
    
  }
  
else{
  alert("invalid form");
}
}
withdraw(){
  if(this.withdrawForm.valid){
    this.dataService.withdraw(this.withdrawForm.value.acnow,this.withdrawForm.value.pinw,this.withdrawForm.value.amtw)
    .subscribe((result:any)=>{
      alert(result.message);
      alert(result.balance);
    },(result)=>{
      alert(result.error.message);
    }
    )
  }
  else{
    alert("invalid form");
  }

}
} 

  
  
