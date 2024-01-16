import { OldPrice as OldPriceComponent } from "./styles";

interface IOldPrice {
	OldPrice: string | undefined
}

const OldPrice = ({ OldPrice }: IOldPrice) => {
	return (
		<OldPriceComponent>
			{ OldPrice }
		</OldPriceComponent>
	);
}

export { OldPrice };
