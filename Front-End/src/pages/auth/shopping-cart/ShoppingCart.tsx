import { GlobalLayout } from "../../../layout/global/GlobalLayout"

/* UI */
import { Title } from "../../../components/ui/title/Title";
import { Subtitle } from "../../../components/ui/subtitle/styles";
import { TitleContainer } from "../../../components/ui/containers/title-container/styles";
import { ShoppingCartItemList } from "./shopping-cart-item-list";

import styled from "styled-components";
import { PrivateRoute } from "../private-route";

const ShoppingCartContainer = styled.section`
	display: flex;
	flex-direction: column;

	align-items: start;
	justify-content: start;

	gap: 40px;
`;

const ShoppingCart = () => {

	return (
		<PrivateRoute>
			<GlobalLayout>
				<ShoppingCartContainer>
					<TitleContainer>
						<Title Type="sm">Carrinho</Title>
						<Subtitle>Abaixo, todos os itens do seu carrinho!</Subtitle>
					</TitleContainer>

					<ShoppingCartItemList />
				</ShoppingCartContainer>
			</GlobalLayout>
		</PrivateRoute>
	);
}

export { ShoppingCart };
