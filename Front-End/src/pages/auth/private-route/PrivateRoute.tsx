import { AuthService } from "../../../services/Auth";

interface IPrivateRouteProps {
	children: React.ReactNode
}

const PrivateRoute = ({ children }: IPrivateRouteProps): React.ReactElement => {
	const authService = new AuthService();
	
	return(
		<div>
			{
				authService.isLogged() ?
					children
				:
					<h1>Não está logado!</h1>
			}
		</div>
	);
}

export { PrivateRoute };
