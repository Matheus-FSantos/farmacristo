import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import "./styles.css";

interface IDeleteButton {
	Type?: string
	ItemID: string
	Label?: string
	Title: string | undefined
	onDelete: (id: string) => void
	Description: string | undefined
}

const DeleteButton = ({ Type, Label, Title, Description, ItemID, onDelete }: IDeleteButton): React.ReactElement => {
	
	const handleClick = (): void => {
		onDelete(ItemID);
	}
	
	return (
		<AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className={ !Type ? "btn btn-danger" : "RadixButtonReset Button red" }>{ !Label ? "Deletar" : Label}</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">{ Title }</AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          { Description }
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button className="Button mauve RadixButtonReset">Cancelar</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="Button red RadixButtonReset" onClick={ handleClick }>Deletar</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>

	);
}

export { DeleteButton };
