import React from 'react';
import TableBody from './Body/TableBody';
import TableFooter from './Footer/TableFooter';
import TableHeader from './Header/TableHeader';

const Table = () => {
  return (
	<table className="Table">
		<TableHeader/>
		<TableBody/>
		<TableFooter/>
	</table>
  )
}

export default Table;
