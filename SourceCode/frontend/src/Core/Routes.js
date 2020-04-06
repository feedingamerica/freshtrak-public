//routing files
import React, {lazy, Suspense} from 'react';
import '../Assets/Styles/Common/style.css';
import {RENDER_URL} from '../Utils/Urls';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const DashboardComponent = lazy(() => import("../Modules/Dashboard/DashboardComponent"));
/*const EventContainer = lazy(() => import("../Modules/Events/EventContainer"));
const EventListContainer = lazy(() => import("../Modules/Events/EventListContaner"));*/
const EventListComponent = lazy(() => import("../Modules/EventList/EventListComponent")); 
const App = lazy(() => import("../App"));

const Routes = () => {
    return (
        <Router>
            <Suspense fallback={<div className="displayNone"> </div>}>
                <Switch>
                    <Route exact path={RENDER_URL.HOME_URL} component={App}/>
                    <Route path={RENDER_URL.EVENT_LIST_URL} component={EventListComponent}/>
                                        
                    
                </Switch>
            </Suspense>
        </Router>
    )
};
export default Routes;