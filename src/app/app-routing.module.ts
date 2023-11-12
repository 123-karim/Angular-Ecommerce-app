import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './products/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './products/productsdetails/productsdetails.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { LoginComponent } from './login/login/login.component';
import { RegesterComponent } from './regester/regester/regester.component';

const routes: Routes = [
  {path:"products",component:AllproductsComponent},
  {path:"details/:id",component:ProductsdetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegesterComponent},

  {path:"cart",component:CartsComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
