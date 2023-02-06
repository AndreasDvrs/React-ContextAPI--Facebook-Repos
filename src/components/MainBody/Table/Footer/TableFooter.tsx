import ButtonNavLeft from "./Buttons/ButtonNavLeft";
import ButtonNavRight from "./Buttons/ButtonNavRight";
import CurrentPageIsOneToThree from "./MemoizedPagination";

const TableFooter = () => {

  return (
	<tfoot>
		<tr className="Pagination">
			<td className="Pagination__Row">
				<ButtonNavLeft />					
				<div className="Pagination__Numbers">
					<CurrentPageIsOneToThree />
				</div>
				<ButtonNavRight />
			</td>
		</tr>
	</tfoot>
  )
}
	

export default TableFooter;