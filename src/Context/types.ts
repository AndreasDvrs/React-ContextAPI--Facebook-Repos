import { PerPageOptionsValues, SortByOptionsValues } from "../components/types/types";
import { NormalizedRepo } from "../normalizers/normalizeRepos";

export interface  GlobalContextApi {
	loading: boolean; 
	filteredRepos: Record<number,NormalizedRepo[]>;
	totalPages: number[];
	currentPage: number;
	updateSearchTerm: (searchTerm: string) => void;
	updateSortBy: (sortBy: SortByOptionsValues) => void;
	updatePerPage: (perPage: PerPageOptionsValues) => void;
	updateCurrentPage: (currentPage: number) => void;
}