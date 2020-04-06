/**
 * Dash board Component
 */
import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import SearchComponent from '../General/SearchComponent';

import '../../App.scss';

const DashBoardComponent = () => {
    return (
    	<div>
	        <div>
	            <HeaderContainer/>         
	        </div>
	         <div>
	         	<SearchComponent/>
	         </div>
         </div>
    )

};

export default DashBoardComponent;