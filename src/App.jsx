// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App(){
//     return (
//         <>
//             <Heading/>
//             <Para/>
//             <List/>
//         </>
//     );
// }
// export default App;

//challenge 3
// import React from "react";
// import Heading3 from "./Heading3";
// function App(){
//     return(<Heading3/>);
// }
// export default App;

// import export
// import React from "react";

// function myName() {
//     let fname="harry";
//     return (fname);
// }
// function myNames() {
//     let lname="potter";
//     return (lname);
// }
// const actor="harry potter";
// const favProg="react js";
// export default actor;
// export {favProg,myName,myNames};

//challegen 5
// import React from "react";
// import {add,sub,mul,div} from './Calc';
// function App() {
//     return(
//     <>
//         <ul>
//             <li>sum of two number {add(10, 5)}</li>
//             <li>sub of two number {sub(30, 4)}</li>
//             <li>mul of two number {mul(30, 4)}</li>
//             <li>div of two number {div(19, 3)}</li>
//         </ul>
//     </>);
// }
// export default App;


//NETFLIX APP
// import React from "react";
// import Card from "./Cards";
// import Sdata from "./Sdata";
// import Heading from "./Heading";
// import Amazon from "./Amzon";
// import Netflix from "./Netflix";
// const favSeries="Netflix";
// // const Favs=()=>{
// //     // if (favSeries==="Netflix") {
// //     //     return <Netflix/>;
// //     // }
// //     // else{
// //     //     return <Amazon/>;
// //     // }
// // };
// const App = () => (
//     <>
//         <Heading />
//         {/* <Favs/> */}
//         { (favSeries==="Netflix")?<Netflix/>:<Amazon/>}
//         {/* {Sdata.map((val) => {
//             return (
//                 <Card
//                     key={val.id}
//                     imgSrc={val.imgSrc}
//                     title={val.title}
//                     sname={val.sname}
//                     link={val.link}
//                 />
//             );
//         })} */}
//     </>
// );
// export default App;



// SLOT MACHINE GAME
// import React from "react"; 
// import SloatMachine from "./SloatMachine"; 
// const App = ()=>{
//   return(
//     <>
//         <h1 className="heading-style"> 
//          🎰 Welcome to 
//          <span style={{fontWeight: "bold"}}> Sloat machine game </span> 🎰 
//          </h1>
//          <SloatMachine x="😊" y="😊" z="😊"/>
//          <SloatMachine x="😘" y="😊" z="😊"/>
//          <SloatMachine x="😊" y="😊" z="😍"/>
//     </>
//   );
// }
// export default App;

// react hooks
// import React, { useState } from "react";

// const App = () => {

//     const state = useState();
//     // console.log(state);
//     let [count,setcount]=useState(0);


//     // const count=0;
//     const IncNum = () => {
//         setcount(count+1);
//         console.log('clicked ' + count++);
//     }
//     return (
//         <>
//             <div>
//                 <h1>{count}</h1>
//                 <button onClick={IncNum}>Click Me</button>

//             </div>
//         </>
//     );
// }
// export default App;

//react hooks challenge
// import React, { useState } from "react";

// const App = () => {
//     let time= new Date().toLocaleTimeString();
//     // time=time.ge
//     console.log(time);

//     const state = useState();
//     // console.log(state);
//     let [ctime,setcount]=useState(time);


//     // // const count=0;
//     const IncNum = () => {
//         let newTime=new Date().toLocaleTimeString()
//         setcount(newTime);
//     }
//     return (
//         <>
//             <div>
//                 <h1>{ctime}</h1>
//                 <button onClick={IncNum}>Click Me</button>

//             </div>
//         </>
//     );
// }
// export default App;

//creat digital clock
// import React, { useState } from "react";
// const App=()=>{
//     let time=new Date().toLocaleTimeString();
//     const start=useState();
//     let [ctime,setctime]=useState(time);
//     const Updatetime=()=>{
//         let time=new Date().toLocaleTimeString();
//         setctime(time);

//     }

//     setInterval(Updatetime, 1000);
//     return(
//         <>
//             <div>
//                 <h1 >{ctime}</h1>
//                 {/* <button onClick={Updatetime}>get time</button> */}
//             </div>
//         </>
//     );

// }
// export default App;

//events 
// import React, { useState } from "react";
// import "./index.css";
// const App = () => {
//     const purple="#8e44ad"
//     const [bg,setbg]=useState(purple);
//     const [name,setName]=useState("Click Me");

