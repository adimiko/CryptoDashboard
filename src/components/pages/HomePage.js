import CoinOverview from '../CoinOverview'
import Top7Coins24h from '../Top7Coins24h'

const HomePage = () => {
    return (
        <div className="home-page">
            <Top7Coins24h />
            <CoinOverview />
        </div>
    );
}
 
export default HomePage;