import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import "../radix.styles.css";

interface IUpdateTierButton {
	Title: string | undefined
	UserId: string
	UserTier: string
	Description: string | undefined
	onUpdateTier: (id: string, tier: string) => void
}

const UpdateTierButton = ({ Title, Description,  UserTier,  UserId, onUpdateTier }: IUpdateTierButton): React.ReactElement => {
	
	const handleClick = (): void => {
		onUpdateTier(UserId, UserTier);
	}
	
	return (
		<AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="btn btn-outline-info">Atualizar</button>
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
            <button className="Button violet RadixButtonReset" onClick={ handleClick }>Atualizar</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>

	);
}

export { UpdateTierButton };
