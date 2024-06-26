import { ShoppingCart, RemovePNG } from "../../../../assets/icons/icons";
import { LoadingContainer } from "../../../../pages/search/styles";
import { Spinner } from "../../spinner";
import { ProductButton as ProductButtonComponent, ProductIcon } from "./styles";

interface IProductButton {
	OnClick?: () => void,
	Type: string | undefined,
	IsDisabled?: boolean
}

const ProductButton = ({ Type, OnClick, IsDisabled }: IProductButton) => {
	return (
		<ProductButtonComponent className={ Type } onClick={ OnClick } disabled={ IsDisabled }>
			{
				IsDisabled ?
					<LoadingContainer className="adjustable small">
						<Spinner className="margin-0"/>
					</LoadingContainer>
				:
					Type === "shopping-cart" ?
						<>
							<ProductIcon alt="Um carrinho de compras, em azul" src={ ShoppingCart } />
							<span>Adicionar ao carrinho</span>
						</>
					:
						Type === "whatsapp" ?
							<>
								<svg className="whatsapp-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M31.75 8.18335C30.222 6.63989 28.4019 5.41613 26.396 4.58344C24.3901 3.75074 22.2385 3.32579 20.0666 3.33335C10.9666 3.33335 3.54996 10.75 3.54996 19.85C3.54996 22.7667 4.31663 25.6 5.74996 28.1L3.41663 36.6667L12.1666 34.3667C14.5833 35.6833 17.3 36.3834 20.0666 36.3834C29.1666 36.3834 36.5833 28.9667 36.5833 19.8667C36.5833 15.45 34.8666 11.3 31.75 8.18335ZM20.0666 33.5833C17.6 33.5833 15.1833 32.9167 13.0666 31.6667L12.5666 31.3667L7.36663 32.7333L8.74996 27.6667L8.41663 27.15C7.0462 24.9616 6.31853 22.4321 6.31663 19.85C6.31663 12.2833 12.4833 6.11668 20.05 6.11668C23.7166 6.11668 27.1666 7.55002 29.75 10.15C31.0291 11.4233 32.0428 12.9378 32.7323 14.6057C33.4218 16.2737 33.7733 18.0619 33.7666 19.8667C33.8 27.4333 27.6333 33.5833 20.0666 33.5833ZM27.6 23.3167C27.1833 23.1167 25.15 22.1167 24.7833 21.9667C24.4 21.8334 24.1333 21.7667 23.85 22.1667C23.5666 22.5834 22.7833 23.5167 22.55 23.7833C22.3166 24.0667 22.0666 24.1 21.65 23.8834C21.2333 23.6833 19.9 23.2334 18.3333 21.8334C17.1 20.7334 16.2833 19.3834 16.0333 18.9667C15.8 18.55 16 18.3334 16.2166 18.1167C16.4 17.9333 16.6333 17.6333 16.8333 17.4C17.0333 17.1667 17.1166 16.9833 17.25 16.7167C17.3833 16.4333 17.3166 16.2 17.2166 16C17.1166 15.8 16.2833 13.7667 15.95 12.9334C15.6166 12.1334 15.2666 12.2334 15.0166 12.2167H14.2166C13.9333 12.2167 13.5 12.3167 13.1166 12.7334C12.75 13.15 11.6833 14.15 11.6833 16.1834C11.6833 18.2167 13.1666 20.1834 13.3666 20.45C13.5666 20.7334 16.2833 24.9 20.4166 26.6833C21.4 27.1167 22.1666 27.3667 22.7666 27.55C23.75 27.8667 24.65 27.8167 25.3666 27.7167C26.1666 27.6 27.8166 26.7167 28.15 25.75C28.5 24.7833 28.5 23.9667 28.3833 23.7833C28.2666 23.6 28.0166 23.5167 27.6 23.3167Z" fill="#3C8067" />
								</svg>
								<span>Comprar</span>
							</>
						:
							<>
								<ProductIcon alt="Um X vermelho" src={ RemovePNG }/>
								<span>Remover</span>
							</>
			}
		</ProductButtonComponent>
	);
}

export { ProductButton }
