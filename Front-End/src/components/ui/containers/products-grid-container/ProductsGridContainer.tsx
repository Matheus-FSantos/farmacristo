import { ProductGridContainer as ProductGridContainerComponent } from "./styles";

interface IProductsGridContainer {
	children: React.ReactNode
}

const ProductsGridContainer = ({ children }: IProductsGridContainer): React.ReactElement => {
	return <ProductGridContainerComponent>{ children }</ProductGridContainerComponent>
}

export { ProductsGridContainer };
