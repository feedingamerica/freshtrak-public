import React from 'react';
const BoxComponent = ({ title ='',content = null, imageUrl = '',className = '', LinkUrl = '' }) => {
	 
    return (       
            <div className="col-12 col-lg-4 col-xl-4">
                <div className="mobile-flex">
                    <div className="item-icon">
                        <img src={imageUrl} />
                    </div>
                    <div className="item-details">
                        <h4>{title} </h4>
                        <p>{content}</p>
                    </div>
                </div>
            </div>        
    )
};

export default BoxComponent;