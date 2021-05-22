import InfoBarElement from './InfoBarElement';
import useFetch from '../hooks/useFetch';
import currencyFormatter from '../hooks/currencyFormatter';
import upOrDown from '../hooks/upOrDown';
import InfoBarElementFg from './InfoBarElementFg';

const InfoBar = () => {
    const { data: global, isPending, error} = useFetch('https://api.coingecko.com/api/v3/global');


    return (
        <div className="info-bar">
            {error && <div> {error}</div>}
            {!isPending && <InfoBarElement name={`Market Cap ( ${upOrDown(global.data.market_cap_change_percentage_24h_usd.toFixed(1))} %)`} value={currencyFormatter(global.data.total_market_cap['usd'])} />}
            {!isPending && <InfoBarElement name="Volume 24h" value={currencyFormatter(global.data.total_volume['usd'])}/>}
            {!isPending && <InfoBarElement name="Dominance" value={`BTC ${global.data.market_cap_percentage.btc.toFixed(2)}%  ETH ${global.data.market_cap_percentage.eth.toFixed(2)} %`} />}
            <InfoBarElementFg/>
        </div>
    );
}
 
export default InfoBar;