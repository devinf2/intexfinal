import React from "react";
import { useContext } from "react";
import AppContext from "./context";
import Form from 'react-bootstrap/Form';
import * as bs from "react-bootstrap";
import { Link } from "react-router-dom";
// import React from "react";

function CampaignCard(props) {
  // const context = useContext(AppContext);
  // //   let campaignFields = context.campaigns;
  // //   let CampaignArray = Object.values(context.campaign);
  // const [query, setQuery] = React.useState("");
  // // let CampaignArray = context.campaigns
  // let newDict = {};
  // if (query !== "") {
  //   newDict = Object.values(context.campaign).filter(match => match.title.toLowerCase().includes(query))
  // }
  // else {
  //   newDict = Object.values(context.campaign)
  // }
  // console.log("2")

  // console.log(props.item)
  return (
    <div>
      {/* <bs.Row>
        <bs.InputGroup>
          <bs.FormControl type="text" value={query} onChange={(event) => setQuery(event.target.value)}>

          </bs.FormControl>
        </bs.InputGroup>

      </bs.Row> */}




      <bs.Card>
        <Link
          to={"/campaignDetails/" + props.item.id}
          className="btn position-absolute"
          style={{
            backgroundColor: "#d3d3d3",
            right: "0",
            opacity: 0.5,
            color: "black"
          }}
        >
          Details
      </Link>
        <bs.Container style={{
          width: '18rem',
          height: '20rem',
          top: 10
        }} >

          {/* <bs.Container style={{
          width: '16rem',
          height: '10rem',
          marginBottom: 5
        }}> */}
          <bs.Card.Img className="campaignCard-img" src={`${props.item.campaign_image_url}`} />
          {/* </bs.Container> */}

          < bs.Card.Title style={{
            align: 'middle',
            padding: 5
          }}>{props.item.title}</bs.Card.Title>
          <bs.Card.Title style={{ fontWeight: 5 }} > Goal: ${props.item.goal}</bs.Card.Title>
          <bs.Card.Title style={{ fontWeight: 5 }}>Current Amount: ${props.item.current_amount}</bs.Card.Title>
          {/* <bs.Card.Title> "</bs.Card.Title> */}
        </bs.Container>



      </bs.Card >

    </div >



  );
}

export default CampaignCard;
