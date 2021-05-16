import { useState } from 'react-dom';
import useFetch from './useFetch';

const InfoBarElementFg = ({name, value }) => {
    const { data:fg, isPending, error} = useFetch('https://api.alternative.me/fng/');

    return (
        <div>
            {!isPending && <div className="info-bar-element">F&G Index<br/>{fg.data[0].value_classification} ({fg.data[0].value})</div>}
        </div>
    );
}
 
export default InfoBarElementFg;