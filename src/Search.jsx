import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
    const [img, setImg] = useState("");
    const InputEvent = (event) => {
        const ser = event.target.value;
        setImg(ser);
        console.log(ser);
    }
    return (
        <>
            <input
                type="text"
                value={img}
                placeholder="Search an image..."
                onChange={InputEvent}
            />
            {img === "" ? null : <Sresult name={img}/>}
        </>
    );
};
export default Search;
