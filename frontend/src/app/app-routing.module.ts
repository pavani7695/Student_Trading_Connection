import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "sell", component: SellComponent },
      { path: "buy", component: BuyComponent },
      { path: "profile", component: ProfileComponent },
    ],
  },
  { path: "buy/:id", component: ProductDetailsComponent },
  { path: "sellerDetails/:id", component: SellerDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
