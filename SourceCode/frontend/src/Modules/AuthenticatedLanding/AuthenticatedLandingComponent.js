/**
 * Confirmation Component
 */
import React from 'react';
import '../../Assets/scss/main.scss';
import FooterContainer from '../Footer/FooterContainer';
import ButtonComponent from '../General/ButtonComponent';
import HeaderContainer from '../Header/HeaderContainer';
import DashBoardComponent from '../Dashboard/DashBoardComponent';
import DashBoardDataComponent from '../Dashboard/DashBoardDataComponent';
import DashBoardFoodBankComponent from '../Dashboard/DashBoardFoodBankComponent';


const AuthenticatedLandingComponent = (props) => {
var isLoggedIn = true;
    return (
        <div>
            <HeaderContainer />
            <section>	        		                   
				<DashBoardDataComponent isLoggedIn={isLoggedIn}/>
			</section>
			<section className="gray-bg">            	
				<DashBoardFoodBankComponent/>
			</section>			

        <FooterContainer />
        </div>
    )

};

export default AuthenticatedLandingComponent;