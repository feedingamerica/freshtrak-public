import React from 'react';
import useForm from '../../Utils/UseForm';

const PasswordRegistrationFormComponent= React.forwardRef((props, ref)=> {

    const [password, setPassword] = React.useState('');
    const [password_re, setPasswordRe] = React.useState('');
    let data,childFamilyData ='';



    const buildForm = (e) => {
        let {name, value} = e.target;
        let setFunction = '';
        switch (name) {
            case 'Password':
                setFunction = setPassword;
                break;

            case 'Password_re':
                setFunction = setPasswordRe;
                break;
        }
        if (setFunction !== '') {
            setFunction(value)
        }
    };


    const handleChange = () => {
        data = {
            passwordData: {
                password: password,
            }
        };

        props.onSelectedChild(data);
    };

    React.useEffect(() => {
        handleChange();
    }, [password,password_re]);




    const dataToParent = () => {
        props.onSelectedChild(childFamilyData);
    };

    const { errors, handleErrors } =
        useForm(props, {
            'password' : ['required'],
            'password_re' : ['required'],
        }, dataToParent);

    React.useImperativeHandle(ref, () => ({

        triggerErrors(){
            handleChange();
            return handleErrors(data.passwordData);
        }

    }));




    return (
        <div className="form-fields pt-50">
            <div className="form-title">
                Create FresTrak Account
            </div>
            <div className="form-text mb-2">
                Input a password to create a FreshTrak account and easily register with one click in the future.
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={buildForm} name="Password" id="Password" />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control"  name="password_re" id="password_re" />
            </div>
        </div>
    )
});

export default PasswordRegistrationFormComponent;
