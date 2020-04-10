import React, { useState } from "react";
import * as bs from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Create() {
    const [facebookCheckedStatus, setFacebookCheckedStatus] = useState(false);
    const [photoStatus, setPhotoStatus] = useState(false);
    const [videoStatus, setVideoStatus] = useState(false);
    const [charityStatus, setCharityStatus] = useState(false);
    const [country, setCountry] = useState("");
    const [country2, setCountry2] = useState("");
    const [country3, setCountry3] = useState("");
    const [country4, setCountry4] = useState("");
    const [country5, setCountry5] = useState("");
    const [country6, setCountry6] = useState("");


    let totalScore = 12;
    let totalMoney = 0;
    let recText = "";
    let totDonators = 0;
    let recText2 = "";
    let recText3 = "";
    let recText4 = "";
    // let rectText5 = "";
    const [total, setTotal] = useState(0);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [moneyEstimate, setMoneyEstimate] = useState(0);
    const [donators, setDonators] = useState(0);

    

    // const [text5, setText5] = useState("");


    const toggleFacebookCheckedStatus = event => {
        // console.log(facebookCheckedStatus)
        event.persist();
        setFacebookCheckedStatus(event.target.checked)

    }
    const togglePhotoStatus = event => {
        // console.log(photoStatus)
        event.persist();
        setPhotoStatus(event.target.checked)

    }

    const toggleVideoStatus = event => {
        // console.log(videoStatus)
        event.persist();
        setVideoStatus(event.target.checked)

    }

    const toggleCharityStatus = event => {
        // console.log(charityStatus)
        event.persist();
        setCharityStatus(event.target.checked)

    }

    const pickCountry = event => {
        // console.log(charityStatus)
        event.persist();
        setCountry(event.target.checked)

    }
    const pickCountry2 = event => {
        // console.log(charityStatus)
        event.persist();
        setCountry2(event.target.checked)

    }
    const pickCountry3 = event => {
        // console.log(charityStatus)
        event.persist();
        setCountry3(event.target.checked)

    }
    const pickCountry4 = event => {
        // console.log(charityStatus)
        event.persist();
        setCountry4(event.target.checked)

    }
    const pickCountry5 = event => {
        // console.log(charityStatus)
        event.persist();
        setCountry5(event.target.checked)

    }
    const pickCountry6 = event => {
        // console.log(charityStatus)
        event.persist();
        setCountry6(event.target.checked)

    }

    function getTotalScore() {
        console.log(charityStatus)
        if (charityStatus == true) {
            totalScore = totalScore + 10;
        }
        else {
            recText = "* We recommend linking your campaign to a charity for better results"
        }

        if (videoStatus == true) {
            totalScore = totalScore + 12;
        }
        else {
            recText2 = "* A video can add dynamic content to your campaign, telling more of a story and attracting more donators!"

        }

        if (photoStatus == true) {
            totalScore = totalScore + 12;
        }
        else {
            recText3 = "*Don't have a photo? Add one! You're more likely to succeed on your compaign"

        }

        if (facebookCheckedStatus == true) {
            totalScore = totalScore + 25;
        }
        else {
            recText4 = "* We recommened syncing the content of your campaign with Facebook"
        }

        if (country == true) {
            totalScore = totalScore + 29;
        }
        else if (country2 == true) {
            totalScore = totalScore + 14;
        }

        else if (country3 == true) {
            totalScore = totalScore + 2;
        }
        else if (country4 == true) {
            totalScore = totalScore + 2;
        }
        else if (country6 == true) {
            totalScore = totalScore + 3;
        }
        else if (country5 == true) {
            totalScore = totalScore + 0;
        }
        console.log(totalScore)
        if (totalScore <= 100 && totalScore >= 95){
            totalMoney = 15000
            totDonators = 450
        }
        else if (totalScore < 95 && totalScore >= 90){
            totalMoney = 1200
            totDonators = 397
        }
        else if (totalScore < 90 && totalScore >= 80 ){
            totalMoney = 10000
            totDonators = 320
        }    
        else if (totalScore < 80 && totalScore >= 70 ){
            totalMoney = 8000
            totDonators = 260
        }    
        else if (totalScore < 70 && totalScore >= 60 ){
            totalMoney = 4500
            totDonators = 200
        }    
        else if (totalScore < 60 && totalScore >= 50 ){
            totalMoney = 2000
            totDonators = 140
        }    
        else if (totalScore < 50 && totalScore >= 40 ){
            totalMoney = 700
            totDonators = 65
        }    
        else if (totalScore < 40 && totalScore >= 30 ){
            totalMoney = 500
            totDonators = 15
        }    
        else if (totalScore < 30 && totalScore >= 20 ){
            totalMoney = 250
            totDonators = 12
        }    
        else if (totalScore < 20 && totalScore >= 0 ){
            totalMoney = 0
            totDonators = 0
        }    

        setTotal(totalScore)
        setText(recText)
        setText2(recText2)
        setText3(recText3)
        setText4(recText4)
        setMoneyEstimate(totalMoney)
        setDonators(totDonators)



    }
    console.log("here")
    // console.log(totalScore)
    
    console.log()

    return (
        <bs.Container>
            <bs.Row>
                <bs.Col>
                    <h1>Donation Calculator</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md="0"></bs.Col>
                <bs.Col md="6">
                    <Form id = "coolBeans" className="block-example border border-dark" style={{ backgroundColor: "#EAEAEA", padding: "30px" }}>
                        <Form.Group>
                            <Form.Label>Campaign Name</Form.Label>
                            <Form.Control placeholder="Enter Campaign Name" type="input" id="campaignName" />
                            <br />
                            <Form.Label>Campaign Description</Form.Label>
                            {/* dont allow null */}
                            <Form.Control type="input" as="textarea" rows="4" id="campaignDesc" placeholder="Enter Campaign Description" />

                            <br />
                            <Form.Check type="switch" isValid checked={facebookCheckedStatus} onChange={toggleFacebookCheckedStatus} id="facebookSwitch" label="Does it automatically post to Facebook?" />
                            <br />
                            <Form.Check type="switch" isValid checked={photoStatus} onChange={togglePhotoStatus} id="photoSwitch" label="Did you add a profile picture?">
                            </Form.Check>
                            <br />
                            <Form.Check type="switch" isValid checked={videoStatus} onChange={toggleVideoStatus} id="videoSwitch" label="Did you add a video?">
                            </Form.Check>
                            <br />
                            <Form.Check type="switch" isValid checked={charityStatus} onChange={toggleCharityStatus} id="charitySwitch" label="Is it linked to a charity?">
                            </Form.Check>
                            <br />
                            {/* <bs.Dropdown>
                                <bs.Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Country
                                    </bs.Dropdown.Toggle>
                                    <bs.Dropdown.Menu show>
                                        <bs.Dropdown.Item eventKey="1">United States</bs.Dropdown.Item>
                                        <bs.Dropdown.Item eventKey="2">Italy</bs.Dropdown.Item>
                                        <bs.Dropdown.Item eventKey="3">Great Britain</bs.Dropdown.Item>
                                        <bs.Dropdown.Item eventKey="4">Canada</bs.Dropdown.Item>
                                        <bs.Dropdown.Item eventKey="5">Germany</bs.Dropdown.Item>
                                    </bs.Dropdown.Menu>
                                    
                                </bs.Dropdown> */}
                            Select Your Country
                                <Form.Check
                                isValid
                                type="radio"
                                checked={country}
                                onChange={pickCountry}
                                label="United States"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                checked={country6}
                                onChange={pickCountry6}
                                isValid
                                type="radio"
                                label="Great Britain"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                checked={country2}
                                onChange={pickCountry2}
                                isValid
                                type="radio"
                                label="Italy"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />

                            <Form.Check
                                isValid
                                checked={country3}
                                onChange={pickCountry3}
                                type="radio"
                                label="Canada"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios4"
                            />
                            <Form.Check
                                isValid
                                checked={country4}
                                onChange={pickCountry4}
                                type="radio"
                                label="Germany"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios5"
                            />
                            <Form.Check
                                isValid
                                checked={country5}
                                onChange={pickCountry5}
                                type="radio"
                                label="Other"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <br />

                            <bs.Button onClick={getTotalScore} >Calculate</bs.Button>
                            <br />
                            <br />

                            {/* <bs.Button>Reset</bs.Button> */}


                            {/* <p onChange={getTotalScore}></p> */}


                        </Form.Group>

                    </Form>


                </bs.Col>
                <bs.Col md="1"> </bs.Col>

                <bs.Col md="4"> <CircularProgressbar
                    value={total}
                    text={`${total}%`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        //rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',


                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `rgba(62, 152, 199, ${total})`,
                        textColor: '#fffff',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                />
                    <br />


                    {/* <div> {text} </div> */}
                    <ul>
                        <h2>We estimate you will generate {total}% of your campaign goal!</h2>
                        <br />

                        {/* <h3>We estimate you will generate ${moneyEstimate} from {donators} Donators</h3> */}
                        <p>{text4}</p>
                        <p>{text3}</p>
                        <p>{text2}</p>
                        <p>{text}</p>
                        
                    </ul>


                </bs.Col>
            </bs.Row>
            <bs.Row>
                {/* <div> {total} </div> */}

            </bs.Row>
        </bs.Container>

    );

}
export default Create;
