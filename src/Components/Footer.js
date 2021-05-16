import Disclaimer from './Disclaimer';

const Footer = () => {
    return (
        <footer className="footer">
            <b>Data provided by <a href="https://www.coingecko.com/en/api">CoinGecko API</a></b>
            <Disclaimer />
            <p>© {new Date().getFullYear()} All Rights Reserved. </p>
        </footer>
    );
}
 
export default Footer;