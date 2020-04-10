import React, { useState } from "react";
import AppContext from "./context";
import * as bs from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CampaignCard from "./campaignCard";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';



function CampaignDetails(props) {
    const context = React.useContext(AppContext);
    let [img_idx, setImgIdx] = React.useState("1");
    const match = useRouteMatch("/campaignDetails/:id");
    let found = false;
    let campaign = {};
    let history = useHistory();
    let CampaignArray = context.campaigns
    const [total, setTotal] = useState(0);
    let totalScore = 15;

    //   let campaignFields = context.campaigns;
    // console.log(context)

    console.log(match)

    if (match) {
        for (let p of Object.values(context.campaigns)) {
            if (p.id == (match.params.id)) {
                campaign = p;
                found = true;
                // console.log("1")

                // console.log(p.id)

            }


        }




    }
    function getTotalScore() {

        // console.log(charityStatus)
        if (campaign.is_charity == "TRUE") {
            totalScore = totalScore + 5;
        }

        if (campaign.has_beneficiary == "TRUE") {
            totalScore = totalScore + 5;
        }

        if (campaign.auto_post_fb_mode == "TRUE") {
            totalScore = totalScore + 25;
        }
        if (parseInt(campaign.campaign_hearts) >= 30) {
            totalScore = totalScore + 25;
        }
        else if (parseInt(campaign.campaign_hearts) > 5 && (parseInt(campaign.campaign_hearts) < 30)) {
            totalScore = totalScore + 15;
        }

        if (parseInt(campaign.social_share_total) >= 88) {
            totalScore = totalScore + 25;
        }
        else if (parseInt(campaign.social_share_total) > 5 && (parseInt(campaign.social_share_total) < 88)) {
            totalScore = totalScore + 15;
        }

        // if(parseInt(campaign.current_amount)/(campaign.goal) > .50){
        //     totalScore = totalScore + 45
        // }







        // if (photoStatus == true) {
        //     totalScore = totalScore + 12;
        // }


        // if (facebookCheckedStatus == true) {
        //     totalScore = totalScore + 25;
        // }


        setTotal(totalScore)


    }

    console.log(totalScore)

    // setTotal(totalScore)


    if (found) {
        return (
            <div>
                <div className="float-right">
                    {/* <img
                        src={`/ campaign / ${ campaign.filename }-${ img_idx }.png`} //fix
                        alt="campaign"
                        key={img_idx}
                        style={{ width: "300px", height: "300px" }}
                    ></img> */}
                    {/* <div>
                        {["1", "2", "3", "4"].map(img_idx => (
                            <img
                                src={`/ campaign / ${ campaign.filename } -${ img_idx }.png`} //fix
                                key={img_idx}
                                alt="product"
                                className="border rounded at mt-3 mx-1"
                                style={{ height: 30, width: 30 }}
                                onMouseEnter={e => {
                                    setImgIdx(img_idx);
                                }}
                            />
                        ))}
                    </div> */}
                </div>
                <img className="campaignDetails-img" src={`${campaign.campaign_image_url} `} />
                <h1 className="campaignDetails-title">{campaign.title}</h1>
                <h2>Goal: ${campaign.goal} || Current Amount: ${campaign.current_amount} || Days listed: {campaign.days_active}</h2>
                <h6 className="campaignDetails-description">{`${campaign.description} `}</h6>


                <bs.Button onClick={getTotalScore} >Calculate</bs.Button>

                <br />
                <br />

        <bs.Row>
                <bs.Col md="4"> </bs.Col>

                <bs.Col md="4" > <CircularProgressbar
                    value={total}
                    text={`${total}% `}
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
                </bs.Col>
                <bs.Col md="4"> </bs.Col>
        </bs.Row>

            </div >
        );
    } else {
        return <p>Campaign Not Found</p>;
    }

}
export default CampaignDetails;
