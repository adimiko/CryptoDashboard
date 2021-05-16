import Disclaimer from '../Disclaimer';
import useFetch from '../useFetch';

const DisclaimerPage = () => {
    const { data, isPending, error} = useFetch('https://api.alternative.me/fng/');
    return (
        <div className="disclaimer-page">
            {!isPending &&
            <div>
            <h1>{data.name}</h1>
            </div>}
            
            <Disclaimer />
        </div>
    );
}
 
export default DisclaimerPage;