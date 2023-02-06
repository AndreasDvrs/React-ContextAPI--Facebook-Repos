import { useContext, useMemo } from "react";
import { GlobalContext } from "../../../../Context/ContextWrapper";
import { GlobalContextApi } from "../../../../Context/types";
import PaginationButtonNum from "./Buttons/PaginationButtonNum";
import PaginationEllipsis from "./Buttons/PaginationEllipsis";

const Pagination = () => {

	const { currentPage, totalPages } = useContext<GlobalContextApi>(GlobalContext);
	
	const memoizedPagination = useMemo(() => (
		<>
			{totalPages.length <= 7 &&
				<>
					{totalPages.map((page) => (
						<PaginationButtonNum 
							number={page}
							active={page === currentPage}
						/>
					))}
				</>
			}
			{totalPages.length > 7 &&
				<>
					{currentPage-2 > 1 && currentPage + 2 < totalPages.length &&					
						<>
							<PaginationButtonNum 
								number={1}
								active={1 === currentPage}								
							/>
							<PaginationEllipsis />						
							{[currentPage-1, currentPage, currentPage+1].map((page) => (
								<PaginationButtonNum 
									number={page}
									active={page === currentPage}
									key={Number(`${currentPage}${page}`)}
								/>
							))}
							<PaginationEllipsis />							
							<PaginationButtonNum
								number={totalPages.length}
								active={false}
							/>
						</>
					}
					{currentPage - 2 <= 1 &&
						<>
							{[1,2,3,4,5].map((page) => (
								<PaginationButtonNum 
									number={page}
									active={page===currentPage}
									key={Number(`${currentPage}${page}`)}
								/>
							))}
							<PaginationEllipsis />
							<PaginationButtonNum 
								number={totalPages.length}
								active={false}
							/>
						</>
					}
					{currentPage + 2 >= totalPages.length &&
						<>
							<PaginationButtonNum 
								number={1}
								active={false}
							/>
							<PaginationEllipsis />
							{[totalPages.length -4, totalPages.length -3, totalPages.length-2 , totalPages.length -1, totalPages.length].map((page) => (
								<PaginationButtonNum 
									number={page}
									active={page === currentPage}
									key={Number(`${currentPage}${page}`)}
								/>
							))}
						</>
					}
				</>
			}
		</>
	), [currentPage, totalPages]);

	return memoizedPagination;
}

export default Pagination;
