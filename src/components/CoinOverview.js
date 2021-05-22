import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useFetch from '../hooks/useFetch';
import upOrDown from '../hooks/upOrDown';

const CoinOverview = () => {

    const { data: coins, isPending, error} = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d');
    


    return (
        <div className="coin-overview">
            <h2>Coin Overview (TOP 100)</h2>
                {error && <div> {error}</div>}
                {isPending && <div>Loading...</div>}
                {!isPending &&
                <div className="coins">
                    <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell align="right">#</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">24h</TableCell>
                            <TableCell align="center">7d</TableCell>
                            <TableCell align="center">Market Cap</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {coins.sort((a, b) => a.market_cap_rank - b.market_cap_rank).map((coin) => (
                            <TableRow key={coin.id}>
                            <TableCell align="right">{coin.market_cap_rank}</TableCell>
                            <TableCell align="left"><img src={coin.image} alt={coin.id} width="25" height="25"/>  {coin.name} ({coin.symbol.toUpperCase()}) </TableCell>
                            <TableCell align="center">{coin.current_price.toFixed(2)}$</TableCell>
                            <TableCell align="center" >{upOrDown(coin.price_change_percentage_24h.toFixed(2))}%</TableCell>
                            <TableCell align="center">{upOrDown(coin.price_change_percentage_7d_in_currency.toFixed(2))}%</TableCell>
                            <TableCell align="center">{coin.market_cap}$</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>}

        </div>
    );
}
 
export default CoinOverview;