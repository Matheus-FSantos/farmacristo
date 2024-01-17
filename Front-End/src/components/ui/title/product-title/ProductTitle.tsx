import { ProductTitle as ProductTitleComponent } from "./styles";

interface IProductTitle {
	Title: string | undefined
	Type?: string | undefined | ""
}

const ProductTitle = ({ Title, Type }: IProductTitle) => {
	return <ProductTitleComponent className={ Type }>{ Title }</ProductTitleComponent>
}

export { ProductTitle };
