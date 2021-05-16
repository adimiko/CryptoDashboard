import styled from 'styled-components';
import { useParams } from "react-router";
import useFetch from '../useFetch';

const CoinPage = () => {
    const { id } = useParams();
    const { data: coin, isPending, error} = useFetch('https://api.coingecko.com/api/v3/coins/' + id);
    //const { data: marketChart, isPending: isPendingChart, error: errorChart} = useFetch('https://api.coingecko.com/api/v3/coins/' + id + '/market_chart?vs_currency=usd&days=30');

    return (
        <div className="coin-page">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            { !isPending &&
            <Content>
                <TopBar>
                    <NameAndLogo>
                        <img src={coin.image.small} />
                        <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
                    </NameAndLogo>
                    <Price>
                        {coin.market_data.current_price.usd}$
                    </Price>
                </TopBar>

            </Content>
            }
        </div>
    );
}
const Content  = styled.div`

`;


const TopBar = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const NameAndLogo  = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Price = styled.div`
    font-size: 27px;
`;


export default CoinPage;