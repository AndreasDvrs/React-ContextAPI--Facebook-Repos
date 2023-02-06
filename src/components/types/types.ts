export type SortByOptionsValues = "name"|"stars";
export type SortByOptionsLabels = "Name"|"Stars count";

export interface SortByOptions {
	value: SortByOptionsValues;
	label: SortByOptionsLabels;
}

export type PerPageOptionsValues = 8|16;
export type PerPageOptionsLabels = 8|16;

export interface PerPageOptions {
	value: PerPageOptionsValues;
	label: PerPageOptionsLabels;
}

export type SelectType="sortBy"|"perPage";