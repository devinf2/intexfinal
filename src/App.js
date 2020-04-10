import React from "react";
import * as bs from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Left from "./left.js";
import Top from "./Top.js";
import Home from "./home.js";
import Campaign from "./campaign.js";
import Search from "./search.js";
import CampaignCard from "./campaignCard";
import Create from "./create.js";
// import Search from "./search.js"
import CampaignDetails from "./campaignDetails.js";
import Welcome from "./welcome.js"
import "./App.scss";

function App(props) {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
            <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow">
              <bs.Col
                className="px-3 py-2"
                style={{ backgroundColor: "#ccf1e0", color: "black" }}
              >
                <Top />
              </bs.Col>
            </bs.Row>

            <bs.Row noGutters className="flex-grow-1">
              {/* <bs.Col
                md="2"
                className="px-3 py-4 shadow"
                style={{ backgroundColor: "#4cce92", color: "white" }}
                
              >
                <Left />
              </bs.Col> */}

              <bs.Col md="12"
                style={{ backgroundColor: "#ccf1e0" }}>
                <Switch>

                  {/* <Route path="/search">
                    <Search />
                  </Route> */}
                  <Route path="/create">
                    <Create />
                  </Route>
                  <Route path="/campaign">
                    <Welcome />
                    {/* <Campaign /> */}
                  </Route>
                  <Route path="/search">
                    <Search />
                  </Route>
                  <Route path="/campaignDetails">
                    <CampaignDetails />
                  </Route>

                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </bs.Col>


            </bs.Row>

            {/* <bs.Row noGutters className="flex-grow-8">
              <bs.Col style={{ backgroundColor: "#ccf1e0", color: "gray", fontSize: '10px'}}>
                <Bottom />
              </bs.Col>
            </bs.Row> */}
          </bs.Container>
        </header>
      </div>
    </Router>
  );
}

export default App;
