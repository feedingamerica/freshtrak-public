import * as React from 'react';
import {useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import SearchComponent from '../General/SearchComponent';
import RegisteredEventListComponent from '../AuthenticatedLanding/RegisteredEventListComponent';
import DashboardCreateAccountComponent from './DashboardCreateAccountComponent';
import '../../Assets/scss/main.scss';
const DashBoardDataComponent = (props) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn'));

    React.useEffect(()=>{
        if (localStorage.getItem('isLoggedIn')!=undefined ){
            setIsLoggedIn(true);
        }
    },[localStorage.getItem('isLoggedIn')]);

    const handleSubmit = (data) => {
        if(Object.keys(data)[0]) {
            props.history.push({
                pathname : '/events/list',
                state: { searchData: data }
            });
        }

    };

    return (
        <div className="container pt-150 pb-150">
            <div className="search-area text-left">
                <SearchComponent onSelectedChild = {handleSubmit} />
            </div>

            {isLoggedIn==true ? <RegisteredEventListComponent />: <DashboardCreateAccountComponent />
            }
        </div>
    )
};
export default withRouter(DashBoardDataComponent);