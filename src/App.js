import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InfoBar from './Components/InfoBar';
import Navbar from './Components/Navbar';
import CoinOverview from './Components/CoinOverview';
import FearAndGreedIndexPage from './Components/FearAndGreedIndexPage'
import Advertisement from './Components/Advertisement';
import Top7Coins24h from './Components/Top7Coins24h';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import NotFoundPage from './Components/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
            <Row>
              <Col><Navbar /></Col>
            </Row>
            <Row>
              <Col><InfoBar/></Col>
            </Row>
            <Row>
              <Col><Advertisement/></Col>
            </Row>
            <Row>
              <Col>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/fear-and-greed-index">
                    <FearAndGreedIndexPage />
                  </Route>
                  <Route component={NotFoundPage} />
                </Switch>
              </Col>
            </Row>
            <Row>
              <Col><Advertisement/></Col>
            </Row>
            <Row>
              <Col><Footer/></Col>
            </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
