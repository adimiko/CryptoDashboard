import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';


const Top7Coins24h = () => {

    const { data, isPending, error} = useFetch('https://api.coingecko.com/api/v3/search/trending');

    return (
        <div className="top7-coins-24h">
            <div className="top7-coins-24h-name"><b>TOP 7 Tranding Search 24h</b></div>
                {error && <div> {error}</div>}
                {isPending && <div>Loading...</div>}
                {!isPending &&
                    <div className="coins">
                        {data.coins.sort((a, b) => a.item.score - b.item.score).map((coin) => (
                            <div key={coin.item.id} className="top7-coins-24h-element">
                                <Link expect to={`/coins/${coin.item.id}`}>
                                    
                                            <b>
                                                {coin.item.score + 1}. <img src={coin.item.thumb} alt={coin.item.id} width="25" height="25"/> {coin.item.symbol.toUpperCase()}
                                            </b>
                                    
                                </Link>
                            </div>
                        ))}
                    </div>}
        </div>
    );
}
 
export default Top7Coins24h;