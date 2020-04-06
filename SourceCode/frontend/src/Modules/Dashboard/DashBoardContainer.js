/**
 * Created by Basil on 6/1/20.
 */
import React from 'react';
import DashBoardComponent from './DashBoardComponent';
import DashBoardDataComponent from './DashBoardDataComponent';
import DashBoardFoodBankComponent from './DashBoardFoodBankComponent';
import FooterContainer from '../Footer/FooterContainer';
import '../../App.scss';

const DashBoardContainer = () => {
    
    return (
        <div>
            <DashBoardComponent/>            
            <DashBoardDataComponent/>
            <DashBoardFoodBankComponent/>
            <FooterContainer/>
        </div>
    )

};

export default DashBoardContainer;
