/**
 * Created by Basil on 6/1/20.
 */
import React from 'react';
import FooterComponent from './FooterComponent';
import '../../Assets/scss/main.scss';
const FooterContainer = (props) => {
    
    return (
        <footer className="footer-bg footer">
            <FooterComponent {...props}/>
        </footer>
    )

};

export default FooterContainer;
