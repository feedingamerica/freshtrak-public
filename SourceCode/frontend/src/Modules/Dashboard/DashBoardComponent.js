/**
 * Dash board Component
 */
import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import SearchComponent from '../General/SearchComponent';

import '../../App.scss';

const DashBoardComponent = () => {
    return (
    	<div>
	        <div>
	            <HeaderComponent/>         
	        </div>
	         <div>
	         	<SearchComponent/>
	         </div>
         </div>
    )

};

export default DashBoardComponent;