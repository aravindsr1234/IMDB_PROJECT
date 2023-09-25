import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export function useWatchlist() {
  return useContext(WatchlistContext);
}

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (item) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, item]);
  };

  const removeFromWatchlist = (itemId) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((item) => item.id !== itemId)
    );
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        watchlistCount: watchlist.length,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
