/**
 * Created by Basil on 06/04/20.
 */
import React from 'react';
import LogoComponent from '../General/LogoComponent';
import { withRouter } from 'react-router';
const FooterComponent = (props) => {
    return (
    	<div className="container pt-50">
                <div className="row">
                    <LogoComponent/>
                    <div className="col-lg-6 col-xl-6">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="list-title">Find Resources</span>
                                <ul>
                                    <li><a>Resources Near You</a></li>
                                    <li><a>Register with FreshTrak</a></li>
                                    <li><a>About FreshTrak</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <span className="list-title">Find Resources</span>
                                <ul>
                                    <li><a>Working with FreshTrak</a></li>
                                    <li><a>Register Your Foodbank</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-2 pb-3">
                    <div className="col-md-12">
                        <p className="copy-right">© 2020 FreshTrak</p>
                    </div>
                </div>
            </div>
    )
};

export default withRouter(FooterComponent);