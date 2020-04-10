import React, { useState } from "react";
import ReactDom from "react-dom";
import GoogleLogin from "react-google-login";
import App from "./App.js";

function Login(props) {

    const responseGoogle = (response) => {
        console.log(response);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageURL);
    };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    if (!name) {
        return (
            <div>
                <div style={sectionStyle}>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100%', width: '100%' }}>
                        <div className="p-5" style={{ width: 600, color: "white" }}>
                            <img
                                alt=""
                                src={goFundMe}
                                width="300"
                                className="p-5"
                                className="ml-10 p-2"
                            />
                            <h1 className="p-2">Welcome to Go Fund Me Analytics!</h1> <br></br>
                            <h3 className="p-2">
                                Please log in with your Google account below to continue
            </h3>
                            <br></br>
                            <GoogleLogin
                                clientId="264235252416-qu7uoto6sb62kc8hb7fffrg387o26e7e.apps.googleusercontent.com" //change key
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                                className="p-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <App />;
    }
}
export default Login;