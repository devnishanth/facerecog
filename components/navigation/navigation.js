import React from 'react';

const Navigation = ({onRouteChange}) => {
	
	return(
		<nav style={{display: 'flex',justifyContent: 'flex-end'}}>
			<p className='f3 link dim black pa3 underline pointer' onClick={()=>onRouteChange('signin')}>Sign Out</p>
		</nav>

);
}

export default Navigation;