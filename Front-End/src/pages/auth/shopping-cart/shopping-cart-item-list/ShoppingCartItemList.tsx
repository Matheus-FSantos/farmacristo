import { ShoppingCartItem } from "../shopping-cart-item";

import styled from "styled-components";

const ShoppingCartItemListContainer = styled.section`
	width: 100%;
`;

const ShoppingCartItemList = () => {
	return(
		<ShoppingCartItemListContainer>
			<ShoppingCartItem />
			<ShoppingCartItem />
			<ShoppingCartItem />
		</ShoppingCartItemListContainer>
	);
}

export { ShoppingCartItemList };
