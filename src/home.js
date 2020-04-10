import React from "react";
import "./App.scss";
import * as bs from "react-bootstrap";
import { Link } from 'react-router-dom'

function Home() {


  return (
    <bs.Container className="background-image" className="p-3" fluid="md" >
      <bs.Row>
        <bs.Col md="3">
          <h1></h1>
        </bs.Col>
      </bs.Row>
      <bs.Row>
        <bs.Col md="5" p="3" >
          <Link to="/create"><button><img src="media/createHome.jpg" width="500" roundedCircle /> Create</button>
          </Link>

        </bs.Col>
        <bs.Col md="1" >


        </bs.Col>
        <bs.Col md="5">
          <Link to="/campaign"><button><img src="media/analyticsHome.png" width="500" roundedCircle />  Campaign</button></Link>
        </bs.Col>
      </bs.Row>
      <bs.Row>
        <p></p>

      </bs.Row>

      <bs.Row>
        <bs.Jumbotron>
          <h2 className="h1">About GoFundMe Analytics</h2>
          
          <p className="lead">
          GoFundMe Analytics is a subsidiary of GoFundMe that is dedicated to helping customers
          optimize fund creation. Given the high level of competition and risk aversion of legitimate 
          donors it is harder than ever for legitimate individuals, couples and charitable organizations 
          to raise funds from strangers. Users enter in the features of their current funds and receive 
          a success score and predicted number of donations. They can then use this to make adjustments 
          to achieve an optimized campaign and maximize the amount of money raised. Let us worry about 
          building the trust.
              </p>
          


        </bs.Jumbotron>
      </bs.Row>
    </bs.Container>

  );
}
export default Home;
