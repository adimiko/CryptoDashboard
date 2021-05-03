const CoinPage = () => {
    const { id } = useParams();
    const { data: coin, isPending, error} = useFetch('https://api.coingecko.com/api/v3/coins/' + id);
    return (
        <div className="coin-page">

        </div>
    );
}
 
export default CoinPage;