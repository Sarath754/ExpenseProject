import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  expenses: { name: string, ID: string, department: string, purpose: string,date:Number,cost:Number }[] = [

   

  ];


  constructor(private ExpenseService:ExpenseService) { 

    this.expenses = ExpenseService.getExpenses();
  }

  ngOnInit(): void {
  }

}
