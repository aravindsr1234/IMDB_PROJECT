import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function MainContent() {
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [idData, setIdData] = useState([]);
    const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false);

    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    console.log(id);

    useEffect(() => {
        const res = axios.get(`https://imdb-api.projects.thetuhin.com/title/${id}`)
            .then((res) => {
                console.log(res.data)
                setIdData(res.data)
                dataWithId(res.data.title)
            })
    }, []);

    function dataWithId(title) {
        console.log("datas", title)
        const res = axios.get(`https://imdb-api.projects.thetuhin.com/search?query=${title}`)
            .then((res) => {
                console.log("response data  ", res.data)
                setData(res.data)
            })
        console.log(res)
    }

    const addToWatchlist = () => { 
        console.log("watchlist check");
        const watchlist = {
            id: idData.id,
            image: idData.image,
            title: idData.title
        }
        console.log("watchlist data", watchlist);

        axios.post("http://localhost:3005", {
            id: idData.id,
            image: idData.image,
            title: idData.title
        })
            .then((res) => {
                console.log(res);

            })
        navigate('/Watchlist')
        setIsAddedToWatchlist(true);
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
                            {/* <div className="dataCard_btn">
                                <button>+</button>
                            </div> */}
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