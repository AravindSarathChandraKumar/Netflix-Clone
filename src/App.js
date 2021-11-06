
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner  from './Banner';

function App() {
  return (
    <div className="App">
    <h1>Netflix-Clone</h1>
    <Row title ="Netflix Originals" fetchUrl={requests.retrieveNetFlixOriginals}
    islargeRow
    ></Row>
    <Row title ="Trending Now" fetchUrl={requests.retrieveHorrorMovies}></Row>
    <Row title ="Top Rate Movies" fetchUrl={requests.retrieveHorrorMovies}></Row>
    <Row title ="Horror Movies" fetchUrl={requests.retrieveHorrorMovies}></Row>
    <Row title ="Action Movies" fetchUrl={requests.retrieveActionMovies}></Row>
    <Row title ="Comedy Movies" fetchUrl={requests.retrieveComedyMovies}></Row>
    <Row title ="Romance Movies" fetchUrl={requests.retrieveRomanceMovies}></Row>
    <Row title ="Documentaries" fetchUrl={requests.retriveDocumentaries}></Row>
    </div>
  );
}

export default App;
