package br.com.loja.model;

public class ResponseModel {
	private Integer codigo;
	private String mensagem;
 
	public ResponseModel() {}
 
	public ResponseModel(Integer codigo, String mensagem) {
		this.codigo   = codigo;
		this.mensagem =  mensagem;
	}
 
	public Integer getCodigo() {
		return codigo;
	}
	
	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}
	
	public String getMensagem() {
		return mensagem;
	}
 
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
}
