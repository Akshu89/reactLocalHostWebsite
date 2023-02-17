import React, { useEffect, useState } from "react";

const StateWise = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <h1>INDIA COVID-19 Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curele, ind) => {
                            return (
                                <tr key={ind}>
                                    <th>{curele.state}</th>
                                    <td>{curele.confirmed}</td>
                                    <td>{curele.recovered}</td>
                                    <td>{curele.deaths}</td>
                                    <td>{curele.active}</td>
                                    <td>{curele.lastupdatedtime}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    );
};
export default StateWise;
