import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { DetailsProdutoComponent } from './components/details-produto/details-produto.component';
import { ListProdutoComponent } from './components/list-produto/list-produto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddProdutoComponent,
    DetailsProdutoComponent,
    ListProdutoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
