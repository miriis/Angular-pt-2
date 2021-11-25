import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { OrderContainerComponent } from "./container/order-container/order-container.component";
import { UserContainerComponent } from "./container/user-container/user-container.component";

const routes: Routes = [
  { path: 'user', component: UserContainerComponent},
  { path: 'order', component: OrderContainerComponent},
  { path: '', component: UserContainerComponent},
  { path: '**', component: NotFoundComponent}
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
