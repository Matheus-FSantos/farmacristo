import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";

import { ProductService } from "../../services/Products.service";
import { AuthService } from "../../services/Auth.service";

/* UI */
import { Spinner } from "../../components/ui/spinner";
import { Title } from "../../components/ui/title/Title";
import { Product } from "../../components/ui/product/Product";
import { Subtitle } from "../../components/ui/subtitle/Subtitle";
import { TitleContainer } from "../../components/ui/containers/title-container/TitleContainer";
import { ProductsGridContainer } from "../../components/ui/containers/products-grid-container/ProductsGridContainer";

import { GlobalLayout } from "../../layout/global/GlobalLayout";

import {
	SearchContainer,
	LoadingContainer,
} from "./styles";

import { Input } from "../../components/ui/input/Input";
import { Toast } from "../../components/toast";

const Search = () => {
	useDinamicTitle("Pesquisa");

	const navigate = useNavigate();
	const authService = new AuthService();
	const productService = new ProductService();
	const [products, setProducts] = useState<IProductFullDTO[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [filter, setFilter] = useState<string>("");

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		setIsLoading(true);
		productService.findAll().then((data) => {
			setProducts(data);
			setIsLoading(false);
		}).catch(() => {
			handleLogout();
		});
	}, []);

	return (
		<>
			<GlobalLayout>
				{
					isLoading ?
						<LoadingContainer>
							<Spinner />
						</LoadingContainer>
					:
						<SearchContainer>
							<TitleContainer>
								<Title Type="sm">Buscar</Title>
								<Subtitle>Ache o produto que deseja em nossas farmácias!</Subtitle>
							</TitleContainer>

							<Input Type="text" Placeholder="Pesquise aqui..." Value={ filter } SetValue={ (e) => setFilter(e.target.value) }/>

							{
								products.length === 0 ?
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											minHeight: "500px",
											width: "100%",
										}}
									>
										<p style={{ textAlign: "center", fontSize: "1rem", fontWeight: "600", color: "var(--gray-700)" }}>Nenhum produto encontrado!</p>
									</div>
								:
									<ProductsGridContainer className="padding-20">
										{
											!filter ?
												products.map(product => 
													<Product
														key={ product.infos.id }
														product={ product }
													/>
												)
											:
												products.filter(product => product.infos.name.toLowerCase().includes(filter.toLowerCase() + "")).map(product => 
													<Product
														key={ product.infos.id }
														product={ product }
													/>
												)
										}
									</ProductsGridContainer>
							}

						</SearchContainer>
				}
			</GlobalLayout>
		
			<Toast />
		</>
	);
}

export { Search };
