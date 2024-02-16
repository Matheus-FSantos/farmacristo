export function getDefaultCEP(CEP: string): string {
	return CEP.replace(/[^\d]/g, '');
}
