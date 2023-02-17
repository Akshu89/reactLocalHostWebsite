import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [move, setMove] = useState();
    useEffect(() => {
        // alert("ds");
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setName(res.data.name);
            setMove(res.data.moves.length);
        }
        getData();
    })
    return (
        <>
            <h1>you choose <span style={{ color: "red" }}>{num}</span>  value</h1>
            <h1>my name is <span style={{ color: "red" }}>{name}</span> </h1>
            <h1>i have <span style={{ color: "red" }}>{move}</span>  value</h1>
            <select
                value={num}
                onChange={(event) => {
                    setNum(event.target.value);

                }}>

                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </>
    );
};
export default Pokemon;
