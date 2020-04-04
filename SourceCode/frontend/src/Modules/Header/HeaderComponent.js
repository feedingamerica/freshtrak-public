/**
 * Created by Basil on 04/04/20.
 */

import React from 'react';
import {Link} from "react-router-dom";
import {Nav} from 'react-bootstrap';
import HeaderDataComponent from '../Header/HeaderDataComponent';
const HeaderComponent = () => {
    return (
    	<div>
        <div className="header">
            <div className="header-menu">
                <div className = "left-side">
                	<span>FreshTrak</span> 
            	</div>
            	<div className ="right-side"> 
	                 <span>Find Resources</span>
	                 <span>Find Food Bank</span> 
             	</div>
            </div>            
        </div>         
            <HeaderDataComponent/>  
        </div>
    )
};

export default HeaderComponent;