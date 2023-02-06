import { useContext } from 'react'
import { GlobalContext } from '../../../../../Context/ContextWrapper';
import { GlobalContextApi } from '../../../../../Context/types';
import { PaginationButtonProps } from '../types';


const PaginationButtonNum = ({number, active}: PaginationButtonProps) => {

	const { updateCurrentPage, currentPage } = useContext<GlobalContextApi>(GlobalContext);

  return (
	<button 
		type="button"
		className={`Pagination__Element__Number Pagination__Element ${active ? "Active__Page" : ""}`}
		onClick={() => updateCurrentPage(number)}
	>
		{number}
	</button>
  )
}

export default PaginationButtonNum;
