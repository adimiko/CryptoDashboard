import useFetch from '../useFetch';
import coinsBetterThanBitcoin from '../coinsBetterThanBitcoin';
import coinsWorseThanBitcoin from '../coinsWorseThanBitcoin';


const AltseasonPage = () => {
    const { data: coins, isPending, error} = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=30d');

    
    return (
        <div className="altseason-page">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            {!isPending &&
            <div className="altseason-page-container">
                <div className="coins-better-than-btc">
                    <h2>Coins Better than BTC</h2>
                    {coinsBetterThanBitcoin(coins).map((coin,ranking) => (
                        <div>
                            {++ranking}. <img src={coin.image} alt={coin.id} width="25" height="25"/> {coin.name} ({coin.symbol.toUpperCase()}) {coin.price_change_percentage_30d_in_currency.toFixed(2)}%
                        </div>
                    ))}
                </div>
                <div className="altseason-bitcoin">
                        <img src={coins.filter(coin => coin.id == "bitcoin")[0].image} width="25" height="25"/>
                        {coins.filter(coin => coin.id == "bitcoin")[0].name}
                        {coins.filter(coin => coin.id == "bitcoin")[0].price_change_percentage_30d_in_currency.toFixed(2)}%
                </div>
                <div className="worse-better-than-btc">
                    <h2>Coins worse than BTC</h2>
                    {coinsWorseThanBitcoin(coins).map((coin,ranking) => (
                        <div>
                            {++ranking}. <img src={coin.image} alt={coin.id} width="25" height="25"/> {coin.name} ({coin.symbol.toUpperCase()}) {coin.price_change_percentage_30d_in_currency.toFixed(2)}%
                        </div>
                    ))}
                </div>
            </div>
            }   
        </div>
    );
}
 
export default AltseasonPage;