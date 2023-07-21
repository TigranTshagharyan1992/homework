import React from 'react';

const Input = ({children, ...props}) => {
    return (
        <div>
            <input {...props} placeholder={children}/>
        </div>
    );
};

export default Input;