import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";
const Amazon=()=>{
    return(
        <Card
        key={Sdata[2].id}
        imgSrc={Sdata[2].imgSrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}
    />
    );
};
export default Amazon;