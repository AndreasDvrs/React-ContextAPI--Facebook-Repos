import { resultsPerPageOptions, sortByOptions } from "../../../constants/constants";
import Select from "../../../Select/Select";


const TableHeader = () => {

  return (
	<thead>
		<tr className="Table__Header">
			<td className="Table__Header__Text">
				Repository results
			</td> 
			<td className="Sort__Per__Page__Container">
				<div className="Sort__By__Container">
					<Select
						defaultValue="Sort By"
						options={sortByOptions}
						selectType="sortBy"
					/>
				</div>
				<div className="Results__Per__Page">
					<label htmlFor="results_per_page" className="Label__Results">results per page</label> 
					<Select
						options={resultsPerPageOptions}
						defaultSelectedOption={resultsPerPageOptions[0]}
						selectType="perPage"
					/>
				</div>
			</td>
		</tr>
	</thead>
  )
}

export default TableHeader;
