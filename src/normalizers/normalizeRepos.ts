export interface NormalizedRepo {
	id: number;
	name: string;
	description: string;
	stars: number;
}

export const normalizeRepos = (repositories: any): NormalizedRepo[] => (
 	repositories.map((repo: any) => {
		return {
			id: repo.id,
			name: repo.name,
			description: repo.description,
			stars: repo.stargazers_count
		}
	})
)
