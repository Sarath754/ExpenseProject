import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {


  expenses: { name: string, ID: string, department: string, purpose: string,date:Number ,cost:Number}[] = [];



  getExpenses = () => {

    return this.expenses
  }
  

  sumbit = (name: string, ID: string, department: string, purpose: string,date:Number ,cost:Number) => {

    this.expenses.push({

      name, ID,department,purpose,date,cost

    })

  }

  constructor() { }
}
