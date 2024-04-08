import { ProductGridContainer as ProductGridContainerComponent } from "./styles";

interface IProductsGridContainer {
	children: React.ReactNode,
	className?: string
}

const ProductsGridContainer = ({ children, className }: IProductsGridContainer): React.ReactElement => {
	return <ProductGridContainerComponent className={ className }>{ children }</ProductGridContainerComponent>
}

export { ProductsGridContainer };
