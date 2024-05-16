import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthService } from "../../../services/Auth.service";
import { ProductService } from "../../../services/Products.service";

/* UI */
import { Spinner } from "../../ui/spinner";
import { Container } from "../../ui/containers/Container";
import { DeleteButton } from "../../ui/button/delete-button/DeleteButton";

import { TableHeader, Image, TableData } from "../styles";

interface IProductTable {
	Filter: string
	onDeleteProduct: (id?: string) => void
	onEditModalVisibility: (product: IProductFullDTO) => void
}

const ProductTable = ({ Filter, onEditModalVisibility, onDeleteProduct }: IProductTable): React.ReactElement => {

	const navigate = useNavigate();
	const authService = new AuthService();
	const productService = new ProductService();
	const [products, setProducts] = useState<IProductFullDTO[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);

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
		<Container Type="no-padding w-100 table">
			<table className="table">
				<thead>
					<tr>
						<TableHeader scope="col">#</TableHeader>
						<TableHeader scope="col">Imagem</TableHeader>
						<TableHeader scope="col">Nome</TableHeader>
						<TableHeader scope="col">Descrição</TableHeader>
						<TableHeader scope="col">Preço</TableHeader>
						<TableHeader scope="col">Preço Promocional</TableHeader>
						<TableHeader scope="col">Editar</TableHeader>
						<TableHeader scope="col">Remover</TableHeader>
					</tr>
				</thead>
				<tbody>
					{
						isLoading ?
							<tr>
								<TableData className="id not-found" colSpan={ 8 }><Spinner /></TableData>
							</tr>
						:
							!Filter ?
								products.length > 0 ?
									products.map((product) =>
										<tr key={ product.infos.id }>
											<TableData className="id">
												{ product.infos.id }
											</TableData>
											<TableData>
												<Image src={ product.image } />
											</TableData>
											<TableData>{ product.infos.name }</TableData>
											<TableData>{ product.infos.description }</TableData>
											<TableData>{ product.infos.price }</TableData>
											<TableData>{ product.infos.price === product.infos.promotionalPrice ? "-" : product.infos.promotionalPrice }</TableData>
											<TableData>
												<button onClick={ () => { onEditModalVisibility(product) } } type="button" className="btn btn-outline-success">
													Editar
												</button>
											</TableData>
											<TableData>
												<DeleteButton
													Title="Confirma essa ação?"
													Description="Ao clicar para deletar, o produto será permantemente removido do sistema, logo, nenhum usuário/cliente saberá que sua loja vende esse produto. Caso marque para deletar, será possivel contornar a situação criando outro produto."
													ItemID={ product.infos.id }
													onDelete={ () => { onDeleteProduct(product.infos.id) } }
												/>
											</TableData>
										</tr>	
									)
								:
									<tr>
										<TableData className="id not-found" colSpan={ 8 }>Nenhum resultado...</TableData>	
									</tr>
							:
								products.filter((products) => products.infos.name.toLowerCase().includes(Filter.toLowerCase())).length === 0 ?
									<tr>
										<TableData className="id not-found" colSpan={ 8 }>Nenhum resultado...</TableData>
									</tr>
								:
									products.filter((products) => products.infos.name.toLowerCase().includes(Filter.toLowerCase())).map((product) =>
									<tr key={ product.infos.id }>
										<TableData className="id">
											{ product.infos.id }
										</TableData>
										<TableData>
											<Image src={ product.image } />
										</TableData>
										<TableData>{ product.infos.name }</TableData>
										<TableData>{ product.infos.description }</TableData>
										<TableData>{ product.infos.price }</TableData>
										<TableData>{ product.infos.price === product.infos.promotionalPrice ? "-" : product.infos.promotionalPrice }</TableData>
										<TableData>
											<button onClick={ () => { onEditModalVisibility(product) } } type="button" className="btn btn-outline-success">
												Editar
											</button>
										</TableData>
										<TableData>
											<DeleteButton
												Title="Confirma essa ação?"
												Description="Ao clicar para deletar, o produto será permantemente removido do sistema, logo, nenhum usuário/cliente saberá que sua loja vende esse produto. Caso marque para deletar, será possivel contornar a situação criando outro produto."
												ItemID={ product.infos.id }
												onDelete={ () => { onDeleteProduct(product.infos.id) } }
											/>
										</TableData>
									</tr>	
								)
					}
				</tbody>
			</table>
		</Container>
	);
};

export { ProductTable };
