import { Navigate } from "react-router-dom";
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
					<Navigate to="/sign-in" replace />
			}
		</div>
	);
}

export { PrivateRoute };
