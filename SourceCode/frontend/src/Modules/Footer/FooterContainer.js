/**
 * Created by Basil on 6/1/20.
 */
import React from 'react';
import FooterComponent from './FooterComponent';
import LogoComponent from '../General/LogoComponent';
import '../../App.scss';

const FooterContainer = () => {
    
    return (
        <div className ="site-footer">
        	<LogoComponent/>
			<FooterComponent/>	
        </div>
    )

};

export default FooterContainer;
