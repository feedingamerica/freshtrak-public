import React from 'react';
import PropTypes from 'prop-types';


const ButtonComponent = ({ type , name, dataid = null, id, value ='Button' ,className, onClickfunction }) => {
   
    return <button type={type} name={name} dataid={dataid} id={id} className = {className} onClick={onClickfunction}>{value}</button>;
};

ButtonComponent.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    onClickfunction: PropTypes.func.isRequired,
};

export default ButtonComponent;