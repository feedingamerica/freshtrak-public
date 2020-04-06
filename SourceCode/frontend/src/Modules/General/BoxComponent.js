import React from 'react';
const BoxComponent = ({ title ='',content = null, imageUrl = '',className = '', LinkUrl = '' }) => {
	 
    return (
    	<div className ="data-text"> 
    		<div>Image</div>      
            <div >
               <h4>{title} </h4>
               <span>{content}</span>
            </div>
            
        </div>
    )
};

export default BoxComponent;