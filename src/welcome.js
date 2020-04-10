import React, { useState } from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import friends2 from "./friends2.png";
import friends3 from "./friends3.png";
import friends7 from "./friends7.png";
import Campaign from "./campaign.js";

import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";


function Welcome(props) {

  const [pageBool, setPageBool] = useState(true);
  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageURL);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${friends3})`,
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "relative"
  };

  var overlay = {
    height: '100%',
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: "black",
    width: "100%",
  };

  // function changeBool() {
  //   setPageBool(false);

  // }
  if (!name) {
    return (
      <div>
        <div style={sectionStyle}>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100%', width: '100%' }}>
            <div className="p-5" style={{ width: 600, color: "white" }}>

              <h1 className="p-2">Welcome to GoFundMe Analytics!</h1> <br></br>
              <h3 className="p-2">
                Log in Below!
        </h3>
              <br></br>
              <GoogleLogin
                clientId="463758113488-m60pmudnma5s8k5he71v48mlt6niv6lv.apps.googleusercontent.com"
                buttonText="Login With Google"
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
  }
  //CID: 67406685225-7cur9ddoofb010ron0849jk6vfd7ik71.apps.googleusercontent.com
  //Sp_rJSUeAgvDdIQqD8QwPfkc
  // if (pageBool == false) {
  //   return (
  //     <div>
  //       <div style={sectionStyle}>
  //         <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100%', width: '100%' }}>
  //           <div className="p-5" style={{ width: 600, color: "white" }}>

  //             <h1 className="p-2">Welcome to GoFundMe Analytics!</h1> <br></br>

  //             <button onClick={changeBool}>Click here to get started</button>
  //           </div>
  //         </div>
  //       </div>

  //     </div>

  //   );
  // }
  else {
    return <Campaign />;
  }
}
export default Welcome;