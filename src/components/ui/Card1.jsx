import React from 'react';
import Btn2 from './Btn2';


const Card1 = (props) => {
    return (
        <>
            <div className=" border-gray-200 rounded-lg p-6 flex flex-col items-start">
                <h3 className={props.titleStyle}>{props.title}</h3>
                <p className="text-lg font-light mb-4 text-white">
                    {props.text1}
                </p>
                <p className="text-white mb-6">
                    {props.text2}
                </p>
            </div>

        </>
    );
};

export default Card1;