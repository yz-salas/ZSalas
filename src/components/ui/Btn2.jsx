import React from 'react';
import { Link } from 'react-router-dom';

const Btn2 = (props) => {
	return (
		<div>
			<Link to={props.red} className={props.className}>
				{props.title}
			</Link>
		</div>
	);
};

export default Btn2;
