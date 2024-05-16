import React, { useEffect, useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import "../radix.styles.css";
import styled from "styled-components";
import { CurriculumService } from "../../../../services/Curriculum.service";
import { AuthService } from "../../../../services/Auth.service";
import { useNavigate } from "react-router-dom";

import Cv from "../../../../assets/files/Curriculo Matheus Ferreira Santos - PTBR.pdf";

interface IViewCvButtonProps {
	CurriculumId: string
}

const ViewCvButton = ({ CurriculumId }: IViewCvButtonProps): React.ReactElement => {
	const newPlugin = defaultLayoutPlugin();
	
	const navigate = useNavigate();
	const authService = new AuthService();
	const curriculumService = new CurriculumService();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [cv, setCv] = useState<string>("");

	useEffect(() => {
		try {
			const credentials = authService.getCredentials();
			setIsLoading(true);

			curriculumService.findCurriculumCvById(credentials.email, credentials.password, CurriculumId).then((data) => {
				setCv(data);
				setIsLoading(false);
			}).catch(() => {
				handleLogout();
				setIsLoading(false);
			});
		} catch (error) { }
	}, []);

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>
				<button className="RadixButtonReset Button violet" disabled={ !cv ? true : false }>Visualizar</button>
			</AlertDialog.Trigger>
			
			<AlertDialog.Portal>
				<AlertDialog.Overlay className="AlertDialogOverlay" />
				<AlertDialog.Content className="AlertDialogContent AlertDialogToCv">
					<div style={{
						display: "flex",
						flexDirection: "column",
						gap: "20px",
					}}>
						<AlertDialog.Title className="AlertDialogTitle">Currículo</AlertDialog.Title>

						<PdfContainer>
							{
								cv && <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
												<Viewer fileUrl={ cv } plugins={[ newPlugin ]} />
											</Worker>
							}
						</PdfContainer>

						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<AlertDialog.Cancel asChild>
								<button className="Button mauve RadixButtonReset">Fechar</button>
							</AlertDialog.Cancel>
						</div>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
  	</AlertDialog.Root>
	);
}

export { ViewCvButton };

const PdfContainer = styled.div`
	width: 100%;
	height: 37.5rem; /* 600px */

	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 767px) {
		height: 31.25rem; /* 500px */
	}

	@media only screen and (max-width: 380px) {
		height: 21.875rem; /* 350px */
	}
`;
