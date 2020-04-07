
/**
 * Created by Basil on 04/04/20.
 */

import React from 'react';
import BoxComponent from '../General/BoxComponent';
import ButtonComponent from '../General/ButtonComponent';
import SearchComponent from '../General/SearchComponent';
const DashBoardDataComponent = () => {	 
     const handleClick = (e) => {
        alert("basil");
    };
    return (
    	<div className="container pt-150 pb-150">
            <SearchComponent/>
            <h2 className="mb-5 font-weight-bold mobile-text-left text-center">FreshTrak is here to help!</h2>
            <div className="row text-center">
                <BoxComponent title = "Stay Up to Date" content = "Make a FreshTrak account to stay up to date on local food access events." imageUrl = "img/calendar.svg" className ="stay-up-to-date"/>
                <BoxComponent title = "Pre-Register" content = "Make a FreshTrak account to stay up to date on local food access events." imageUrl = "img/pre-register.svg" className ="pre-register"/>
                <BoxComponent title = "Find Food" content = "Enter your zip code and get connected to food access resources in your community." imageUrl = "img/findfood.svg" className ="find-food"/>
            </div>
            <div class="row mt-5 text-center">
                <div class="col-12">
                    <ButtonComponent type ='button' name="createAnAccount" dataid= '' id="search-resource" value="Create an Account" className = 'btn custom-button' onClickfunction={handleClick} />
                </div> 
            </div>
        </div>
    )
};
export default DashBoardDataComponent;