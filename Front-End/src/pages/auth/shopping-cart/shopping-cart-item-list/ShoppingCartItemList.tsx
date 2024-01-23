import { ShoppingCartItem } from "../shopping-cart-item";

/* UI */
import { Hr } from "../../../../components/ui/hr/Hr";

import styled from "styled-components";
import { ProductTitle } from "../../../../components/ui/title/product-title/ProductTitle";

const ShoppingCartItemListContainer = styled.section`
	width: 100%;
`;

const ItemList = styled.section`
	display: flex;
	flex-direction: column;

	gap: 5px; /* 5px */
`;

const TotalContainer = styled.section`
	display: flex;
	align-items: end;

	padding-right: 3.75rem; /* 60px */

	gap: 0.625rem; /* 10px */

	span.price {
		font-weight: 700;
		font-size: 1.5rem;

		color: var(--green-700);
	}
`;

const ShoppingCartItemList = () => {
	return(
		<ShoppingCartItemListContainer>
			<ItemList>
				<ShoppingCartItem />
				<ShoppingCartItem />
				<ShoppingCartItem />
			</ItemList>

			<Hr />

			<TotalContainer>
				<ProductTitle Title="Total:" Type="xl" />
				<span className="price">R$ 518,70</span>
			</TotalContainer>
		</ShoppingCartItemListContainer>
	);
}

export { ShoppingCartItemList };
