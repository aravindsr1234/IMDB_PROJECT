import React, { useEffect, useState } from "react";
import axios from "axios";

function MainContent() {

    const [data, setData] = useState([]);
    console.log(data)
    const [idData, setIdData] = useState([]);
    console.log(idData)

    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    console.log(id);

    useEffect(() => {
        const res = axios.get(`https://imdb-api.projects.thetuhin.com/title/${id}`)
            .then((res) => {
                console.log(res.data)
                setIdData(res.data)
            })

    }, []);

    useEffect(() => {
        console.log("datas", idData.title)

        const res = axios.get(`https://imdb-api.projects.thetuhin.com/search?query=${idData.title}`)
            .then((res) => {
                console.log("response data  ", res.data)
                setData(res.data)

            })
        console.log(res)

    }, []);


    const addToWatchlist = () => {
        alert()
        const uniqueKey = `watchlistData_${Date.now()}`;
        localStorage.setItem(uniqueKey, JSON.stringify(idData));
    }



    return (
        <div>
            <div className="MainContent">
                <img src={idData.image} alt="" height={400} />
                <div className="MainContent_data">
                    <div className="MainContent_flex">
                        <h1 className="MainContent_title">{idData.title}</h1>
                        <div className="dataCard_btn">
                        <button onClick={addToWatchlist}>Add to Watchlist</button>
                        </div>
                    </div>
                    {/* <h3 className="rating">Rating Count : {idData.rating.count + " Rating : " + idData.rating.star}</h3> */}
                    <h2>{idData.plot}</h2>
                </div>
            </div>
            <div className="searchMainContent">
                {data.results && Array.isArray(data.results) ? (
                    data.results.map((item, index) => (
                        <div key={index} className="dataCard">
                            <img src={item.image} alt="" />
                            <div className="dataCards_content">
                                <h3>{item.title}</h3>
                                <h1>{item.type}</h1>
                            </div>
                            <div className="dataCard_btn">
                                <button>+</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    )
}

export default MainContent;