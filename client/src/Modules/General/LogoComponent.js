import React from 'react';
import FooterLogoIcon from '../../Assets/img/footer-logo.svg';
const LogoComponent = () => {
	 
    return (
		<div className="col-lg-6 col-xl-6">
			<div className="footer-logo">
				<img src={FooterLogoIcon} alt="Freshtrak Logo"/>
			</div>
		</div>
    )
};

export default LogoComponent;