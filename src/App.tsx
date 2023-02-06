import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import { GlobalContext } from "./Context/ContextWrapper";
import { GlobalContextApi } from "./Context/types";
const App = () => {

	const { loading } = useContext<GlobalContextApi>(GlobalContext);
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
