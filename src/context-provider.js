import React from "react";
import axios from "axios";
import AppContext from "./context";
import App from "./App";
import Welcome from "./welcome"
import { produce } from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {


    };
    this.state = {

      campaigns: [],

    };
  }




  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <App />
        {/* <Welcome /> */}
      </AppContext.Provider>
    );
  }

  async componentDidMount() {
 

    try {
      const resp3 = await axios.get("https://fathomless-tundra-36625.herokuapp.com/api/campaign", { headers: { "Content-Type": "application/json" } })



      this.setState({ campaigns: resp3.data })
    }

    catch (error) {
      console.log(error)
    }
  }

}

