import { Container } from "./styles";
import { WhatsappWidgetSVG } from "../../assets/icons/icons";

const WhatsappWidget = (): React.ReactElement => {
	return (
		<Container href="https://wa.me/5515996181099" target="_blank">
			<img src={ WhatsappWidgetSVG } alt="Whatsapp logo" />
		</Container>
	);
}

export { WhatsappWidget };
