import { Component, OnInit } from '@angular/core';
import { LojaService } from 'src/app/services/loja.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css'],
})
export class ListProdutoComponent implements OnInit {
  produtos: any;
  currentProduto = null;
  currentIndex = -1;
  nome = '';

  constructor(private service: LojaService) {}

  ngOnInit(): void {
    this.retrieveProduto();
  }

  retrieveProduto(): void {
    this.service.getAll().subscribe(
      (data) => {
        this.produtos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }


/**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA LINHA DA TABELA*/
  excluir(codigo:number, index:number):void {

    if(confirm("Deseja realmente excluir esse registro?")) {

      /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
      this.service.delete(codigo).subscribe(response => {

            /**PEGA O RESPONSE DO SERVIÇO */
            let res:Response = <Response>response;
            window.location.reload();
        },
        (erro) => {
            /*MOSTRA ERROS NÃO TRATADOS */
            alert(erro);
        });
    }
  }


}
