interface IProductDTO {
	id: string
  name: string
  brand: string
  price: string
  description: string
  promotionalPrice: string
  prescriptionIsRequired: boolean
  pharmacies: IPharmacyDTO[]
}

interface IProductFullDTO {
	image: string
	infos: IProductDTO
}

interface INewProductPharmacy {
	id: string
}

interface INewProductDTO {
	name: string,
  description: string,
  brand: string,
  price: number,
  promotionalPrice: number | null,
  prescriptionIsRequired: boolean,
  pharmacies: INewProductPharmacy[]
}
