import React from 'react';
import { Form, Button, Table } from 'react-bootstrap';
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
    const URL = `https://us1.locationiq.com/v1/search.php?key=pk.66676fe625f1ccc2023c8714ea9a1402&q=${cityName}&format=json`;

    try {
      let locationResult = await axios.get(URL);
      this.setState({
        name: locationResult.data[0].display_name,
        lon: locationResult.data[0].lon,
        lat: locationResult.data[0].lat,
        showMap: true,
        showErr: false,
      })
    }
    catch (error) {
      this.setState(
        {
          showMap: false,
          showErr: true,
          err: `Error: ${error.response.status},${error.response.data.error}`
        }
      )
    }
  };
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
        <div>
          {
            this.state.showMap &&
            <img width="100%" style={{ maxHeight: "600px" }} src={`https://maps.locationiq.com/v3/staticmap?key=pk.66676fe625f1ccc2023c8714ea9a1402&center=${this.state.lat},${this.state.lon}`} alt='map' />
          }
        </div>
        {this.state.showErr ? <p>{this.state.err}</p> : ''}
      </div >


    )
  }
}

export default App;
