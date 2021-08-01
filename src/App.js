import React from 'react';
import { Form, Button, ListGroup, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lon: '',
      lat: '',
      err: 'no response',
      showMap: false,
      showErr: false,
    }
  }

  explore = async (e) => {
    e.preventDefault();
    const cityName = e.target.city.value;
    console.log(cityName);
    const URL = `https://us1.locationiq.com/v1/search.php?key=pk.66676fe625f1ccc2023c8714ea9a1402&q=${cityName}&format=json`;

    let localResult = await axios.get(URL);
    this.setState({
      name: localResult.data[0].display_name,
      lon: localResult.data[0].lon,
      lat: localResult.data[0].lat,
    })
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <h1 className="header bg-dark text-white center" style={{ textAlign: 'center' }}>City Explorer</h1>
        <Form className onSubmit={this.explore}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Enter city name" name="city" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>

        <Table striped bordered hover size="sm mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>City Name</th>
              <th>City Longitude</th>
              <th>City Latitude</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{this.state.name}</td>
              <td>{this.state.lon}</td>
              <td>{this.state.lat}</td>
            </tr>
          </tbody>
        </Table>

      </div >
    )
  }
}

export default App;
