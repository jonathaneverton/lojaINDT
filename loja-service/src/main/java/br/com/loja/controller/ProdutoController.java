package br.com.loja.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.loja.model.Produto;
import br.com.loja.repository.ProdutoRepository;

@CrossOrigin
@RestController
@RequestMapping("/loja/produtos")
public class ProdutoController {
	private ProdutoRepository produtoRepository;

	public ProdutoController(ProdutoRepository produtoRepository) {
		this.produtoRepository = produtoRepository;
	}

	/**
	 * SALVAR UM NOVO REGISTRO
	 * 
	 * @param produto
	 * @return
	 */
	@PostMapping
	public Produto salvar(@RequestBody Produto produto) {
		return this.produtoRepository.save(produto);
	}

	/**
	 * ATUALIZAR UM REGISTRO
	 * 
	 * @param produto
	 * @return
	 */
	@PutMapping(value = "/{idproduto}")
	public ResponseEntity<Produto> atualizar(@PathVariable("idproduto") Integer id, @RequestBody Produto produto) {
		return produtoRepository.findById(id).map(record -> {
			record.setNome(produto.getNome());
			record.setDescricao(produto.getDescricao());
			record.setQuantidade(produto.getQuantidade());
			record.setValor(produto.getValor());
			Produto updated = produtoRepository.save(record);
			return ResponseEntity.ok().body(updated);
		}).orElse(ResponseEntity.notFound().build());
	}

	/**
	 * CONSULTAR TODAS OS PRODUTOS
	 * 
	 * @return
	 */
	
	@GetMapping
	public List<Produto> listar() {
		return this.produtoRepository.findAll();
	}

	/**
	 * BUSCAR UMA PRODUTO PELO CÓDIGO DO PRODUTO
	 * 
	 * @param codigo
	 * @return
	 */

	@GetMapping(path = { "/{idproduto}" })
	public ResponseEntity<Produto> findById(@PathVariable("idproduto") Integer id) {
		return produtoRepository.findById(id).map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}

	/***
	 * EXCLUIR UM PRODUTO PELO CÓDIGO DO PRODUTO
	 * 
	 * @param codigo
	 * @return
	 */
	
	@DeleteMapping(path = { "/{idproduto}" })
	public ResponseEntity<?> delete(@PathVariable("idproduto") Integer id) {
		return produtoRepository.findById(id).map(record -> {
			produtoRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}).orElse(ResponseEntity.notFound().build());
	}

}
