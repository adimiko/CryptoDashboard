import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InfoBar from './components/InfoBar';
import Navbar from './components/Navbar';
import FearAndGreedIndexPage from './components/pages/FearAndGreedIndexPage'
import Advertisement from './components/Advertisement';
import HomePage from './components/pages/HomePage';
import Footer from './components/Footer';
import NotFoundPage from './components/pages/NotFoundPage';
import CoinPage from './components/pages/CoinPage';
import AltseasonPage from './components/pages/AltseasonPage';
import DisclaimerPage  from './components/pages/DisclaimerPage';

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
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/fear-and-greed-index" component={FearAndGreedIndexPage} />
                  <Route exact path="/coins/:id" component={CoinPage} />
                  <Route exact path="/altseason" component={AltseasonPage} />
                  <Route exact path="/disclaimer" component={DisclaimerPage} />
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