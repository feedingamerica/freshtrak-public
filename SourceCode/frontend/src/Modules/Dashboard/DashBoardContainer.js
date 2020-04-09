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
	// const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn'));
    // React.useEffect(()=>{
	// 	console.log(typeof(localStorage.getItem('isLoggedIn')))
	// 	if (localStorage.getItem('isLoggedIn')!=undefined ){
    //         setIsLoggedIn(true);
    //     }
	// },[localStorage.getItem('isLoggedIn')]);
    return (
		<div>
			<DashBoardComponent />    
			<section>	        		                   
				<DashBoardDataComponent />
			</section>
			<section className="gray-bg">            	
				<DashBoardFoodBankComponent/>
			</section>			
			<FooterContainer/>
		</div>
    )

};

export default DashBoardContainer;
