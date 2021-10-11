import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerConsentComponent } from './customer-consent/customer-consent.component';
import { NextComponent } from './next/next.component';
import { PrevComponent } from './prev/prev.component';

const routes: Routes = [
  {path :'customer-consent',component:CustomerConsentComponent},
  {path :'next',component:NextComponent},
  {path :'prev',component:PrevComponent},
  {path:'',redirectTo:'/customer-consent',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
