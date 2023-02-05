import React, { useState } from 'react';

const totalRepos = 18;
const reposPerPage= 3;
let totalPages: number[] = [];

const TableFooter = () => {

	const [activePage, setActivePage] = useState<number>(1);

	if (totalRepos%reposPerPage > 0) {
		totalPages = Array.from(Array(totalRepos/reposPerPage +1).keys());
	} else {
		totalPages = Array.from(Array(totalRepos/reposPerPage).keys());
	}
	console.log("🚀 ~ file: TableFooter.tsx:41 ~ TableFooter ~ totalPages", totalPages)

	//construct pages and memeo ALSO ADD THE ACTIVE ONE AS CLASS

  return (
	<tfoot>
		<tr className="Pagination">
			<td className="Pagination__Row">
				{/* <div className="Pagination__Container"> */}
					<button type="button" className="Pagination__Element Pagination__Element__Nav">
						<svg viewBox="0 3 22 18">
							<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
						</svg>
					</button>
					<div className="Pagination__Numbers">
					{totalPages.map((page) => {
						if (page <=2) {
							return <button className="Pagination__Element__Number Pagination__Element" key={page} type="button">{page+1}</button>
						}
						<></>
					})}
					{totalPages.length > 4 &&
						<div className="Pagination__Element__Ellipsis Pagination__Element">...</div>

					}
					{totalPages.length > 3 &&
						<button className="Pagination__Element__Number Active__Page Pagination__Element" type="button" >{totalPages.length}</button>
					}
					
					{/* <div className="Pagination__Element__Number">{totalPages.length}</div> */}
					</div>
					<button className="Pagination__Element__Nav Pagination__Element" type="button">
						<svg viewBox="-1 3 22 18">
							<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
						</svg>
					</button>
				{/* </div> */}
			</td>
		</tr>
	</tfoot>
  )
}
	

export default TableFooter;