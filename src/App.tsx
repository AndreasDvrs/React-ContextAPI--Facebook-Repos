import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';


function App() {

	const [loading, setLoading] = useState(false);

  return (
    <div className="App">
		{loading 
			?	<div className="Loading">
					<Header/>
					<div className="Spinner__With__Text">
					<div className="loader"></div>
						loading
					</div>
				</div>
			:	<>
					<Header/>
					<MainBody/>
				</>
	}		
    </div>
  );
}

export default App;
