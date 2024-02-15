import React from "react";
import "../delete-button/styles.css";

interface IUpdateButton {
	Label?: string
	ChangeVisibility: () => void
}

const UpdateButton = ({ Label, ChangeVisibility }: IUpdateButton): React.ReactElement => {
	
	const handleClick = (): void => {
		ChangeVisibility();
	}
	
	return <button className="RadixButtonReset Button violet" onClick={ handleClick }>{ !Label ? "Atualizar" : Label}</button>
}

export { UpdateButton };
