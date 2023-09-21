import React, { useState } from "react";
// import axios from 'axios';
// import Content from "./Content";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Watchlist from "./Watchlist";

function Header() {
    const navigate = useNavigate()

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    console.log(data)
    const searchData = (e) => {
        setQuery(e.target.value)
        console.log(query);
    }

    const search = () => {
        try {
            navigate(`/Content?query=${query}`);
            // const res = axios.get(`https://imdb-api.projects.thetuhin.com/search?query=${query}`)
            //     .then((res) => {
            //         console.log(res)
            //         setData(res.data)

            //     })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const Watchlist = localStorage.length;
    console.log(Watchlist)

    return (
        <div>
            <header>
                <a href="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" width={64} height={32} /></a>
                <div className="header_menu">
                    <i class="fa-solid fa-bars"></i>
                    <h3>Menu</h3>
                </div>
                <div className="searchBAr">
                    <input className="searchInput" type="text" placeholder="Search IMDb" onChange={searchData} />
                    <button className="searchBtn" onClick={search} ><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <h3 className="Pro">IMDb<span>Pro</span></h3>
                <div className="watchlist">
                    <i class="fa-regular fa-heart"></i>
                    <Link to= '/Watchlist'>
                        <h3>Watchlist ({`${Watchlist}`})</h3>
                    </Link>
                </div>
                <h3>Sign in</h3>
                <h3>EN  <i class="fa-solid fa-angle-down"></i></h3>
            </header>
        </div>
    )
}

export default Header;