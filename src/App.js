// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavbarComponent } from "./components";
import { API_URL } from './utils/constants'
import axios from 'axios'
// import ListCategories from './components/ListCategories';
// import NavbarComponent from './components/NavbarComponent';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categoriYangDipilih: 'Makanan'
    }
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama="+this.state.categoriYangDipilih)
      .then(res => {
        // console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus : []
    })

    axios
      .get(API_URL + "products?category.nama="+value)
      .then(res => {
        // console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { menus, categoriYangDipilih } = this.state
    // console.log(this.state.menus);
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories changeCategory={this.changeCategory} categoriYangDipilih={categoriYangDipilih} />
              <Col>
                <h4><strong> Daftar Produk </strong></h4>
                <hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                    />
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

