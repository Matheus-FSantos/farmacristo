import { Container } from "../../ui/containers/Container";
import { TableHeader, Image, TableData } from "../styles";
import { DeleteButton } from "../../ui/button/delete-button/DeleteButton";
import { useEffect, useState } from "react";
import { ProductService } from "../../../services/Products.service";
import { AuthService } from "../../../services/Auth.service";
import { useNavigate } from "react-router-dom";

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

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		productService.findAll().then((data) => {
			setProducts(data);
		}).catch(() => {
			handleLogout()
		});
	}, []);

	return (
		<Container Type="no-padding w-100">
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
								<TableData className="id not-found" colSpan={ 8 }>Nenhum resultado...</TableData>	
						:
							products.filter((products) => products.infos.name.toLowerCase().includes(Filter.toLowerCase())).length === 0 ?
								<TableData className="id not-found" colSpan={ 8 }>Nenhum resultado...</TableData>
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
