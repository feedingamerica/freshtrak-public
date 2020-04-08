
/**
 * Created by Basil on 04/04/20.
 */

 import * as React from 'react';
import {useState,useEffect} from 'react';
import BoxComponent from '../General/BoxComponent';
import ButtonComponent from '../General/ButtonComponent';
import SearchComponent from '../General/SearchComponent';
import CalenderIcon from '../../Assets/img/calendar.svg';
import PreRegisteredIcon from '../../Assets/img/pre-register.svg';
import FindFoodIcon from '../../Assets/img/findfood.svg';
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