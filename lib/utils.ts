export function formatNumberWithK(value: number) {
	return value < 1000 ? value : `${(value / 1000).toFixed(1)}K`;
}
