const upOrDown = (percent) => {

    if(percent > 0) return '↗ ' + percent;
    else if (percent < 0 ) return '↘ ' + percent;
    else return percent;

}
 
export default upOrDown;