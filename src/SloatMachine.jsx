import React from "react";
const SloatMachine = (props) =>{
    // let x= props.x;
    // let y= props.y;
    // let z= props.z;
    let {x,y,z} = props;
    if (x===y &&y===z) {
        return(
            <>
                <div className="slot_inner">
                    <h1 style={{padding : "10px"}} className="inner_h">
                        {x} {y} {z}
                    </h1>
                    <h1 className="inner_h">This is Matching.</h1>
                    <hr/>
                </div>
            </>
        );
    }
    else {
        return(
            <>
                <div className="slot_inner">
                    <h1 style={{padding : "10px"} } className="inner_h">
                        {x} {y} {z}
                    </h1>
                    <h1 className="inner_h">This is not Matching.</h1>
                    <hr/>
                </div>
            </>
        );
    }
}
export default SloatMachine;