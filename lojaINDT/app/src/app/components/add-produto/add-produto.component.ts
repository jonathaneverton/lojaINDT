import { Component, OnInit } from '@angular/core';
import { LojaService } from 'src/app/services/loja.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css'],
})
export class AddProdutoComponent implements OnInit {
  produto = {
    nome: '',
    descricao: '',
    quantidade: '',
    valor: ''
  };
  submitted = false;

  constructor(private service: LojaService) {}

  ngOnInit(): void {}

  saveProduto(): void {
    const data = {
      nome: this.produto.nome,
      descricao: this.produto.descricao,
      quantidade: this.produto.quantidade,
      valor: this.produto.valor
    };

    this.service.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newProduto(): void {
    this.submitted = false;
    this.produto = {
      nome: '',
      descricao: '',
      quantidade: '',
      valor: ''
    };
  }
}
