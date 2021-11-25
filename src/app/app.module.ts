import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './container/user-container/user-container.component';
import { OrderContainerComponent } from './container/order-container/order-container.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderSingleComponent } from './components/order-single/order-single.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSingleComponent } from './components/user-single/user-single.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRountingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    UserDetailComponent,
    UserListComponent,
    UserSingleComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
