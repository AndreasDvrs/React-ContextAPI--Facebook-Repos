import { NormalizedRepo } from "../normalizers/normalizeRepos";

export const getFilteredReposAndPages = (repos: NormalizedRepo[], totalPages: number[], perPage: number): Record<number,NormalizedRepo[]>  => {
	let reposByPages: Record<number,NormalizedRepo[]> = {};		
	totalPages.forEach((page) => reposByPages[page] = []);
	repos.forEach((repo, index) => {
		let pageNumber: number = Math.floor((index)/perPage) + 1;
		reposByPages[pageNumber].push(repo)
	})
	return reposByPages;
}
