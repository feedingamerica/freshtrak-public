import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';


const ButtonComponent = ({ type , name, dataid = null, id, value ='Button' ,className, onClickfunction }) => {
   
    return <Button type={type} name={name} dataid={dataid} id={id} className = {className} onClick={onClickfunction}>{value}</Button>;
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