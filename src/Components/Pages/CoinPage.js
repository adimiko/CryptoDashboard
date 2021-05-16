import { useParams } from "react-router";
import useFetch from '../useFetch';

const CoinPage = () => {
    const { id } = useParams();
    const { data: coin, isPending, error} = useFetch('https://api.coingecko.com/api/v3/coins/' + id);
    return (
        <div className="coin-page">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            { !isPending &&
                <div>
                    <img src={coin.image.small}></img>
                    <h1>{coin.name}</h1>
                    <article dangerouslySetInnerHTML={{__html: coin.description.en}}></article>
                </div>
            }
        </div>
    );
}
 
export default CoinPage;