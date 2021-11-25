import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { OrderContainerComponent } from "./container/order-container/order-container.component";
import { UserContainerComponent } from "./container/user-container/user-container.component";

const routes: Routes = [
  { path: 'user', component: UserContainerComponent},
  { path: 'order', component: OrderContainerComponent}
]

@NgModule ({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRountingModule {}
