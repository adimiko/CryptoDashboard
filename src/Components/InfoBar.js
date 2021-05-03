import { Container, Row, Col } from 'react-bootstrap'
import InfoBarElement from './InfoBarElement';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import currencyFormatter from './currencyFormatter';
import upOrDown from './upOrDown';

const InfoBar = () => {
    const { data: global, isPending, error} = useFetch('https://api.coingecko.com/api/v3/global');
    //const { data: fg, isPendingFg, errorFg} = useFetch('https://api.alternative.me/fng');




    return (
        <div className="info-bar">
            {!isPending && <InfoBarElement name={"Market Cap"+" ("+upOrDown(global.data.market_cap_change_percentage_24h_usd.toFixed(1)) +"%)"} value={currencyFormatter(global.data.total_market_cap['usd'])} />}
            {!isPending && <InfoBarElement name="Volume 24h" value={currencyFormatter(global.data.total_volume['usd'])}/>}
            {!isPending && <InfoBarElement name="BTC Dominance" value={global.data.market_cap_percentage.btc.toFixed(2) + '%'} />}
        </div>
    );
}
 
export default InfoBar;