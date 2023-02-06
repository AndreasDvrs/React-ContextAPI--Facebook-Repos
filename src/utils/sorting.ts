import { NormalizedRepo } from "../normalizers/normalizeRepos";

export const sortByNameOrStars: Record<string, Function> = {
	"name": (repos: NormalizedRepo[]) => sortByName(repos),
	"stars": (repos: NormalizedRepo[]) => sortByStars(repos),
	"": (repos: NormalizedRepo[]) => repos
}

export const sortByName = (repos: NormalizedRepo[]): NormalizedRepo[] => {
	return ([
		...repos.sort((repo1: NormalizedRepo, repo2: NormalizedRepo) => {
			const repo1Name = repo1.name.toLocaleLowerCase();
			const repo2Name = repo2.name.toLocaleLowerCase();
			if (repo1Name > repo2Name) return 1
			else if (repo1Name < repo2Name) return -1
			return 0
		})
	])
}

export const sortByStars = (repos: NormalizedRepo[]): NormalizedRepo[] => {
	return ([
		...repos.sort((repo1: NormalizedRepo, repo2: NormalizedRepo) => {
			return repo1.stars > repo2.stars ? -1 : repo1.stars < repo2.stars ? 1 : 0
		})
	]);
}
