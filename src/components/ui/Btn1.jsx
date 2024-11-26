import React from 'react';

const Btn1 = (props) => {
	return (
		<a href={props.red} className={`inline-block ${props.color} text-sm font-medium py-3 px-6 rounded transition`}>
			{props.title}
		</a>
	);
};

export default Btn1;
