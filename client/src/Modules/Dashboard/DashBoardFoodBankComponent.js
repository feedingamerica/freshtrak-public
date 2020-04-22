
/**
 * Created by Basil on 04/04/20.
 */

import React from 'react';
import BoxComponent from '../General/BoxComponent';
import ButtonComponent from '../General/ButtonComponent';
import PredictIcon from '../../Assets/img/predict.svg';
import ServeFoodIcon from '../../Assets/img/serve-food.svg';
import MoveQuickIcon from '../../Assets/img/move-quick.svg';
const DashBoardFoodBankComponent = () => {	 
     const handleClick = (e) => {
    };
    return (
    	<div className="container pt-150 pb-150">
            <div className="text-uppercase mobile-text-left text-center">For Foodbanks</div>
            <h2 className="mb-2 font-weight-bold mobile-text-left text-center">Serve More Families</h2>
            <p className="mobile-text-left text-center caption-text">Prepare your organization for the influx of demand for food by streamlining registration, planning
                service windows, and forecasting needs. Serve more families—both current and new—in your community.
            </p>
            <div className="row mt-5 text-center">
                <BoxComponent title = "Predict Need" content = "Register neighbors ahead of time or,where possible, schedule a pick-up appointment, your organization can plan for any increase in demand." imageUrl = {PredictIcon} className =""/>
                <BoxComponent title = "Serve Food" content = "You post food access “events” in your community—anything from daily pantry hours to pop-up food events—and neighbors enter their zip code to get connected to them." imageUrl = {ServeFoodIcon} className =""/>
                <BoxComponent title = "Move Quickly" content = "Remove the bottleneck from distribution with online customer pre-registration. Serve more customers, safely!" imageUrl = {MoveQuickIcon} className =""/>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-12">
                    <ButtonComponent type ='button' name="registerfoodbank" dataid= '' id="register-food-bank" value="Register Food Bank" className = 'btn custom-button' onClickfunction={handleClick} />
                </div> 
            </div>            
        </div>
    )
};
export default DashBoardFoodBankComponent;

  