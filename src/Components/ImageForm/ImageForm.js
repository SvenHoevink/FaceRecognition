import React from 'react';
import './ImageForm.css';

const ImageForm = () => {
	return (
		<div className="imageFormBox">
			<p className="insertImage">insert image below</p>
			<input type="text" className="textBox" />
			<button className="button">Detect</button>
		</div>
	);
};

export default ImageForm;
