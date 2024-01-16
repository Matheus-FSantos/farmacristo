import { CreatinaPNG } from "../../../../assets/images/images";

import styled from "styled-components";

const ShoppingCartItemContainer = styled.section`
	border: 1px solid red;

	width: 100%;

	display: flex;
`;

const Icon = styled.img`
	width: 10rem; /* 160px */
	height: 10rem;
`;

const ShoppingCartItem = () => {
	return(
		<ShoppingCartItemContainer>
			<Icon src={ CreatinaPNG }/>

			<div>
				<span>Creatina 100% creapure (150G) - Nutrata</span>
				<span>R$ 172,90</span>
				<span>R$ 199,99</span>
			</div>
		</ShoppingCartItemContainer>
	);
}
export { ShoppingCartItem };
