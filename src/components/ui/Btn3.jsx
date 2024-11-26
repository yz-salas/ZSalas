import React from 'react';
import { Link } from 'react-router-dom';

const Btn3 = () => {
	return (
		<>
			<Link to="/#about" className="text-white bg-cyan-500 hover:bg-cyan-700 hover:text-white rounded-md p-3 mt-6">
				who area you
			</Link>
		</>
	);
};

export default Btn3;
