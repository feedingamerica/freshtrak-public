/**
 * Created by Basil on 6/1/20.
 */
import React from 'react';
import DashBoardComponent from './DashBoardComponent';
import DashBoardDataComponent from './DashBoardDataComponent';
import DashBoardFoodBankComponent from './DashBoardFoodBankComponent';
import FooterContainer from '../Footer/FooterContainer';
import '../../Assets/scss/main.scss';

const DashBoardContainer = () => {
    
    return (
		<div>
			<DashBoardComponent/>    
			<section>	        		                   
				<DashBoardDataComponent/>
			</section>
			<section class="gray-bg">            	
				<DashBoardFoodBankComponent/>
			</section>			
			<FooterContainer/>
		</div>
    )

};

export default DashBoardContainer;
