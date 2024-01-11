package br.com.farmacristo.model.DTO.viacep;

import java.util.Objects;

public class AddressDTO {
	
	private String publicPlace;
    private String neighborhood;
    private String locality;
    private String UF;
	
    
    public AddressDTO(ViaCEPDTO viaCEPDTO) {
		this.publicPlace = viaCEPDTO.getLogradouro();
		this.neighborhood = viaCEPDTO.getBairro();
		this.locality = viaCEPDTO.getLocalidade();
		this.UF = viaCEPDTO.getUf();
	}

	@Override
	public int hashCode() {
		return Objects.hash(UF, locality, neighborhood, publicPlace);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AddressDTO other = (AddressDTO) obj;
		return Objects.equals(UF, other.UF) && Objects.equals(locality, other.locality)
				&& Objects.equals(neighborhood, other.neighborhood) && Objects.equals(publicPlace, other.publicPlace);
	}

	@Override
	public String toString() {
		return "Address [publicPlace=" + publicPlace + ", neighborhood=" + neighborhood + ", locality=" + locality
				+ ", UF=" + UF + "]";
	}

	public String getPublicPlace() {
		return publicPlace;
	}
	
	public void setPublicPlace(String publicPlace) {
		this.publicPlace = publicPlace;
	}
	
	public String getNeighborhood() {
		return neighborhood;
	}
	
	public void setNeighborhood(String neighborhood) {
		this.neighborhood = neighborhood;
	}
	
	public String getLocality() {
		return locality;
	}
	
	public void setLocality(String locality) {
		this.locality = locality;
	}
	
	public String getUF() {
		return UF;
	}
	
	public void setUF(String uF) {
		UF = uF;
	}
    
    
    
}
