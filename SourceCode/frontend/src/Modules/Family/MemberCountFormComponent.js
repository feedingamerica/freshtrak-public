import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';

const MemberCountFormComponent = (props) => {
    const [countSenior, setCountSenior] = React.useState('');
    const [countMiddle, setCountMiddle] = React.useState('');
    const [countJunior, setCountJunior] = React.useState('');
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


    const incrementFunction=(e) =>{
        e.preventDefault();
        if(value < 13) {
            setValue(value + 1)
        }
    };

    const decrementFunction=(e)=> {
        e.preventDefault();
        if (value) {
                setValue(value - 1)
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
                
                <button onClick={decrementFunction} className="rounded-button"><span>-</span></button>
                <input type="text" className="number member-count" value={value}></input>
                <button onClick={incrementFunction} className="rounded-button"><span>+</span></button>
                </div>
            </div>
            <div className="d-flex align-items-center pt-2 pb-2">
                <div className="member-age">Adults (18+)</div>
                <div className="button-wrap d-flex flex-grow-1">
                
                <button onClick={decrementFunction} className="rounded-button"><span>-</span></button>
                <input type="text" className="number member-count" value={value}></input>
                <button onClick={incrementFunction} className="rounded-button"><span>+</span></button>
                </div>
            </div>
            <div className="d-flex align-items-center pt-2 pb-2">
                <div className="member-age">Kids (Under 18)</div>
                <div className="button-wrap d-flex flex-grow-1">
                
                <button onClick={decrementFunction} className="rounded-button"><span>-</span></button>
                <input type="text" className="number member-count" value={value}></input>
                <button onClick={incrementFunction} className="rounded-button"><span>+</span></button>
                </div>
            </div>
            </div>
        </div>
        </div>

    )

};

export default MemberCountFormComponent;
