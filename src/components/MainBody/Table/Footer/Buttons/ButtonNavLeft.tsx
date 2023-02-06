import { useContext } from "react";
import { GlobalContext } from "../../../../../Context/ContextWrapper";
import { GlobalContextApi } from "../../../../../Context/types";

const ButtonNavLeft = () => {

	const { currentPage, updateCurrentPage } = useContext<GlobalContextApi>(GlobalContext);

  return (
	<button
		type="button"
		disabled={currentPage === 1}
		onClick={() => updateCurrentPage(currentPage-1)}
		className={`Pagination__Element Pagination__Element__Nav ${currentPage === 1 ? "Disabled" : ''}`}
	>
		<svg viewBox="0 3 22 18">
			<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
		</svg>
	</button>
  )
}

export default ButtonNavLeft;
