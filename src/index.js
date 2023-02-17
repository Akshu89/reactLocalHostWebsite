// var React = require('react'); //both are same
// var ReactDOM = require('react-dom'); // both are same
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>hello world</h1>,document.getElementById('root'));

//babel tranlated
// ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Hello World!!"), document.getElementById('root'));

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!!!";
// document.getElementById("root").appendChild(h1);

//render (what to show,where to show,callback function)
// ReactDOM.render(
//     //for multiple jsx element
//     // <div>
//     //     <h1>Hello World!</h1>
//     //     <p>The first line.</p>
//     // </div>,

//     //its like arr["i","am"]
//     // [
//     //     <h1>Hello World!</h1>,
//     //     <p>The first line.</p>
//     // ],

//     // <React.Fragment>
//     //     <h1>Hello World!</h1>
//     //     <p>The first line.</p>
//     // </React.Fragment>,

//     <>
//         <h1>Hello World!</h1>
//         <p>The first line.</p>
//     </>,
//     document.getElementById('root'));
//challenge 1 for show five series name.
// ReactDOM.render(
//     <>
//         <h1>Netflix Pick</h1>
//         <p>List of 5 Best Series.</p>
//         <ol>
//             <li>Money Heist</li>
//             <li>Stranger Things</li>
//             <li>The vampire Diaries</li>
//             <li>Dark</li>
//             <li>Mr robot</li>
//         </ol>
//     </>,
//     document.getElementById("root")
// );
//js expression in jsx
// const name = "harry";
// ReactDOM.render(
//     <>
//         <h1>Hey  {name} , Good morning</h1>
//         <p>Today is {9+3}th day.</p>
//     </>,
//     document.getElementById("root")
// );

//template literals in jsx
// const fname = "harry";
// const lname = "potter";

// ReactDOM.render(
//     <>
//         <h1>{`Hey  ${fname} ${lname} , Good morning`}</h1> 
//         <p>Today is {9+3}th day.</p>
//     </>,
//     document.getElementById("root")
// );

// //challenge 2
// import React from "react";
// import ReactDOM from "react-dom";
// const name="harry";
// const date = new Date().toLocaleDateString();
// const time=new Date().toLocaleTimeString();
// ReactDOM.render(
//     <>
//         <h1>Hello, My name is {name}</h1>
//         <p>todays date is {date}</p>
//         <p>current time is {time}</p>
//     </>,
//     document.getElementById("root")

// );

// jsx attributes

// .heading{
//     color: #fa9191;
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     margin: 80px;
//     font-family: 'Tiro Tamil', serif;
// }
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// const name = "harry";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const links = 'https://www.google.com';

// const heading={
//     color: "#fa9191",
//     textAlign: "center",
//     textTransform: "capitalize",
//     fontWeight: "bold",
//     margin: "80px",
//     fontFamily: "'Tiro Tamil', serif"
// }
// ReactDOM.render(
//     <>
//         <h1 style={heading}>Hello , My name is {name}</h1>
//         <div className="img_div">
//             <img src={img1} alt="randomeImg" />
//             <img src={img2} alt="randomeImg" />
//             <a href={links} target="__blanc" >
//                 <img src={img3} alt="randomeImg" />
//             </a>
//         </div>
//     </>,
//     document.getElementById("root")

// );


//challenge 3
// import './index.css';
// let currDate = new Date(2022,3,8,20);
// currDate = currDate.getHours();
// let greeting = '';
// const cssStyle = {};
// if (currDate >= 1 && currDate < 12) {
//     greeting = 'Good Morning';
//     cssStyle.color = 'green';
// }
// else if (currDate >= 12 && currDate < 19) {
//     greeting = 'Good Afternoon';
//     cssStyle.color = 'orange';
// }
// else {
//     greeting = 'Good Night';
//     cssStyle.color = 'blue';
// }



// ReactDOM.render(
//     <>
//         <div className="divPro">
//             <h1 className="h1Pro">Hello sir ,<span style={cssStyle}> {greeting} </span></h1>

//         </div>

//     </>,
//     document.getElementById("root")
// );


// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";
// import App from "./App";

// ReactDOM.render(
//     <>
//         {/* <Heading />
//         <Para />
//         <List/> */}
//         {/* <h1> My name is harry</h1> */}
//         {/* <p>This is my world</p> */}
//         {/* <ol>
//             <li>harry</li>
//             <li>potter</li>
//             <li>ron</li>
//             <li>herminy</li>
//         </ol> */}
//         <App/>
//     </>
//     , document.getElementById("root")

// );


// APP USE
// import React from "react";  
// import ReactDOM from "react-dom";
// import App from "./App";
// ReactDOM.render(<App/> , document.getElementById("root"));

// import export
// import React from 'react';
// import ReactDOM from 'react-dom';
// import actor,* as que from './App';
// import actor,{favProg,myName,myNames} from './App';
// import './index.css';


// ReactDOM.render(
//     <>
//         <ol>
//             <li>tom</li>
//             <li>{que.default}</li>
//             <li>{que.favProg}</li>
//             <li>{que.myName()}</li>
//             <li>{que.myNames()}</li>
//             {/* <li>tom</li>
//             <li>{actor}</li>
//             <li>{favProg}</li>
//             <li>{myName()}</li>
//             <li>{myNames()}</li> */}
//         </ol>
//     </>
//     ,document.getElementById("root"));

//challenge 5
// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App';

// ReactDOM.render(<App/> ,document.getElementById("root"));




//NETFLIX APP PROJECT
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// ReactDOM.render(<App/>, document.getElementById("root"));



//SLOT MACHINE GAME  PROJECT
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));

// //use of "..." in react
// const fullName = ["harry","potter"];
// const biodata = [1,...fullName,23,"male"];
// console.log(fullName);
// console.log(biodata);

// //use of "..." in react
// const sgame=["a","fd","fds"];
// const fgame=["ds","asd","cxv"];
// const game=[...sgame,...fgame];
// console.log(sgame);
// console.log(game);

// //use of "..." in react
// const thegame=["this is a first game","asd","cxv","dsffw"];
// const[first,...lastgame]=thegame;
// console.log(first);//this is a first game
// console.log(lastgame);

// const fullName = { 
//     fname:"harry",
//     lname:"potter"};
// const biodata = {
//     id:1,
//     ...fullName,
//     age:23,
//     gen:"male"};
// console.log(fullName);
// console.log(biodata);


//react router
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//     , document.getElementById("root")
// ); 
//-------------------------------Accordion---------------------------------------------
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
//     <App />
//     , document.getElementById("root")
// );
//-------------------------------state wise traker in covid-19---------------------------------------------
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <App />
    , document.getElementById("root")
);

