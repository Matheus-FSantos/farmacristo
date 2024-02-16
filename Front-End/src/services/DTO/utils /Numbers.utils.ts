export function getDefaultNumber(number: string): string {
	return number.replace(/[^\d]/g, '');
}
