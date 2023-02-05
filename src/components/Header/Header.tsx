import React from 'react';
import FacebookIconPath from '../IconPaths/facebook';

const Header = () => {
  return (
	<header className="Header">
	<div className="Logo__Container">
		<a href="https://www.facebook.com" target="_blank" rel="noreferrer">
			<svg fill="#000000" viewBox="0 0 310 310">
				<path d={FacebookIconPath}/>
			</svg>
		</a>
		<span className="Icon__Text">Repository</span>
	</div>	
  </header>
  )
}

export default Header;
