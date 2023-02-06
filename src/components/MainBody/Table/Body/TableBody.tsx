import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../../Context/ContextWrapper';
import { GlobalContextApi } from '../../../../Context/types';
import expandPath from '../../../IconPaths/expand';
import starPath from '../../../IconPaths/star';

const TableBody = () => {

	const [expandedRepoIds, setExpandedRepoIds] = useState<Array<number>>([]);

	const { filteredRepos, currentPage } = useContext<GlobalContextApi>(GlobalContext);

	const handleRowClick = (id: number): void => {
		if (expandedRepoIds.includes(id)) {
			setExpandedRepoIds([...expandedRepoIds.filter((repoId) => repoId !== id )]);
			return;
		}
		setExpandedRepoIds([...expandedRepoIds, id]);
	}

  return (
	<tbody>
		{!filteredRepos[currentPage]?.length && <tr><td>No repositories found</td></tr>}
		{filteredRepos && filteredRepos[currentPage]?.map((data1: any) => (
				<tr 
					key={data1.id} 
					className={expandedRepoIds.includes(data1.id) ? 'Body__Table__Row__Selected' : 'Body__Table__Row'} 
					onClick={() => handleRowClick(data1.id)}
				>
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
					{expandedRepoIds.includes(data1.id) && 
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
