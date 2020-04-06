
/**
 * Created by Basil on 04/04/20.
 */

import React from 'react';
import BoxComponent from '../General/BoxComponent';
import ButtonComponent from '../General/ButtonComponent';
const DashBoardFoodBankComponent = () => {	 
     const handleClick = (e) => {
        alert("basil");
    };
    return (
    	<div> 
            <div>      
                <div className ="data-text">
                   <span>For Foodbanks</span>
                   <h4> Serve More Families.</h4>
                   <span>Prepare your organization for the influx of demand for food by streamlining
registration, planning service windows, and forecasting needs. Serve more
families—both current and new—in your community</span>
                </div>
                <div className="tile-box">
                    <BoxComponent title = "Predict Need" content = "Register neighbors ahead of time or,where possible, schedule a pick-up appointment, your organization can plan for any increase in demand" className ="predict-need"/>
                </div>
                <div className="tile-box">
                    <BoxComponent title = "Serve Food" content = "ou post food access ' events  in yourcommunity—anything from daily pantry hours to pop-up food events—and neighbors enter their zip code to get connected to them." className ="serve-food"/>
                </div>
                <div className="tile-box">
                    <BoxComponent title = "Move Quickly" content = "Remove the bottleneck from distribution with online customer pre-registration. Serve more customers, safely!" className ="move-quickly"/>
                </div>
            </div>
            <div>
                <span><ButtonComponent type ='button' name="registerfoodbank" dataid= '' id="register-food-bank" value="Register Food Bank" className = 'test' onClickfunction={handleClick} /></span>
            </div>
        </div>
    )
};
export default DashBoardFoodBankComponent;