//     const bgChange=()=>{
//         // console.log('click');
//         let newBg="#34495e";
//         setbg(newBg);
//         setName("Ouch!! 😱");
//     }
//     const BgBack=()=>{
//         setbg(purple);     
//         setName("lol... 😆");
//     }
//     return (
//         <>
//             <div className="back" style={{backgroundColor:bg}}>
//                 <button className="Btn" onClick={bgChange} onDoubleClick={BgBack}>{name}</button>
//             </div>
//         </>

//     );

// }
// export default App;

//forms in react
// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//     const [name, setName] = useState();
//     const [fullName, setFullname] = useState();
//     const InputEvent = (event) => {
//         // console.log("click");
//         console.log(event.target.value);
//         setName(event.target.value);
//     }
//     const onSubmit = () => {
//         setFullname(name);
//     }
//     return (
//         <>
//             <div className="back">
//                         <h1>Hello {fullName}</h1>
//                         <input type='text' placeholder="Enter your name" onChange={InputEvent} />
//                         {/* <input type='text' placeholder="Enter your password" onChange={InputEvent}/> */}
//                         <button className="Btn" onClick={onSubmit}>Clike Me:</button>

//             </div>
//         </>
//     );
// }
// export default App;

//login form submit
// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//     const [name, setName] = useState("");
//     const [lastName, setlastName] = useState("");
//     const [newName, setNewName] = useState();
//     const [newlastName, setNewlastName] = useState();
//     const InputEvent = (event) => {
//         // console.log("click");
//         console.log(event.target.value);
//         setName(event.target.value);
//     };
//     const InputEvent2 = (event) => {
//         // console.log("click");
//         console.log(event.target.value);
//         setlastName(event.target.value);
//     };
//     const onSubmit = (event) => {
//         event.preventDefault();
//         setNewName(name);
//         setNewlastName(lastName);
//     };
//     return (
//         <>
//             <div>
//                 <form onSubmit={onSubmit}>
//                     <div  className="back">
//                         <h1>Hello {newName} {newlastName}</h1>
//                         <input 
//                         type='text' 
//                         placeholder="Enter your name" 
//                         onChange={InputEvent} 
//                         value={name}
//                         />

//                         <input 
//                         type='text' 
//                         placeholder="Enter your last name" 
//                         onChange={InputEvent2} 
//                         value={lastName}
//                         />
//                         <br/>
//                         <button className="Btn"type="submit">Submit Me:</button>

//                     </div>

//                 </form>
//             </div>
//         </>
//     );
// };
// export default App;

//handling complex multiple input form
// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname:"",
//         lname:"",
//         email:"",
//         phone:"",
//         quas:"",
//     });

//     const InputEvent = (event) => {
//         // console.log("click");
//         console.log(event.target.value);
//         console.log(event.target.name);

//         // const value=event.target.value;
//         // const name=event.target.name;
//         const {value,name}=event.target;

//         setFullName((prevalue)=>{

//             console.log(prevalue);
//             return{
//                 ...prevalue,
//                 [name]:value,
//             }
//             // if (name==="fname") {
//                 //     return{
//                     //         fname:value,
//                     //         lname:prevalue.lname,
//             //         email:prevalue.email,
//             //         phone:prevalue.phone,
//             //     };
//             // }
//             // else if(name==="lname"){
//             //     return{
//             //         fname:prevalue.fname,
//             //         lname:value,
//             //         email:prevalue.email,
//             //         phone:prevalue.phone,
//             //     };
//             // }
//             // else if (name==="email") {
//             //     return{
//             //         fname:prevalue.fname,
//             //         lname:prevalue.lname,
//             //         email:value,
//             //         phone:prevalue.phone,
//             //     };
//             // }
//             // else if (name==="phone") {
//             //     return{
//             //         fname:prevalue.fname,
//             //         lname:prevalue.lname,
//             //         email:prevalue.email,
//             //         phone:value,
//             //     };
//             // }
//         });
//     };
//     const onSubmit = (event) => {
//         event.preventDefault();
//         alert("form submited");
//     };
//     return (
//         <>
//             <div>
//                 <form onSubmit={onSubmit}>
//                     <div  className="back">
//                         <h1>Hello {fullName.fname} {fullName.lname}</h1>
//                         <p>{fullName.email}</p>
//                         <p>{fullName.phone}</p>
//                         <p>{fullName.quas}</p>
//                         <input 
//                         type='text' 
//                         placeholder="Enter your name" 
//                         onChange={InputEvent} 
//                         name="fname"
//                         value={fullName.fname}
//                         />
//                         <input 
//                         type='text' 
//                         placeholder="Enter your last name" 
//                         onChange={InputEvent} 
//                         name="lname"
//                         value={fullName.lname}
//                         />

