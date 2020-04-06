
/**
 * Created by Basil on 04/04/20.
 */

import React from 'react';
import BoxComponent from '../General/BoxComponent';
import ButtonComponent from '../General/ButtonComponent';
const DashBoardDataComponent = () => {	 
     const handleClick = (e) => {
        alert("basil");
    };
    return (
    	<div> 
            <div>      
                <div className ="data-text">
                   <h4> FreshTrak is here to help! </h4>
                </div>
                <div className="tile-box">
                    <BoxComponent title = "Stay Up to Date" content = "Make a FreshTrak account to <br/>stay up to date on local <br/>food access events." className ="stay-up-to-date"/>
                </div>
                <div className="tile-box">
                    <BoxComponent title = "Pre-Register" content = "Make a FreshTrak account to<br/>stay up to date on local food<br/>access events." className ="pre-register"/>
                </div>
                <div className="tile-box">
                    <BoxComponent title = "Find Food" content = "Enter your zip code and get connected<br/>to food access resources in your<br/>community" className ="find-food"/>
                </div>
            </div>
            <div>
                <span><ButtonComponent type ='button' name="createAnAccount" dataid= '' id="search-resource" value="Create An Account" className = 'test' onClickfunction={handleClick} /></span>
            </div>
        </div>
    )
};
export default DashBoardDataComponent;

