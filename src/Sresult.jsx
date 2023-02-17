import React from "react";

const Sresult = (props) => {
    const imgs=`https://picsum.photos/200/300?${props.name}`
    return (
        <>
        <img src={imgs} alt="img"/>
        </>
    );
};
export default Sresult;
