import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [

  {path:"",component:ExpenseComponent},
  {path:"history",component:HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
