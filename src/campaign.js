import React, { useState, useEffect } from "react";
import * as bs from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import CampaignCard from "./campaignCard";
import AppContext from "./context";
import CampaignList from "./campaignList"

function Campaign(props) {
  //   const context = useContext(AppContext);
  //   let campaignFields = context.campaigns;
  //   let CampaignArray = Object.values(context.campaign);

  const context = React.useContext(AppContext);

  // console.log("test", context)
  let CampaignArray = context.campaigns

  let [campaignArray, setCampaignArray] = useState(CampaignArray) 
  let [filterString, setFilterString] = useState("") 


  let onSearch = (value) => {
    setFilterString (value)
    // console.log(newArray)


    // setListArray(newArray);
    //use regex to compare strin
    // setCampaignArray = newArray
  }

  // let match = useRouteMatch("/campaign/:campaignID");

  // if (match) {
  //   CampaignArray = CampaignArray.filter(
  //     item => item.campaign == match.params.campaignID
  //   );
  // }

  return (
    
    <bs.Container fluid className="p-3">
        <input class="mb-3"
          type="text"
          
          onChange={event => {
            onSearch(event.target.value);
          }}
          placeholder="Search for Campaign"
        />
      <bs.Row >
        <CampaignList list={CampaignArray} filterString={filterString}/> 
       </bs.Row>
    </bs.Container>
  );

}

export default Campaign;
