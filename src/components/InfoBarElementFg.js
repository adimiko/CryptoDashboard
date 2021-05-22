import useFetch from '../hooks/useFetch';

const InfoBarElementFg = ({name, value }) => {
    const { data:fg, isPending, error} = useFetch('https://api.alternative.me/fng/');

    return (
        <div>
            {error && <div> {error}</div>}
            {!isPending && <div className="info-bar-element">Fear & Greed Index<br/>{fg.data[0].value_classification} ({fg.data[0].value})</div>}
        </div>
    );
}
 
export default InfoBarElementFg;