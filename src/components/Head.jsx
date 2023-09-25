import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Header() {
    const navigate = useNavigate()

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    console.log(data)

    // const searchData = (e) => {
    //     setQuery(e.target.value)
    //     console.log(query);
    // }

    // const search = () => {
    //     console.log("hello")
    //     try {
    //         // navigate(`/Content?query=${query}`);
    //         const res = axios.get(`https://imdb-api.projects.thetuhin.com/search?query=${query}`)
    //             .then((res) => {
    //                 console.log(res)
    //                 setData(res.data)

    //             })
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }


    const searchData = (e) => {
        const query = e.target.value
        console.log(query)

        if(query == ""){
            setData('')
        }else{
            const res = axios.get(`https://imdb-api.projects.thetuhin.com/search?query=${query}`)
            .then((res) => {
                console.log(res)
                setData(res.data)

            })
        }
        
    }


    const hello = (id) => {
        setData('')
        navigate(`/MainContent?id=${id}`)
        
    }


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
                    <button className="searchBtn"  ><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <h3 className="Pro">IMDb<span>Pro</span></h3>
                <div className="watchlist">
                    <i class="fa-regular fa-heart"></i>
                    <Link to='/Watchlist'>
                        <h3>Watchlist </h3>
                    </Link>
                </div>
                <h3>Sign in</h3>
                <h3>EN  <i class="fa-solid fa-angle-down"></i></h3>
            </header>

            {/* searched data */}

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
                    <p></p>
                )}
            </div>


        </div>
    )
}

export default Header;