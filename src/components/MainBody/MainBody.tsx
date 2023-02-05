import React from 'react'
import SearchBar from './SearchBar/SearchBar';
import Table from './Table/Table';

const MainBody = () => {
  return (
	<div className="Main__Body__Container">
		<SearchBar/>
		<Table/>
	</div>	
  )
}

export default MainBody;
