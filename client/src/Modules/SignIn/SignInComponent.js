import React from "react";
import "../../Assets/scss/main.scss";

const SignInComponent =(props)=> {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  let data,
    childFamilyData = "";

  // const buildForm = (e) => {
  //   let { name, value } = e.target;
  //   let setFunction = "";
  //   switch (name) {
  //     case "Password":
  //       setFunction = setPassword;
  //       break;

  //     case "Username":
  //       setFunction = setUsername;
  //       break;
  //   }
  //   if (setFunction !== "") {
  //     setFunction(value);
  //   }
  // };

  const handleChange = () => {
    data = {
      userData: {
        username: username,
        password: password,
      },
    };

    // props.onSelectedChild(data);
  };

  React.useEffect(() => {
    handleChange();
  }, [username, password]);

  const handleSubmit = () => {
    localStorage.setItem("isLoggedIn", true);
    window.location.reload();
  };

  return (
    <div className="form-fields sign-in-form">
      <div className="form-title">
        <h1>Sign In</h1>
      </div>
      <div className="mb-2">
        <div>Have you previously registered through FreshTrak?</div>
        <div className="small-title">
          Input your email address and the password you entered when you created
          your account.
        </div>
      </div>
      <div className="form-group">
        <label>Username or Email Address</label>
        <input
          type="text"
          className="form-control"
          name="Username"
          id="Username"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="Password"
          id="Password"
        />
      </div>
      <div>
        <a>Forgot Password?</a>
      </div>
      <div className="button-wrap d-flex mt-3">
        <button
          className="btn primary-button flex-grow-1"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default SignInComponent;
