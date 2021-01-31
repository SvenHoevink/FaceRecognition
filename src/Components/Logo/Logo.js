import { render } from '@testing-library/react';
import React from 'react';
import logo from './logo.jpg';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
	return (
		<div className="imageBox">
			<Tilt className="Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }}>
				<img src={logo} className="picture" />
			</Tilt>
		</div>
	);
};

export default Logo;
