import { useEffect, useState } from "react";
import { HeaderAlternative } from "../../components/header/header-alternative";
import { WhatsappWidget } from "../../components/whatsapp-widget";
import { GlobalContainer } from "../../pages/styles/global";
import { AuthService } from "../../services/Auth";

interface IGlobalLayoutProps {
	children: React.ReactNode
}

const GlobalLayout = ({ children }: IGlobalLayoutProps) => {

	const authService = new AuthService();

	return (
		<GlobalContainer>
			<HeaderAlternative isLogged={ authService.isLogged() } />
			{ children }
			<WhatsappWidget />
		</GlobalContainer>
	);
}

export { GlobalLayout };
