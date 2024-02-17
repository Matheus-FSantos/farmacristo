interface IPharmacyDTO {
  id: string
  name: string
  email: string
  number: string
  postalCode: string
  address: IAddressDTO
}

interface IPharmacyFullDTO {
	infos: IPharmacyDTO
	image: string	
}

interface IPharmacyReducedDTO {
	id: string,
	name: string
}

interface IAddressDTO {
	publicPlace: string
	neighborhood: string
	locality: string
	uf: string
}

interface INewPharmacyDTO {
	name: string
	email: string
	number: string
	postalCode: string
}
