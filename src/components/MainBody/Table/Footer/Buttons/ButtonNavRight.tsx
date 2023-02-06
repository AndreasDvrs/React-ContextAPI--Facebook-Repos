import { useContext } from "react";
import { GlobalContext } from "../../../../../Context/ContextWrapper";
import { GlobalContextApi } from "../../../../../Context/types";

const ButtonNavRight = () => {

	const { totalPages, currentPage, updateCurrentPage } = useContext<GlobalContextApi>(GlobalContext);	

  return (
	<button 
		type="button"
		onClick={() => updateCurrentPage(currentPage+1)} 
		className={`Pagination__Element__Nav Pagination__Element ${currentPage === totalPages.length ? "Disabled" : ''}`}
		disabled={currentPage === totalPages.length}
	>
		<svg viewBox="-1 3 22 18">
			<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
		</svg>
	</button>
  )
}

export default ButtonNavRight;
