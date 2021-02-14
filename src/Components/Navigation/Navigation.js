import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
			<div>
				<p className="signOut">Sign out</p>
			</div>
		</nav>
	);
};

export default Navigation;
