import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "lista-produtos", component: ListaProdutosComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "detalhes-produto", component: DetalhesProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
