import React from "react";
import "./styles.css";

function Image(props) {
	return (
		<div className="img-container">
			<img alt={props.name} src={props.src} key={props.id} className="img-thumbnail"/>
		</div>
	);
};

export default Image;