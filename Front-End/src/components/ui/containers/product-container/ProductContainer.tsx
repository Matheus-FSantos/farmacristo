import { ProductContainer as ProductContainerComponent } from "./styles";

interface IProductContainer {
	Type?: string | undefined
	children: React.ReactNode
}

const ProductContainer = ({ Type, children }: IProductContainer) => {
	return <ProductContainerComponent className={ Type }>{ children }</ProductContainerComponent>
}

export { ProductContainer };
