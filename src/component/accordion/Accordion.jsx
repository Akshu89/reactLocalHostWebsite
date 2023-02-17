import React, { useState } from "react";
import {questions} from "./AccordionAPI";
import MyAccordion from "./MyAccordion";
const Accordion=()=>{
    const [data,setData]=useState(questions);
    return(
        <>
            {
                data.map((curElem)=>{
                    const{id}=curElem;
                    return <MyAccordion key={id} {...curElem}/>
                })
            }
        </>
    );
}
export default Accordion;