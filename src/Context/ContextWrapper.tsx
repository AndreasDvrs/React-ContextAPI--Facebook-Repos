import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import { fetchRepos } from '../api/fetch-repos';
import { NormalizedRepo, normalizeRepos } from '../normalizers/normalizeRepos';
import { checkTotalPages } from '../utils/checkTotalPages';
import { getFilteredReposAndPages } from '../utils/getFilteredReposAndPages';
import { sortByNameOrStars } from '../utils/sorting';

export const GlobalContext = createContext(null as any);

export const ContextWrapper = (props: any) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [allRepos, setAllRepos] = useState<NormalizedRepo[]>([]);
	const [filteredRepos, setFilteredRepos] = useState<Record<number,NormalizedRepo[]>>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [sortBy, setSortBy] = useState<string>('');
	const [perPage, setPerPage] = useState<number>(8);
	const [totalPages, setTotalPages] = useState<number[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		fetchRepos()
		.then((repos: any) => {
			let normalizedRepos: NormalizedRepo[] = normalizeRepos(repos);
			setAllRepos(normalizedRepos);
			const newTotalPages: number[] = checkTotalPages(normalizedRepos.length, 8);
			const filteredRepositories: Record<number,NormalizedRepo[]>  = getFilteredReposAndPages(normalizedRepos, newTotalPages, 8);
			setFilteredRepos(filteredRepositories);
			setTotalPages(newTotalPages);
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [perPage, searchTerm, sortBy]);

	const updateSearchTerm = (currentSearchTerm: string): void => {
		if (currentSearchTerm !== searchTerm) {
			let caseInsensitiveRegex = new RegExp(currentSearchTerm, "i");
			let reposOfInterest: NormalizedRepo[] = allRepos.filter((repo) => {
				if (!currentSearchTerm) {
					return true;
				} 
				return caseInsensitiveRegex.test(repo.name);
			});
			if (sortBy) {
				reposOfInterest = sortByNameOrStars[sortBy](reposOfInterest);
			}
			let newTotalPages: number[] = checkTotalPages(reposOfInterest.length, perPage);
			let reposToSet: Record<number,NormalizedRepo[]> = getFilteredReposAndPages(reposOfInterest, newTotalPages, perPage);			
			setFilteredRepos(reposToSet);
			setTotalPages(newTotalPages);
			setSearchTerm(currentSearchTerm);
		}
	}
	
	const updatePerPage = (currentPerPage: number): void => {
		if (currentPerPage !== perPage) {
			let allReposFilteredFlat: NormalizedRepo[] = Object.values(filteredRepos).flat();
			const newTotalPages: number[] = checkTotalPages(allReposFilteredFlat.length, currentPerPage);
			let updatedFilteredRepos: Record<number,NormalizedRepo[]> = getFilteredReposAndPages(allReposFilteredFlat, newTotalPages, currentPerPage);
			setFilteredRepos(updatedFilteredRepos);
			setTotalPages(newTotalPages);
			setPerPage(currentPerPage);
		}
	}	

	const updateSortBy = (currentSortBy: string): void => {
		if (sortBy !== currentSortBy) {
			const allReposFilteredFlat: NormalizedRepo[] = Object.values(filteredRepos).flat();
			const sortedFilteredRepos: NormalizedRepo[] = sortByNameOrStars[currentSortBy](allReposFilteredFlat);
			const updatedFilteredRepos: Record<number,NormalizedRepo[]> = getFilteredReposAndPages(sortedFilteredRepos, totalPages, perPage)
			setFilteredRepos(updatedFilteredRepos);
			setSortBy(currentSortBy);
		}
	}

	const updateCurrentPage = (clickedPage: number): void => {
		setCurrentPage(clickedPage);
	}

	return (
		<GlobalContext.Provider value={{ 
			loading, filteredRepos, totalPages, currentPage,
			updateSearchTerm, updateSortBy, updatePerPage, updateCurrentPage,
		}}>
			{props.children}
		</GlobalContext.Provider>
	)		
}
