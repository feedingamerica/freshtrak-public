import { useState, useEffect } from "react";

const UseForm = (props, validations, callback, errorToComponent = false) => {
    const [errors, setErrors] = useState({});

    const formValidation = (value, validator, limit) => {
        let valueLength;
        if(typeof value === 'number'){
            valueLength = value;
        }else{
            valueLength = value.length;
        }
        switch (validator) {
            case "required":
                return valueLength > 0 ? "" : "This field is required";
            case "min":
                return valueLength >= limit
                    ? ""
                    : `This value needs to be at least ${limit} characters`;
            case "max":
                return valueLength <= limit
                    ? ""
                    : `This value cannot be more than ${limit} characters`;
            case "is_address":
                const validAddress = new RegExp("^[-().,#\/a-zA-Z0-9 ]*$");
                let errors_address = validAddress.test(value);
                return errors_address
                    ? ""
                    : `Enter a valid address`;
            default:
                return "";
        }
    };

    const handleErrors = (e) => {
        if (typeof e.target === "undefined") {
            let data = e;
            let count = 0;
            for(let key in data){
                // get index and check for last index and set true
                let keyExists = key in validations;
                if(keyExists){
                    count++;
                    if(count === Object.keys(validations).length){
                        let loopFinish = processValidations(data[key], validations[key], key, true);
                        return loopFinish
                    }else{
                        processValidations(data[key], validations[key], key);
                    }

                }
            }
        }else{
            let {name, value} = e.target;
            let nameExists = name in validations;
            if(nameExists){
                processValidations(value, validations[name], name);
            }
        }

    };


    const processValidations = (value, validate, name, lastLoop) => {
        let validationRes;
        let validator;
        let limit;
        let count = 0;

        for (let i = 0; i < validate.length; i++) {
            count++;
            let splitKey = validate[i].split(':');
            if(typeof splitKey[1] !== 'undefined'){
                validator = splitKey[0];
                limit = splitKey[1];
            }else{
                validator = validate[i];
            }

            if (typeof validator === "string") {
                validationRes = formValidation(value, validator, limit);
            }
            if (validationRes) break;
        }

        setErrors(errors => ({
            ...errors,
            [name]: validationRes
        }));

        if(count >= 1 && lastLoop){
            if(validationRes){
                return true;
            }
            return false;
        }
    };

    useEffect(() => {
        for(let keys in errors){
            if(errors[keys] === null || errors[keys] === ""){
                delete errors[keys]
            }
        }

        if(Object.keys(errors).length === 0){
            callback();
        }

        if(!errorToComponent){
            props.onFormErrors(errors);
        }


    }, [errors]);



    return {
        handleErrors,
        errors
    };
};

export default UseForm;
