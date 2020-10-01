import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails 
  ={
      1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000,transactions:[]},
      1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500,transactions:[]},
      1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500,transactions:[]},
      1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000,transactions:[]},
      1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000,transactions:[]},
  };
currentUser;
  constructor(private http:HttpClient) {this.getDetails(); }
  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
    }
  }
  getTransactions(){
    //return this.accountDetails[this.currentUser.acno].transactions;
    return this.http.get("http://localhost:3000/Transactions",options);
  }
  deleteTransaction(id){
    return this.http.delete("http://localhost:3000/Transactions/"+id,options)
    
  }
   getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails=JSON.parse(localStorage.getItem("accountDetails"));
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    }
  }
  
  
  
  register(name,acno,pin,password){
    
const data={
  name,
  acno,
  pin,
  password,
  balance:0,
  transactions:[]
}
return this.http.post("http://localhost:3000/register",data);

  }
  login(acno1,password){
    
        var acno=parseInt(acno1);
        
    const data={
      acno1:acno,
      password
    }
    return this.http.post("http://localhost:3000/login",data,options);
  }


  deposit(acno1,pin,amt){
    const data={
      acno1,
      pin,
      amt
    }
return this.http.post("http://localhost:3000/deposit",data,options);
    }
    
      
        
  //       if (acno1 in data){
  //           var mpin = data[acno1].pin
  //           if (pin==mpin){
  //               data[acno1].balance+= parseInt(amt);
  //               data[acno1].transactions.push({
  //                 amount:amt,
  //                 type:'credit'
  //               })
  //               this.saveDetails();
  //               return{
  //                 status:true,
  //               message:("account has been credited"),
  //               balance:(data[acno1].balance),
                
                
  //           }
  //         }
  //       }
  //       else{
  //           return{
  //             status:false,
  //             message:'incorrect accout number'
  //           }
  //       }        

  // }
  withdraw(acno1,pin,amt){

    const data={
      acno1,
      pin,
      amt
    }
return this.http.post("http://localhost:3000/withdraw",data,options);
    }
  //   var data=this.accountDetails;
  //   if(acno1 in data){
  //   if(data[acno1].balance<parseInt(amt)){
  //     return{
  //       status:false,
  //       message:'insufficient balance'
  //     }
  //   }
  //     else if(data[acno1].pin==pin){
  //       data[acno1].balance-=parseInt(amt);
  //       data[acno1].transactions.push({
  //         amount:amt,
  //         type:'debit'
  //       })
  //       this.saveDetails();
  //       return{
  //         status:true,
  //         message:'the amount has been debited',
  //         balance:data[acno1].balance
  //       }
  //     }
  //   }
  //   else{
  //     return{
  //       status:false,
  //       message:'incorrect account number'
  //     }
  //   }
        

        
  //     }
    
  }
  
