import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';

const MemberCountFormComponent = (props) => {
    const [countSenior, setCountSenior] = React.useState(0);
    const [countMiddle, setCountMiddle] = React.useState(0);
    const [countJunior, setCountJunior] = React.useState(0);
    const [value, setValue] = React.useState(0);


    const buildMemberCount = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        switch (name) {
            case 'countSenior':
                setCountSenior(value);
                break;
            case 'countMiddle':
                setCountMiddle(value);
                break;
            case 'countJunior':
                setCountJunior(value);
                break;
            default:
                break;
        }
    };

    React.useEffect(() => {
        handleChange();
    }, [countSenior, countMiddle, countJunior]);

    const handleChange = () => {
        let  childFamilyData= { memberCountData :{
            countSenior: countSenior,
            countMiddle: countMiddle,
            countJunior: countJunior,
        }
        };
        props.onSelectedChild(childFamilyData);
    };




    const incrementFunctionlogic=(event) =>{
        event.preventDefault();
        let name = event.target.name;
        switch (name) {
            case 'count_senior_inc':
                alert('inc');
                if(countSenior < 13) {
                    setCountSenior(countSenior + 1)
                }
                break;
            case 'count_senior_dec':
                alert('dec');
                if(value < 13) {
                    setCountSenior(countSenior - 1)
                }
                break;
            default:
                break;
        }

    };

    const seniorDecrementFunction=(e)=> {
        e.preventDefault();
        if (value) {
                setValue(value - 1)
        }
    };

    const seniorIncrementFunction=(e)=> {
        e.preventDefault();

        if (value<13) {
                setValue(value + 1)
        }
    };const adultDecrementFunction=(e)=> {
        e.preventDefault();
        if (countMiddle) {
            setCountMiddle(countMiddle - 1)
        }
    };

    const adultIncrementFunction=(e)=> {
        e.preventDefault();

        if (countMiddle<13) {
                setCountMiddle(countMiddle + 1)
        }
    };const kidDecrementFunction=(e)=> {
        e.preventDefault();
        if (countJunior) {
                setCountJunior(countJunior - 1)
        }
    };

    const kidIncrementFunction=(e)=> {
        e.preventDefault();

        if (countJunior<13) {
            setCountJunior(countJunior + 1)
        }
    };




    return (
        <div>
        <div className="form-sub-title font-weight-bold">
            Total Number of Household Members
            <div className="mt-3 pt-1">
            <div className="d-flex align-items-center pt-2 pb-2">
                <div className="member-age">Seniors (65+)</div>
                <div className="button-wrap d-flex flex-grow-1">
                
                <button onClick={seniorDecrementFunction} name="count_senior_dec" className="rounded-button" type="button"><span>-</span></button>
                <input type="text" className="number member-count" value={value}></input>
                <button onClick={seniorIncrementFunction} name="count_senior_inc" className="rounded-button"><span>+</span></button>
                </div>
            </div>
            <div className="d-flex align-items-center pt-2 pb-2">
                <div className="member-age">Adults (18+)</div>
                <div className="button-wrap d-flex flex-grow-1">
                
                <button onClick={adultDecrementFunction} name="count_adult_inc" className="rounded-button"><span>-</span></button>
                <input type="text" className="number member-count" value={countMiddle}></input>
                <button onClick={adultIncrementFunction} name="count_adult_dec" className="rounded-button"><span>+</span></button>
                </div>
            </div>
            <div className="d-flex align-items-center pt-2 pb-2">
                <div className="member-age">Kids (Under 18)</div>
                <div className="button-wrap d-flex flex-grow-1">
                
                <button onClick={kidDecrementFunction} name="count_kids_inc" className="rounded-button"><span>-</span></button>
                <input type="text" className="number member-count" value={countJunior}></input>
                <button onClick={kidIncrementFunction} name="count_kids_dec" className="rounded-button"><span>+</span></button>
                </div>
            </div>
            </div>
        </div>
        </div>

    )

};

export default MemberCountFormComponent;
