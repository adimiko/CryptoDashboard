import {useState} from 'react-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useFetch from './useFetch';
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
                            <Link expect to={`/coins/${coin.item.id}`}>
                            <div key={coin.item.id} className="top7-coins-24h-element">
                                    <b>
                                        {coin.item.score + 1}. <img src={coin.item.thumb} alt={coin.item.id} width="25" height="25"/> {coin.item.symbol.toUpperCase()}
                                    </b>
                            </div>
                            </Link>
                        ))}
                    </div>}
        </div>
    );
}
 
export default Top7Coins24h;