//                         <input 
//                         type='email' 
//                         placeholder="Enter your email" 
//                         onChange={InputEvent} 
//                         name="email"
//                         value={fullName.email}
//                         />

//                         <input 
//                         type='number' 
//                         placeholder="Enter your phone number" 
//                         onChange={InputEvent} 
//                         name="phone"
//                         value={fullName.phone}
//                         />

//                         <input 
//                         type='number' 
//                         placeholder="Enter your qualifiactions" 
//                         onChange={InputEvent} 
//                         name="quas"
//                         value={fullName.quas}
//                         />
//                         <br/>
//                         <button className="Btn"type="submit">Submit Me:</button>

//                     </div>

//                 </form>
//             </div>
//         </>
//     );
// };
// export default App;

//to do list
// import React, { useState } from "react";
// import "./index.css";
// import ToDoList from "./ToDoList";

// const App = () => {
//     const [inputList, setInputlist] = useState("");
//     const [items, setItems] = useState([]);

//     const itemEvent = (event) => {
//         setInputlist(event.target.value)
//     };
//     const listOfItems = () => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList];
//         })
//         setInputlist("");
//     };
//     const deleteItems=(id)=>{
//         console.log("deleted");
//         setItems((oldItems)=>{
//             return(oldItems.filter((arrElem,index)=>{
//                return index!==id;
//             }))
//         })
//     }
//     return (
//         <>
//             <div className="main_div">
//                 <div className="ceneter_div">
//                     <br />
//                     <h1>To Do List</h1>
//                     <br />
//                     <input type="text"
//                         placeholder="Add a Iteams"
//                         onChange={itemEvent}
//                         value={inputList}

//                     />
//                     <button
//                         onClick={listOfItems}> + </button>
//                     <ol>-

//                         {items.map((itemVal, index) => {
//                             return (<ToDoList
//                                 key={index}
//                                 id={index}
//                                 text={itemVal}
//                                 onSelect={deleteItems}
//                             />);
//                         })
//                         }
//                     </ol>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default App;

// import React, { useState } from "react";
// import "./index.css";
// const App = () => {
//     const [value, setValue] = useState(0);
//     const incremant = () => {
//         setValue(value + 1)
//     }
//     const decremant = () => {

//         if (value > 0) {
//             setValue(value - 1);

//         }
//         else {
//             setValue(0);
//             alert("value reached to zero");

//         }
//     }

//     return (
//         <>
//             <div className="main_div">
//                 <div className="ceneter_div">
//                     <h1>{value}</h1>
//                     <div className="btn_div">
//                         <button onClick={incremant}>Increm</button>
//                         <button onClick={decremant}>Decrem</button>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }
// export default App;

// import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// // import "./index.css";
// const App = () => {
//     return (
//         <>
//         <br/>
//         <h1 className=" text-capitalize text-center mt-5 text-danger">Welcome to bootstrap</h1>
//         <button className="btn btn-warning">hello</button>
//         <br/>
//         <br/>
//         <br/>

//         <div class="input-group mb-3">
//   <span class="input-group-text" id="basic-addon1">@</span>
//   <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
// </div>

// <div class="input-group mb-3">
//   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
//   <span class="input-group-text" id="basic-addon2">@example.com</span>
// </div>

// <label for="basic-url" class="form-label">Your vanity URL</label>
// <div class="input-group mb-3">
//   <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
//   <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
// </div>

// <div class="input-group mb-3">
//   <span class="input-group-text">$</span>
//   <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
//   <span class="input-group-text">.00</span>
// </div>

// <div class="input-group mb-3">
//   <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
//   <span class="input-group-text">@</span>
//   <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
// </div>

// <div class="input-group">
//   <span class="input-group-text">With textarea</span>
//   <textarea class="form-control" aria-label="With textarea"></textarea>
// </div>
//         </>
//     );
// }
// export default App;

// import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//     return (
//         <>
//             <h1 className=" text-center text-capitalize text-danger m-5">Welcome To My Channel</h1>
//             <div className="container text-center">
//                 <div className="row">
//                     <div className="col">
//                         <div className="card" >
//                             <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." style={{height:"200px"}}/>
//                             <div className="card-body">
//                                 <h5 className="card-title">Card title</h5>
//                                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="https://www.google.com/" className="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="card">
//                             <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." style={{height:"200px"}}/>
//                             <div className="card-body">
//                                 <h5 className="card-title">Card title</h5>
//                                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="https://www.google.com/" className="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="card">
//                             <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." style={{height:"200px"}}/>
//                             <div className="card-body">
//                                 <h5 className="card-title">Card title</h5>
//                                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="https://www.google.com/" className="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default App;

// cresctrContext()

// provider

