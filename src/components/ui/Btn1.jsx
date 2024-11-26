import React from 'react';
import { Link } from 'react-router-dom';

export const Btn1 = (props) => {
	return (
		<Link to={props.red} className={`inline-block ${props.color} text-sm font-medium py-3 px-6 rounded transition`}>
			{props.title}
		</Link>
	);
};

export const BtnA = (props) => {
	return (
		<a href={props.red} className={`inline-block ${props.color} text-sm font-medium py-3 px-6 rounded transition`}>
			{props.title}
		</a>
	);
};

export default BtnA;
