import React, { useState } from "react";

const MyAccordion = ({question,answer}) => {
    const [show,setShow]=useState(false);
    return (
        <>
        <p onClick={()=>setShow(!show)}>{show?"_":"+"}</p>
            <h1>{question}</h1>
            
            {show && <p>{answer}</p>}
        </>
        
    );
};
export default MyAccordion;