// consumer
// import React, { createContext } from "react";
// import ComA from "./ComA";

// const FirstName = createContext();
// const LastName = createContext();
// const App = () => {
//     return (
//         <>
//             <FirstName.Provider value={"herr "}>
//                 <LastName.Provider value={"potter"}>
//                     <ComA />
//                 </LastName.Provider>
//             </FirstName.Provider>

//         </>
//     );
// };
// export default App;
// export { FirstName,LastName };

//use context hooks

// import React, { createContext } from "react";
// import ComA from "./ComA";
// const FirstName = createContext();
// const LastName = createContext();
// const App = () => {
//     return (
//         <>
//             <FirstName.Provider value={"herry"}>
//                 <LastName.Provider value={"potter"}>
//                     <ComA />
//                 </LastName.Provider>
//             </FirstName.Provider>

//         </>
//     );
// };
// export default App;
// export { FirstName, LastName };


//google keep app
// import React, { useState } from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import CreateNote from "./CreateNote";
// import Note from "./Note";
// import './index.css';
// const App = () => {
//     const [addItems, setAddItems] = useState([]);


//     const addNote = (note) => {
//         // alert("this is deleted.");    
//         setAddItems((prevData) => {

//             return [...prevData, note];
//         })
//         console.log(note);
//     }
//     const onDelete = (id) => {
//         setAddItems((oldData) => 
//             oldData.filter((currdata, indx) => {
//                 return indx !== id;
//             })
//         )
//     }
//     return (
//         <>
//             <div className="main_div">
//                 <Header />
//                 <CreateNote passNote={addNote} />
//                 {addItems.map((val, index) => {
//                     return <Note
//                         key={index}
//                         id={index}
//                         title={val.title}
//                         content={val.content}
//                         deleteItem={onDelete}
//                     />
//                 })}


//                 <Footer />
//             </div>
//         </>
//     );
// };
// export default App;

//useeffect hooks
// import React, { useEffect, useState } from "react";

// const App = () => {
//     const [num, setNum] = useState(0);
//     const [nums, setNums] = useState(0);
//     useEffect(()=>{
//         // alert("clicked");
//         console.log("clicked");
//     },[num]);
//     return (
//         <>
//             <button onClick={()=>{
//                 setNum(num+1);
//             }}>
//                 Click Me {num}
//             </button>
//             <button onClick={()=>{
//                 setNums(nums+1);
//             }}>
//                 Click Me {nums}
//             </button>
//         </>
//     );
// };
// export default App;

// import React, { useEffect, useState } from "react";


// const App = () => {
//     const [num, setNum] = useState(0);
//     useEffect(()=>{
//         document.title=`you clicked me ${num}`;
//     })
//     return (
//         <>
//             <button onClick={() => {
//                 setNum(num + 1);
//             }}>
//                 Click Me {num}
//             </button>
//         </>
//     );
// };
// export default App;


//--------------------------------------react router-------------------------------------------------
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Service from "./Service";
// import User from "./User";
// import Contact from "./Contact";
// import Error from "./Error";
// import Navbar from "./Navbar";
// import Search from "./Search";
// import "./index.css";
// const App = () => {

//     const Name = () => {
//         return (
//             <h1>hello,i am nMame pafge____</h1>
//         );
//     };

//     return (
//         <>
//             <Navbar />
//             <Routes>
//                 <Route exact path="/" element={<About name="About"/>} />
//                 <Route exact path="/service" element={<Service name="Service"/>} />
//                 <Route exact path="/contact" element={<Contact name="contact"/>} />
//                 <Route exact path="/user/:fname/:lname" element={<User/>} />
//                 <Route exact path="/search" element={<Search/>} />
//                 <Route path="/contact/name" element={<Name />} />
//                 <Route path="*" element={<Error />} />

//             </Routes>
//             {/* <About/>
//            <Contact/> */}
//         </>
//     );
// };
// export default App;



//---------------------------react API call to get pokemon JSON data using axios-------------------------------------------------

// import React from "react";
// import Pokemon from "./Pokemon";
// const App = () => {
//     return (
//         <>
//             <Pokemon/>
//         </>
//     );
// };
// export default App;

//--------------------------------Accordion using react--------------------------------------------

import React from "react";
import Accordion from "./component/accordion/Accordion";

const App = () => {
    return (
        <>
            <Accordion />
        </>
    );
};
export default App;

//--------------------------------State wise tracker in covid-19-------------------------------------------

// import React from "react";
// import StateWise from "./component/stateWiseDtata/stateWise";
// const App = () => {
//     return (
//         <>
//             <StateWise />
//         </>
//     );
// };
// export default App;
