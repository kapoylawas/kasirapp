// import logo from './logo.svg';
// import './App.css';
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, NavbarComponent } from "./components";
// import ListCategories from './components/ListCategories';
// import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong> Daftar Produk </strong></h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
