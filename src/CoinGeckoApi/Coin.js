
class Top7Coins24h{
    constructor() {
        const { data, isPending, error} = useFetch('https://api.coingecko.com/api/v3/search/trending');
        
        this.coins = [];
        data.coins.forEach(coin => {
            
            this.coins.push()
        });
        
      }
}

class TrendCoin{
    constructor() {
        const { data, isPending, error} = useFetch('https://api.coingecko.com/api/v3/search/trending');

      }
}
