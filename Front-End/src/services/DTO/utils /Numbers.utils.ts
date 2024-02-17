export function getDefaultNumber(number: string): string {
	return number.replace(/[^\d]/g, '');
}

export function convertToNumber(price: string): number {
	let numberString: string = price.replace(/[^\d,]/g, '');
	numberString = numberString.replace(',', '.');
	return parseFloat(numberString);
}
