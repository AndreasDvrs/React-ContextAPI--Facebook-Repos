export const fetchRepos = (perPage: number =100, currentPage: number = 1): Promise<any> => {
	return fetch(`https://api.github.com/users/facebook/repos?per_page=${perPage}&page=${currentPage}`)
		.then((response) => {
			return response.json().then((repos) => repos)
		});
}