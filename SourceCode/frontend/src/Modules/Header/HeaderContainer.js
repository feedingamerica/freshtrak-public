/**
 * Created by Basil on 6/1/20.
 */
import React from 'react';
import HeaderComponent from './HeaderComponent';
import HeaderDataComponent from './HeaderDataComponent';
import '../../App.scss';

const HeaderContainer = () => {
    
    return (
         <header className="header">
            <HeaderComponent/>	          
	        <HeaderDataComponent/> 
         </header>
    )

};

export default HeaderContainer;
