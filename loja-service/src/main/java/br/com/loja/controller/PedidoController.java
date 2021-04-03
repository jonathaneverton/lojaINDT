package br.com.loja.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.loja.model.Pedido;
import br.com.loja.repository.PedidoRepository;

@CrossOrigin
@RestController
@RequestMapping("/loja/pedidos")
public class PedidoController {

	private PedidoRepository pedidoRepository;
		
	@GetMapping
	public List<Pedido> listar() {
		return this.pedidoRepository.findAll();
	}
	
	/**
	 * BUSCAR UMA PEDIDO PELO CÓDIGO DO PEDIDO
	 * 
	 * @param codigo
	 * @return
	 */

	@GetMapping(path = { "/{idpedido}" })
	public ResponseEntity<Pedido> findById(@PathVariable("idpedido") Integer id) {
		return pedidoRepository.findById(id).map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}

}
