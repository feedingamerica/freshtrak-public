import React, { useState } from 'react';
import SearchComponent from '../General/SearchComponent';
import EventListComponent from './EventListComponent';

import ResourceListComponent from './ResourceListComponent';
import { ProgressBar } from 'react-bootstrap';
import {API_URL} from '../../Utils/Urls';
import { EventDateSorter, EventHandler } from '../../Utils/EventHandler';
import axios from 'axios';

const EventContainer = props => {
    const [foodBankResponse, setFoodBankResponse] = useState(false);
    const [agencyResponse, setAgencyResponse] = useState(false);
    let [foodBankData,setFoodBankData] = useState({});
    let [agencyData,setAgencyData] = useState({});
    let [searchDetails,setSearchDetails] = useState({});
    const [serverError, setServerError] = useState(false);
    const [loading, setLoading] = useState(false);
    let isSearchData = !!props.location.state;

    React.useEffect(() => {
        if (isSearchData){
            buildSearchData(props.location.state.searchData);
            props.history.replace({ state: null });
        }
    }, []);

    const handleSubmit = async query => {
        if(query) {
            setLoading(true);
            let foodBankUri = API_URL.FOODBANK_LIST;
            const { zip_code } = query;
            // Going to use axios for now
            try {
                const resp = await axios.get(foodBankUri, { params: { zip_code } });
                const { data } = resp;
                setFoodBankData(data);
                setFoodBankResponse(true);
                setLoading(false);
            } catch (err) {
                setServerError(true);
                setLoading(false);
            }

            // This along with EventList should be in it's own container.
            try {
                const agencyUri = API_URL.EVENTS_LIST;
                const resp = await axios.get(agencyUri, { params: { zip_code } });
                const { data: { agencies } } = resp;
                setAgencyData(agencies);
                setAgencyResponse(true);
            } catch (err) {
                console.error(err)
            }
        }
    };



    const buildSearchData = (data) =>{
        if(Object.keys(data)[0]) {
            let searchDetails = {
                'street': data.searchData.street,
                'zip_code': data.searchData.zip,
            };
            setSearchDetails(searchDetails);
            handleSubmit(searchDetails);
        }

    };

    const EventList = () => {
        // Out of scope for now
        if (agencyResponse) {
          const agencyDataSorted = EventDateSorter(EventHandler(agencyData));
          return <EventListComponent events = {agencyDataSorted} />;
        }
        return null;
    };

    const ResourceList = () => {
        if (foodBankResponse) {
            return <ResourceListComponent dataToChild = {foodBankData} /> ;
        }
        if (serverError) {
            return <h2>Something went wrong</h2>
        }
        return null;
    };

    return (
        <div>
            <section className="gray-bg">
                <div className="container pt-150 pb-150">
                    <div className="search-area text-left">
                        <SearchComponent onSelectedChild = {buildSearchData}
                                         dataToChild = {searchDetails}/>
                        {loading && 
                            <div className="pt-4">
                                <ProgressBar animated now={100} data-testid="loading" />
                            </div>
                        }
                        {!loading && <ResourceList />}
                    </div>
                    <EventList />
                </div>
            </section>
        </div>
    )

};

export default EventContainer;
