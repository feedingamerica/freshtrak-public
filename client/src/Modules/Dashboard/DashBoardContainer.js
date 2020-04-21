/**
 * Created by Basil on 6/1/20.
 */
import React from 'react';
import DashBoardDataComponent from './DashBoardDataComponent';
import DashBoardFoodBankComponent from './DashBoardFoodBankComponent';
import '../../Assets/scss/main.scss';

const DashBoardContainer = (props) => {

    return (
		<React.Fragment>
			<section>	        		                   
				<DashBoardDataComponent />
			</section>
			<section className="gray-bg">            	
				<DashBoardFoodBankComponent/>
			</section>			
			
		</React.Fragment>
    )

};

export default DashBoardContainer;
