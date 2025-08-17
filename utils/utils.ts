export function suffix(value: number): string {
	return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toString();
}

export function localeString(value: string): string {
	return new Date(value).toLocaleString("id", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}
