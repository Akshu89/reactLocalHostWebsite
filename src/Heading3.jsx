import React from "react";
// import './index.css';

function Heading3(){
    let currDate = new Date(2000,2,2,2);
    currDate = currDate.getHours();
    let greeting = '';
    const cssStyle = {};
    if (currDate >= 1 && currDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    }
    else if (currDate >= 12 && currDate < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';
    }
    else {
        greeting = 'Good Night';
        cssStyle.color = 'blue';
    }
    return ( 
    <div className="divPro">
    <h1 className="h1Pro">Hello sir ,<span style={cssStyle}> {greeting} </span></h1>
    </div>);
}
export default Heading3;