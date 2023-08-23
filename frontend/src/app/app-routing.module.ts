import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreatProductComponent } from './creat-product/creat-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HomeComponent } from './home/home.component';
import { LearnBloodComponent } from './learn-blood/learn-blood.component';
import { DonateDisabilityComponent } from './donate-disability/donate-disability.component';
import { AboutBloodComponent } from './about-blood/about-blood.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
  { path: 'product-add', component:CreatProductComponent},
  { path: 'product-manage', component:ManageProductComponent},
  { path: 'category-add', component:CreateCategoryComponent},
  { path: 'manage-category', component:ManageCategoryComponent},
  {path: 'order', component:OrderComponent},
  { path:'order-details/:id', component:OrderDetailsComponent},
  { path:'app-home', component:HomeComponent},
  { path:'app-learn-blood', component:LearnBloodComponent},
  { path:'app-donate-disability', component:DonateDisabilityComponent},
  { path:'app-about-blood', component:AboutBloodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
