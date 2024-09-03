import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdutoComponent } from './produto/produto.component';



const routes: Routes = [
  {path: "carrinho", component: CarrinhoComponent},
  {path: "home", component: HomeComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "produto", component: ProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
