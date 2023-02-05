import React, { useState } from 'react';

const TableHeader = () => {

  return (
	<thead>
		<tr className="Table__Header">
			<td className="Table__Header__Text">
				Repository results
			</td> 
			<td className="Sort__Per__Page__Container">
				<div className="Sort__By__Container">
					<button type="button" defaultValue="Sort__By" className="Sort__By__Select">
						<option style={{display:"none"}} value="sortby">Sort By</option>
						<option value="name">Name</option>
						<option value="stars">Stars</option>
					</button>
				</div>
				<div className="Results__Per__Page">
					<label htmlFor="results_per_page" className="Label__Results">results per page</label> 
					<button id="results_per_page" className="Results__Select">					
						<option value="name">4</option>
						<option value="stars">8</option>
					</button>
				</div>
			</td>
		</tr>
	</thead>
  )
}

export default TableHeader;
