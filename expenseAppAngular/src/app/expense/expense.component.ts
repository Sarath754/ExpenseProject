import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent  {


expenseForm=this.fb.group({

   name:[ ],
   ID:[],
   department:[],
   purpose:[],
   date:[],
   cost:[]


})
  // ExpenseService: any;


  constructor(private fb:FormBuilder,private router:Router,private expenseServices:ExpenseService ) {
    
  }

 sumbit(){

  const name=this.expenseForm.value.name;

  const ID=this.expenseForm.value.ID;

  const department=this.expenseForm.value.department;

  const purpose=this.expenseForm.value.purpose;

  const date=this.expenseForm.value.date

  const cost=this.expenseForm.value.cost

  
this.expenseServices.sumbit(name,ID,department,purpose,date,cost)
 
this.router.navigateByUrl("/history")


 }

}
