import React, { useEffect, useState } from 'react';
import expandPath from '../../../IconPaths/expand';
import starPath from '../../../IconPaths/star';

const data = [
	{
		id: "1",
		name: "This is a repo nameThis is a repo nameThis is a repo nameThis is a repo nameThis is a repo nameThis is a repo name",
		stars: 50,
		description: "This is a repo description"
	},
	{
		id: "2",
		name: "This is a repo name",
		stars: 50,
		description: "This is a repo description"
	},
	{
		id: "3",
		name: "This is a repo name",
		stars: 50,
		description: "This is a repo description"
	},
	{
		id: "4",
		name: "This is a repo name",
		stars: 50,
		description: "This is a repo description"
	},
	{
		id: "5",
		name: "This is a repo name",
		stars: 50,
		description: "This is a repo description"
	},
	{
		id: "6",
		name: "This is a repo name",
		stars: 50,
		description: "This is a repo description"
	},
	{
		id: "7",
		name: "This is a repo name",
		stars: 50,
		description: "This is a repo description"
	},
	{
		id: "8",
		name: "This is a repo name",
		stars: 50,
		description: "This is a repo description"
	},
	{
		id: "9",
		name: "This is a repo name",
		stars: 50,
		description: "This is a repo description"
	}
]


const TableBody = () => {

	const [expandedRepoIds, setExpandedRepoIds] = useState<Array<string>>([]);	

	const handleRowClick = (id: string) => {
		if (expandedRepoIds.includes(id)) {
			setExpandedRepoIds([...expandedRepoIds.filter((repoId) => repoId !== id )]);
			return;
		}
		setExpandedRepoIds([...expandedRepoIds, id]);
	}

  return (
	<tbody>
		{
			data.map((data1: any) => (
				<tr key={data1.id} className={expandedRepoIds.includes(data1.id) ? 'Body__Table__Row__Selected' : 'Body__Table__Row'} onClick={() => handleRowClick(data1.id)}>
					<td className="Repo__Name__Container">
						<div className="Repo__Name">{data1.name ?? 'No Name Found'}</div>				
					</td>
					<td className="Cell__Star">
						<div className="Star__Container">
							<svg viewBox="-2.88 -2.88 29.76 29.76">
								<path d={starPath}></path>
							</svg>
							<div>{data1.stars ?? 0}</div>
						</div>
					</td>
					<td className="Expand__Container">
						<svg viewBox="0 0 24 24" className="Expand__Repo">
							<path d={expandPath}></path>
						</svg>
					</td>			
					{
						expandedRepoIds.includes(data1.id) && 
							<td className="Description__Row">
								<div className="Description__Content">
									<div className="Description__Title">Description:</div>
									<div className="Description">{data1.description ?? 'No Description Found'}</div>
								</div>
							</td> 
					}
				</tr>
				
			))
		}
	</tbody>
  )
}

export default TableBody;