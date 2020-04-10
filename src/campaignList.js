import React, { useState, useEffect } from "react";
import * as bs from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import CampaignCard from "./campaignCard";
import AppContext from "./context";

function CampaignList(props) {
    let [listArray, setListArray] = useState(props.list) 
    let [constListArray, setConstListArray] = useState(props.list) 



    useEffect (()=> {

        let filteredList = []
        filteredList = constListArray.filter((obj)=>{
            return obj.title.toLowerCase().includes(props.filterString.toLowerCase());
        });

        setListArray(filteredList);

    }, [props.filterString])

  return (

    listArray.map(item => (

      <bs.Col className="mb-2" md="3" key={item.id}>
        <CampaignCard item={item} />
      </bs.Col>

    ))

  )
}


export default CampaignList;