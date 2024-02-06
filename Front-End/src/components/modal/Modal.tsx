import ReactModal from "react-modal";
import { CloseBtn } from "./styles";

interface IModalProps {
	isOpen: boolean
	onRequestClose: () => void
	children?: React.ReactNode | undefined
}

const Modal = ({ children, isOpen, onRequestClose }: IModalProps) => {
	return (
		<ReactModal
			isOpen={ isOpen }
			onRequestClose={ onRequestClose }
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
			ariaHideApp={ false }
		>
			{ children }
			<CloseBtn onClick={ onRequestClose }>
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
					<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
				</svg>
			</CloseBtn>
		</ReactModal>
	);
}

export { Modal };
