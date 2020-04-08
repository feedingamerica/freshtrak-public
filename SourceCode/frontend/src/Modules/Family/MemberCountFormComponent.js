import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

const MemberCountFormComponent = (props) => {
    const [countSenior, setCountSenior] = React.useState('');
    const [countMiddle, setCountMiddle] = React.useState('');
    const [countJunior, setCountJunior] = React.useState('');

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

    return (
        <div>
        <div className="form-sub-title font-weight-bold">
            Total Number of Household Members
        </div>

            <label>Seniors (65+) </label><input  onChange={buildMemberCount} name="countSenior" id="count_senior" type="number" min="0" max="13" />
            <label>Adult (18+) </label><input  onChange={buildMemberCount} name="countMiddle" id="count_middle" type="number" min="0" max="13" />
            <label>Kids (Under 18)</label><input  onChange={buildMemberCount} name="countJunior" id="count_junior" type="number" min="0" max="13" />
        </div>

    )

};

export default MemberCountFormComponent;
