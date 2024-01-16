import { Price as PriceComponent } from "./styles";

interface IPrice {
	Price?: string | undefined
}

const Price = ({ Price }: IPrice) => {
	return(
		<PriceComponent>{ Price }</PriceComponent>
	);
}

export { Price };
