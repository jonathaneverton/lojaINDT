import { Component, OnInit } from '@angular/core';
import { LojaService } from 'src/app/services/loja.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-produto',
  templateUrl: './details-produto.component.html',
  styleUrls: ['./details-produto.component.css']
})
export class DetailsProdutoComponent implements OnInit {
  produto = {
    idproduto: '',
    nome: '',
    descricao: '',
    quantidade: '',
    valor: ''
  };

  produtoAtual: any;

  submitted = false;

  constructor(private service: LojaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      if (parametros['idproduto']) {
        this.carregaProduto(parametros['idproduto']);
      }
    });
  }

  carregaProduto(codigo:number): void {
    this.service.get(codigo).subscribe(
      (data) => {
        this.produto.idproduto = data.idproduto;
        this.produto.nome = data.nome;
        this.produto.descricao = data.descricao;
        this.produto.quantidade = data.quantidade;
        this.produto.valor = data.valor;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveProduto(): void {
    const data = {
      idproduto: this.produto.idproduto,
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

}
