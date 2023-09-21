import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Content() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    let params = new URLSearchParams(document.location.search);
    let query = params.get("query");
    console.log(query);


    useEffect(() => {


        const res = axios.get(`https://imdb-api.projects.thetuhin.com/search?query=${query}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)

            })
        console.log(res)

    }, []);

    const hello = (id) => {
        navigate(`/MainContent?id=${id}`)
        
    }
    return (
        <div className="content">

            {data.results && Array.isArray(data.results) ? (
                data.results.map((item, index) => (
                    <div key={index} className="dataCards" onClick={() => hello(item.id)}>
                        <img src={item.image} alt="" />
                        <div className="dataCards_content">
                            <h1>{item.title}</h1>
                            <h1>{item.type}</h1>
                            <h1>{item.year}</h1>
                        </div>
                        <div className="dataCards_btn">
                            <button>+</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>

    )
}




export default Content;