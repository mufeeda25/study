import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  //acno="";
  //pwd="";
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[0-9]*$")]],
    pwd:['',[Validators.required]],
  });
  constructor(private router:Router,
    private dataService : DataService,
    private fb : FormBuilder) { }

  ngOnInit(): void {
  }
  // acnoChange(event){
  //   this.acno=event.target.value;event binding method

  // }

  // pwdChange(event){
  //   this.pwd=event.target.value;

  // }
  getError(field){
    return (this.loginForm.get(field).touched||this.loginForm.get(field).dirty)&& this.loginForm.get(field).errors;
      }
login(){
  
if(this.loginForm.valid){
this.dataService.login(this.loginForm.value.acno,this.loginForm.value.pwd)
.subscribe((data:any)=>{
  if(data){
    localStorage.setItem("name",data.name)
    alert('Login Successful');
    
    this.router.navigateByUrl("dashboard");
  }
  else{
    alert("invalid credentials")
  }
},(data)=>{
  alert(data.console.error.message);
  
})
}
  
  
 else{
alert("form is invalid");
 }       
}
}              
            
            
        
       


 