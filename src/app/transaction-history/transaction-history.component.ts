import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
transactions=[];
id="";
  constructor(private dataService:DataService) {
    this.getTransactions();
  }
  getTransactions(){
   this.dataService.getTransactions()
    .subscribe((result:any)=>{
      this.transactions=result.transactions;
    })
   }
  
  ngOnInit(): void {
  }
  onDelete($event){
    this.dataService.deleteTransaction($event)
    .subscribe((data:any)=>{
      alert(data.message);
this.id="";
      this.getTransactions();
  }
    )
}
onCancel($event){
  this.id="";
}
  showConfirmation(id){
    this.id=id;
  }
}