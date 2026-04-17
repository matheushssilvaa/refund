export function formatPrice(
	value: number | string,
	locale: string = "pt-BR",
	currency: string = "BRL"
): string {
	const numberValue =
		typeof value === "string" ? parseFloat(value) : value;

	if (isNaN(numberValue)) return "";

	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
	}).format(numberValue);
}