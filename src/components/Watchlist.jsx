import React, { useState, useEffect } from "react";
import axios from "axios";
const Watchlist = () => {

    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        axios.get("http://localhost:3005")
            .then((response) => {
                setData(response)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    /**
     * Author: Aravind
     * desc: Remove from watch list
     * params: 
     */
    const removeFromWatchlist = (id) => {
        try {
            axios.delete(`http://localhost:3005/${id}`)
                .then((res) => {
                    console.log(res);
                    fetchData();
                }).catch((e) => {
                    console.log(e)
                })
        } catch (e) {
            console.log(e)
        }
        // window.location.reload()
    };

    return (
        <div className="watchList">
            {data.data && Array.isArray(data.data) ? (
                data.data.map((item, index) => (
                    <div key={index} className="watchlist_dataCards">
                        <img src={item.image} alt="" />
                        <div className="watchlist_dataCards_content">
                            <button onClick={() => removeFromWatchlist(item.id)}>Delete from Watchlist</button>
                        </div>
                    </div>
                ))
            ) : (
                <p></p>
            )}
        </div>
    )
}

export default Watchlist