package br.com.farmacristo.model.DTO.viacep;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

import br.com.farmacristo.model.annotation.DTO;

@DTO
public class ViaCEPDTO implements Serializable {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	private String cep;
    private String logradouro;
    private String complemento;
    private String bairro;
    private String localidade;
    private String uf;
    private String gia;
    private String ddd;
    private String siafi;
    
    public ViaCEPDTO() { }

	public ViaCEPDTO(String cep, String logradouro, String complemento, String bairro, String localidade, String uf, String gia, String ddd, String siafi) {
		this.cep = cep;
		this.logradouro = logradouro;
		this.complemento = complemento;
		this.bairro = bairro;
		this.localidade = localidade;
		this.uf = uf;
		this.gia = gia;
		this.ddd = ddd;
		this.siafi = siafi;
	}

	@Override
	public int hashCode() {
		return Objects.hash(bairro, cep, complemento, ddd, gia, localidade, logradouro, serialVersionUID, siafi, uf);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ViaCEPDTO other = (ViaCEPDTO) obj;
		return Objects.equals(bairro, other.bairro) && Objects.equals(cep, other.cep)
				&& Objects.equals(complemento, other.complemento) && Objects.equals(ddd, other.ddd)
				&& Objects.equals(gia, other.gia) && Objects.equals(localidade, other.localidade)
				&& Objects.equals(logradouro, other.logradouro) && serialVersionUID == other.serialVersionUID
				&& Objects.equals(siafi, other.siafi) && Objects.equals(uf, other.uf);
	}

	@Override
	public String toString() {
		return "ViaCEPDTO [serialVersionUID=" + serialVersionUID + ", cep=" + cep + ", logradouro=" + logradouro
				+ ", complemento=" + complemento + ", bairro=" + bairro + ", localidade=" + localidade + ", uf=" + uf
				+ ", gia=" + gia + ", ddd=" + ddd + ", siafi=" + siafi + "]";
	}

	public String getCep() {
		return cep;
	}
	
    public void setCep(String cep) {
		this.cep = cep;
	}
	
	public String getLogradouro() {
		return logradouro;
	}
	
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	
	public String getComplemento() {
		return complemento;
	}
	
	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}
	
	public String getBairro() {
		return bairro;
	}
	
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	
	public String getLocalidade() {
		return localidade;
	}
	
	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}
	
	public String getUf() {
		return uf;
	}
	
	public void setUf(String uf) {
		this.uf = uf;
	}
	
	public String getGia() {
		return gia;
	}
	
	public void setGia(String gia) {
		this.gia = gia;
	}
	
	public String getDdd() {
		return ddd;
	}
	
	public void setDdd(String ddd) {
		this.ddd = ddd;
	}
	
	public String getSiafi() {
		return siafi;
	}
	
	public void setSiafi(String siafi) {
		this.siafi = siafi;
	}
    
}
