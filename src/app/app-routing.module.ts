import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsrHomeComponent } from './components/usr-home/usr-home.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/inicio'
  },
  {
    path: 'inicio',
    component: UsrHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
