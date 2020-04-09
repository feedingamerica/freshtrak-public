
import React from 'react';
import UseForm from '../../Utils/UseForm';

const SignInComponent = React.forwardRef((props, ref)=>{
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    let data,childFamilyData ='';



    const buildForm = (e) => {
        let {name, value} = e.target;
        let setFunction = '';
        switch (name) {
            case 'Password':
                setFunction = setPassword;
                break;

            case 'Username':
                setFunction = setUsername;
                break;
        }
        if (setFunction !== '') {
            setFunction(value)
        }
    };


    const handleChange = () => {
        data = {
            userData: {
                username:username,
                password: password,
            }
        };

        // props.onSelectedChild(data);
    };

    React.useEffect(() => {
        handleChange();
    }, [username,password]);


    const handleSubmitConfirm = () => {
        let title = 'Are you sure you want to proceed?';
        // confirm(title, handleSubmit);
    };

    const handleSubmit = ()=>{
        localStorage.setItem('isLoggedIn',true);
        window.location.reload();
        console.log(props.submit(false))
       
        
    }
    const dataToParent = () => {
        // props.onSelectedChild(childFamilyData);
    };






    return (
        <div className="form-fields pt-50">
            <div className="form-title">
                <h1>Sign In</h1>
            </div>
            <div className="form-text mb-2">
                Have you previously registered through FreshTrak? Input your email address and 
                the password you entered when you created your account.
            </div>
            <div className="form-group">
                <label>Username or Email Address</label>
                <input type="text" className="form-control"  name="Username" id="Username" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"  name="Password" id="Password" />
            </div>
            <div className="button-wrap mt-4">
                <button className="btn custom-button" onClick={handleSubmit}>Submit</button>

            </div>
        </div>
    )

});
export default SignInComponent;


