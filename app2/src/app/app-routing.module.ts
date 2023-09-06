import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {OrdersComponent} from './orders/orders.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {NewComponent} from "./orders/inner-items/new/new.component";
import {DeleteComponent} from "./orders/inner-items/delete/delete.component";
import {GetComponent} from "./orders/inner-items/get/get.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customer/:data', component: CustomerComponent},
  {
    path: 'orders', component: OrdersComponent, children: [
      {path: '', redirectTo: '/orders/new', pathMatch:'full'},
      {path: 'new', component: NewComponent},
      {path: 'delete', component: DeleteComponent},
      {path: 'get', component: GetComponent}
    ]
  },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
