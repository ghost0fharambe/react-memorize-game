import React from "react";
import "./style.css";

function Image(props) {
	return (
		<div className="img-container">
			<img alt={props.name} src={props.src} key={props.id} />
		</div>
	);
};

export default Image;