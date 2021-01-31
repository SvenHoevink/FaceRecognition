import React from 'react';
import './ImageForm.css';

const ImageForm = () => {
	return (
		<div className="imageFormBox">
			<p>insert image here</p>
			<div className="centerFlex">
				<input type="text" className="textBox" />
				<button className="button">Detect</button>
			</div>
		</div>
	);
};

export default ImageForm;
