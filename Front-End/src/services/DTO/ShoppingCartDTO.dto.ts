interface IShoppingCartDTO {
	id: string,
	userId: string,
	products: IProductDTO[],
	total: string
}
