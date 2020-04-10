import React, { useState } from 'react';
import FooterContainer from '../Footer/FooterContainer';
import EventHeaderComponent from './EventHeaderComponent';
import SearchComponent from '../General/SearchComponent';
import EventListComponent from './EventListComponent';
import '../../Assets/scss/main.scss';
import ResourceListComponent from './ResourceListComponent';
import {API_URL} from '../../Utils/Urls';
import {ajaxGet} from '../../Services/Http/Ajax';
import {STATUS_ACTIVE} from '../../Utils/Constants';
import axios from 'axios';
import { mockFoodBank } from '../../Testing';

const EventContainer = (props) => {
    const [foodBankResponse, setFoodBankResponse] = useState(false);
    const [agencyResponse, setAgencyResponse] = useState(false);
    let [foodBankData,setFoodBankData] = useState({});
    let [agencyData,setAgencyData] = useState({});
    let [searchDetails,setSearchDetails] = useState({});
    const [loading, setLoading] = useState(false);
    let isSearchData = !!props.location.state;

    React.useEffect(() => {
        if (isSearchData){
            buildSearchData(props.location.state.searchData);
            props.history.replace({ state: null });
        }
    }, []);

    const handleSubmit = async (data) => {
        if(data) {
            setLoading(true);
            let foodBankUri = API_URL.FOODBANK_LIST;
            // Going to use axios for now
            try {
                const { zip_code } = data;
                const resp = await axios.get(foodBankUri, { params: zip_code });
                setFoodBankData(resp);
                setFoodBankResponse(true);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }

            // Mock Data ignoring for now
            let agencyResponse = {
                "agencies": [
                    {
                        "id": 1,
                        "address": "1460 S CHAMPION AVE",
                        "city": "COLUMBUS",
                        "state": "OH",
                        "zip": "43206",
                        "phone": "614-443-5130",
                        "name": "Lutheran Social Services ChoicePantry - South Columbus",
                        "nickname": "LSS Champion",
                        "event_dates": []
                    },
                    {
                        "id": 4,
                        "address": "2045 E MAIN ST",
                        "city": "LANCASTER",
                        "state": "OH",
                        "zip": "43130",
                        "phone": "740-687-5130",
                        "name": "Lutheran Social Services ChoicePantry - Fairfield Co.",
                        "nickname": "LSS Lancaster",
                        "event_dates": []
                    },
                    {
                        "id": 6,
                        "address": "3960 BROOKHAM DR",
                        "city": "GROVE CITY",
                        "state": "OH",
                        "zip": "43123",
                        "phone": "614-317-9482",
                        "name": "Mid-Ohio Foodbank - Kroger Community Pantry",
                        "nickname": "MOF Kroger Pantry",
                        "event_dates": [
                            {
                                "id": 3,
                                "service": "Prepack Pantry",
                                "start_time": "01:00 PM",
                                "end_time": "03:00 PM",
                                "date": "2020-04-10"
                            },
                            {
                                "id": 5,
                                "service": "Prepack Pantry",
                                "start_time": "01:00 PM",
                                "end_time": "03:00 PM",
                                "date": "2020-04-13"
                            },
                            {
                                "id": 6,
                                "service": "Prepack Pantry",
                                "start_time": "01:00 PM",
                                "end_time": "03:00 PM",
                                "date": "2020-04-15"
                            }
                        ]
                    },
                ]
            };
            setAgencyData(agencyResponse);
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
        return null;
        if (agencyResponse) {
            return <EventListComponent dataToChild = {agencyData} /> ;
        }
    };

    const ResourceList = () => {
        if (foodBankResponse) {
            return <ResourceListComponent dataToChild = {foodBankData} /> ;
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
                        {loading && <h2>Loading</h2>}
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
