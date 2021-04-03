import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProdutoComponent } from './components/list-produto/list-produto.component';
import { DetailsProdutoComponent } from './components/details-produto/details-produto.component';

import { AddProdutoComponent } from './components/add-produto/add-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ListProdutoComponent },
  { path: 'produtos/:idproduto', component: DetailsProdutoComponent },
  { path: 'produto', component: AddProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
