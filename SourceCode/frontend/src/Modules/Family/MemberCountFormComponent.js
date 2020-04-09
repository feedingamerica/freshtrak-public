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
            <div>
                <button onClick={incrementFunction} className="fa fa-minus fa-inverse fa-2x">+</button>
                <input type="text" className="number" value={value}></input>
                <button onClick={decrementFunction} className="fa fa-plus fa-inverse fa-2x">-</button>

            </div>
        </div>
        </div>

    )

};

export default MemberCountFormComponent;
