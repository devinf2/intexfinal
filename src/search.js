// import React from "react";
// import * as bs from "react-bootstrap";
// import axios from "axios";

// async function fetchCampaigns(query) {
//   try {
//     const response = await axios.get(`/campaign?query=${query}`); //do i need /api/campaign
//     console.log(response)
//     return response.data; //might need to change
//   } catch (error) {
//     console.log("Unable to fetch campaigns", error);
//   }
// }
// function Search() {
//   const [campaign, setCampaign] = React.useState([]);
//   const [query, setQuery] = React.useState("");

//   // const context = useContext(AppContext);
//   // //   let campaignFields = context.campaigns;
//   // //   let CampaignArray = Object.values(context.campaign);
//   // const [query, setQuery] = React.useState("");
//   // // let CampaignArray = context.campaigns
//   // let newDict = {};
//   // if (query !== "") {
//   //   newDict = Object.values(context.campaign).filter(match => match.title.toLowerCase().includes(query))
//   // }
//   // else {
//   //   newDict = Object.values(context.campaign)
//   // }

//   async function searchForCampaigns(event) {
//     event.preventDefault();
//     const campaign = await fetchCampaigns(query);
//     setCampaign(campaign);
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           onChange={event => {
//             setQuery(event.target.value);
//           }}
//           placeholder="Search for Campaign"
//           value={query}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {campaign.map(campaigns => (
//         <div
//           key={campaigns.title}
//           onClick={() => campaigns.selectCampaign(campaigns)}
//         ></div>
//       ))}
//     </div>
//   );
// }
// export default Search;


// // const [animal, setAnimal] = React.useState(null);
// // return (
// //   <div className="App">
// //     {campaign ? (
// //       <div>
// //         {/*display card info*/}
// //         <button onClick={() => setCampaign(null)}>Back</button>
// //       </div>
// //     ) : (
// //         <div>
// //           <h1>Search for Campaigns</h1>
// //           <Search selectCampaign={setCampaign} />
// //         </div>
// //       )}
// //   </div>
// // )