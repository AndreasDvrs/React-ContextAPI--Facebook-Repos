import { useContext } from "react";
import { GlobalContext } from "../../../../Context/ContextWrapper";
import { GlobalContextApi } from "../../../../Context/types";
import ButtonNavLeft from "./Buttons/ButtonNavLeft";
import ButtonNavRight from "./Buttons/ButtonNavRight";
import CurrentPageIsOneToThree from "./MemoizedPagination";

const TableFooter = () => {

	const { filteredRepos } = useContext<GlobalContextApi>(GlobalContext)

	const filteredReposExist = Object.keys(filteredRepos);

  return (
	<tfoot>
		<tr className="Pagination">
			<td className="Pagination__Row">
				{filteredReposExist.length ? <ButtonNavLeft /> : <></>}
				<div className="Pagination__Numbers">
					<CurrentPageIsOneToThree />
				</div>
				{filteredReposExist.length ? <ButtonNavRight /> : <></>}
			</td>
		</tr>
	</tfoot>
  )
}
	

export default TableFooter;