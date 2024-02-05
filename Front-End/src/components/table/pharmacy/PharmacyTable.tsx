import { CreatinaPNG } from "../../../assets/images/images";
import { Container } from "../../ui/containers/Container";
import { TableHeader, Image, TableData } from "../styles";

const PharmacyTable = () => {
	return (
		<>
			<link
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
				rel="stylesheet"
				integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
				crossOrigin="anonymous"
			/>
			<Container Type="table">
				<table className="table">
					<thead>
						<tr>
							<TableHeader scope="col">#</TableHeader>
							<TableHeader scope="col">Imagem</TableHeader>
							<TableHeader scope="col">Nome</TableHeader>
							<TableHeader scope="col">Descrição</TableHeader>
							<TableHeader scope="col">Preço</TableHeader>
							<TableHeader scope="col">Preço Promocional</TableHeader>
							<TableHeader scope="col">Data de criação</TableHeader>
							<TableHeader scope="col">Data de atualização</TableHeader>
							<TableHeader scope="col">Editar</TableHeader>
							<TableHeader scope="col">Remover</TableHeader>
						</tr>
					</thead>
					<tbody>
						<tr>
							<TableData className="id">
								889d4d12-08ac-4a68-8b30-d1633951d965
							</TableData>
							<TableData>
								<Image src={CreatinaPNG} />
							</TableData>
							<TableData>Rexona Desodorante Aerosol 150ml</TableData>
							<TableData>
								O desodorante Rexona Aerosol oferece uma proteção confiável
								contra o odor e a transpiração ao longo do dia, mantendo você
								fresco e confiante em qualquer situação. Com sua fórmula
								avançada, este desodorante em aerosol proporciona uma sensação
								de frescor revitalizante, enquanto controla efetivamente a
								umidade, evitando o mau odor.
							</TableData>
							<TableData>R$ 120,00</TableData>
							<TableData>-</TableData>
							<TableData>05/02/2024 às 11:55:55</TableData>
							<TableData>05/02/2024 às 11:55:55</TableData>
							<TableData>
								<button type="button" className="btn btn-outline-success">
									Editar
								</button>
							</TableData>
							<TableData>
								<button type="button" className="btn btn-danger">
									Deletar
								</button>
							</TableData>
						</tr>
						<tr>
							<TableData className="id">
								889d4d12-08ac-4a68-8b30-d1633951d965
							</TableData>
							<TableData>
								<Image src={CreatinaPNG} />
							</TableData>
							<TableData>Rexona Desodorante Aerosol 150ml</TableData>
							<TableData>
								O desodorante Rexona Aerosol oferece uma proteção confiável
								contra o odor e a transpiração ao longo do dia, mantendo você
								fresco e confiante em qualquer situação. Com sua fórmula
								avançada, este desodorante em aerosol proporciona uma sensação
								de frescor revitalizante, enquanto controla efetivamente a
								umidade, evitando o mau odor.
							</TableData>
							<TableData>R$ 120,00</TableData>
							<TableData>-</TableData>
							<TableData>05/02/2024 às 11:55:55</TableData>
							<TableData>05/02/2024 às 11:55:55</TableData>
							<TableData>
								<button type="button" className="btn btn-outline-success">
									Editar
								</button>
							</TableData>
							<TableData>
								<button type="button" className="btn btn-danger">
									Deletar
								</button>
							</TableData>
						</tr>
						<tr>
							<TableData className="id">
								889d4d12-08ac-4a68-8b30-d1633951d965
							</TableData>
							<TableData>
								<Image src={CreatinaPNG} />
							</TableData>
							<TableData>Rexona Desodorante Aerosol 150ml</TableData>
							<TableData>
								O desodorante Rexona Aerosol oferece uma proteção confiável
								contra o odor e a transpiração ao longo do dia, mantendo você
								fresco e confiante em qualquer situação. Com sua fórmula
								avançada, este desodorante em aerosol proporciona uma sensação
								de frescor revitalizante, enquanto controla efetivamente a
								umidade, evitando o mau odor.
							</TableData>
							<TableData>R$ 120,00</TableData>
							<TableData>-</TableData>
							<TableData>05/02/2024 às 11:55:55</TableData>
							<TableData>05/02/2024 às 11:55:55</TableData>
							<TableData>
								<button type="button" className="btn btn-outline-success">
									Editar
								</button>
							</TableData>
							<TableData>
								<button type="button" className="btn btn-danger">
									Deletar
								</button>
							</TableData>
						</tr>
					</tbody>
				</table>
			</Container>
		</>
	);
};

export { PharmacyTable };
