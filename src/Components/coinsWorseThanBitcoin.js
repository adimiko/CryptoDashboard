const coinsWorseThanBitcoin = (coins) => {

    let btc = coins.filter(coin => coin.id == "bitcoin")[0];

    return coins.filter(coin => coin.price_change_percentage_30d_in_currency < btc.price_change_percentage_30d_in_currency)
    .sort((a, b) => a.price_change_percentage_30d_in_currency - b.price_change_percentage_30d_in_currency);
}
 
export default coinsWorseThanBitcoin;