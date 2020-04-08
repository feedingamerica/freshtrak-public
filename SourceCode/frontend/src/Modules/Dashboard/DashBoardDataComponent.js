
/**
 * Created by Basil on 04/04/20.
 */

 import * as React from 'react';
import {useState,useEffect} from 'react';
import SearchComponent from '../General/SearchComponent';
import RegisteredEventListComponent from '../AuthenticatedLanding/RegisteredEventListComponent';
import DashboardCreateAccountComponent from './DashboardCreateAccountComponent';
const DashBoardDataComponent = (props) => {	
    const isLoggedIn = props.isLoggedIn;
 
    return (
    	<div className="container pt-150 pb-150">
            <SearchComponent/>
            {isLoggedIn==true ? <RegisteredEventListComponent />: <DashboardCreateAccountComponent />
             }
             
         
        </div>
    )
};
export default DashBoardDataComponent;