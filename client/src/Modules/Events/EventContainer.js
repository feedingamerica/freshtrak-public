import React, { useState } from 'react';
import FooterContainer from '../Footer/FooterContainer';
import EventHeaderComponent from './EventHeaderComponent';
import SearchComponent from '../General/SearchComponent';
import EventListComponent from './EventListComponent';
import '../../Assets/scss/main.scss';
import ResourceListComponent from './ResourceListComponent';
import { ProgressBar } from 'react-bootstrap';
import {API_URL} from '../../Utils/Urls';
import {ajaxGet} from '../../Services/Http/Ajax';
import {STATUS_ACTIVE} from '../../Utils/Constants';
import { EventDateSorter, EventHandler } from '../../Utils/EventHandler';
import axios from 'axios';
import { testDataWithMultiple } from '../../Testing';

const EventContainer = (props) => {
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

    const handleSubmit = async (query) => {
        if(query) {
            setLoading(true);
            let foodBankUri = API_URL.FOODBANK_LIST;
            // Going to use axios for now
            try {
                const { zip_code } = query;
                const resp = await axios.get(foodBankUri, { params: { zip_code } });
                const { data } = resp;
                setFoodBankData(data);
                setFoodBankResponse(true);
                setLoading(false);
            } catch (err) {
                setServerError(true);
                setLoading(false);
            }

            // Mock Data for now
            setAgencyData(testDataWithMultiple);
            setAgencyResponse(true);
        }


        // ajaxGet(uri, searchDetails, (response) => {
        //     setFoodBankResponse(true);
        //     console.log(response);
        // if (response.status === STATUS_ACTIVE) {
        //     console.log(response);
        // }else {
        //     console.log('error', response.message);
        // }
        // });
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
          return <EventListComponent events = {agencyDataSorted} /> ;
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
            <EventHeaderComponent/>
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
            <FooterContainer/>
        </div>
    )

};

export default EventContainer;
