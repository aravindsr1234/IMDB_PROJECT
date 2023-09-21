// import React, { useEffect, useState } from "react";

// function Watchlist() {

//     const [watchlistData, setWatchlistData] = useState([]);
//     console.log("asfasaf", watchlistData)


//     const allData = [];

//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);

//         try {
//             allData[key] = JSON.parse(value);
//         } catch (error) {
//             allData[key] = value;
//         }
//     }

//     console.log(allData);





//     return (
//         <div>
//             <h1>Watchlist</h1>
//             <div className="data-container">
//                 {allData.map((item, index) => (
//                     <div key={index} className="data-item">
//                         <h3>Key: {item.uniqueKey.id}</h3>
//                         <p>Value: {JSON.stringify(item.value)}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Watchlist;





import React, { useEffect, useState } from "react";

function Watchlist() {
    const [watchlistData, setWatchlistData] = useState([]);
    console.log("asfasaf", watchlistData);

    const allData = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        try {
            allData.push({ key, value: JSON.parse(value) });
        } catch (error) {
            allData.push({ key, value });
        }
    }

    console.log(allData);

    return (
        <div>
            <h1>Watchlist</h1>
            <div className="data-container">
                <div className="data-container-sep">
                {allData.map((item, index) => (
                    <div  className="data-item">
                        {/* <h3>Key: {item.key}</h3> */}
                        <p>Value: {item.value.title}</p>
                        <img src={item.value.image} alt="" width={100} height={100}/>
                        <h3>{item.title}</h3>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Watchlist;
