import { PerPageOptions, SortByOptions } from "../types/types"

export const sortByOptions: SortByOptions[] = [
	{value: "name", label: "Name"},
	{value: "stars", label: "Stars count"}
]


export const resultsPerPageOptions: PerPageOptions[] = [
	{value: 8, label: 8},
	{value: 16, label: 16},
]
