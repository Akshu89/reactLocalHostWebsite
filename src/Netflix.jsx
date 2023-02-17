import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";
const Netflix=()=>{
    return(
        <Card
        key={Sdata[5].id}
        imgSrc={Sdata[5].imgSrc}
        title={Sdata[5].title}
        sname={Sdata[5].sname}
        link={Sdata[5].link}
    />
    );
};
export default Netflix;