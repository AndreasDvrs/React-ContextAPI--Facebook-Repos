import React, { useContext } from 'react';
import { GlobalContext } from '../../../../Context/ContextWrapper';
import { GlobalContextApi } from '../../../../Context/types';

const TableFooter = () => {

	const { totalPages, currentPage, updateCurrentPage } = useContext<GlobalContextApi>(GlobalContext);

	const handleClick = (page: number) => {		
		updateCurrentPage(page);
	}

  return (
	<tfoot>
		<tr className="Pagination">
			<td className="Pagination__Row">
				{currentPage !== 1 &&
					<button onClick={() => updateCurrentPage(currentPage-1)} type="button" className="Pagination__Element Pagination__Element__Nav">
						<svg viewBox="0 3 22 18">
							<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
						</svg>
					</button>
				}					
				<div className="Pagination__Numbers">
				{1 <= currentPage && currentPage <=3 && 
					<>
						<button 
							className={`Pagination__Element__Number Pagination__Element ${1 === currentPage ? 'Active__Page' : ''}`}  
							onClick={() => handleClick(1)} 
							key={1} 
							type="button"
						>
								{1}
						</button>								
						{totalPages.length > 1 && 
								<button 
									className={`Pagination__Element__Number Pagination__Element ${2 === currentPage ? 'Active__Page' : ''}`}  
									onClick={() => handleClick(2)} 
									key={2} type="button"
								>
									{2}
								</button>
						}
						{totalPages.length > 2 && 
							<button 
							className={`Pagination__Element__Number Pagination__Element ${3 === currentPage ? 'Active__Page' : ''}`} 
								onClick={() => handleClick(3)} 
								key={3} 
								type="button"
							>
								{3}
							</button>
						}
						{totalPages.length > 3 && <div className="Pagination__Element__Ellipsis Pagination__Element">...</div>}
						{totalPages.length > 4 && 
							<button 
								className={`Pagination__Element__Number Pagination__Element`} 
								onClick={() => handleClick(totalPages.length)} 
								type="button" >
									{totalPages.length}
							</button>
							}
					</>
				}
				{3 < currentPage && currentPage < totalPages.length-2 && 
					<>
						<button className='Pagination__Element__Number Pagination__Element' onClick={() => handleClick(1)} key={1} type="button">{1}</button>
						<div className="Pagination__Element__Ellipsis Pagination__Element">...</div>
						{
							[currentPage-1, currentPage, currentPage+1].map((page) => (
								<button onClick={() => handleClick(page)} className={`Pagination__Element__Number Pagination__Element ${page === currentPage ? 'Active__Page' : ''}`} key={page} type="button">{page}</button>
							))
						}
						<div className="Pagination__Element__Ellipsis Pagination__Element">...</div>
						<button className={`Pagination__Element__Number Pagination__Element`} onClick={() => handleClick(totalPages.length)} type="button" >{totalPages.length}</button>
					</>
				}
				{totalPages.length -2 > 0 && totalPages.length -2  <= currentPage &&
					<>
						<button onClick={() => handleClick(1)} className='Pagination__Element__Number Pagination__Element' key={1} type="button">{1}</button>
						<div className="Pagination__Element__Ellipsis Pagination__Element">...</div>
						{
							[totalPages.length-2, totalPages.length-1, totalPages.length].map((page) => (
								<button 
									className={`Pagination__Element__Number Pagination__Element ${page === currentPage ? 'Active__Page' : ''}`} 
									key={page} type="button"
									onClick={() =>handleClick(page) }
								>{page}</button>
							))
						}
					</>
				} 
				</div>
				{totalPages.length && (currentPage !== totalPages.length) 
					?	<button onClick={() => updateCurrentPage(currentPage+1)} className="Pagination__Element__Nav Pagination__Element" type="button">
							<svg viewBox="-1 3 22 18">
								<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
							</svg>
						</button> 
					: <></>
				}
			</td>
		</tr>
	</tfoot>
  )
}
	

export default TableFooter;