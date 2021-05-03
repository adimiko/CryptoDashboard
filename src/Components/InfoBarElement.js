import { useState } from 'react-dom';

const InfoBarElement = ({name, value }) => {

    return (
        <div className="info-bar-element"> {name} <br/> {value} </div>
    );
}
 
export default InfoBarElement;