import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Restaurant extends React.Component {
    render() {

        return (
            <div>
                <Card style={{ width: '26rem', float: 'right', margin: '2rem 4rem 1rem 2rem', height: '42rem' }} className="text-center mb-3 bg-success">
                    <Card.Title className="p-3 text-white">Name: {this.props.restaurantData.name}</Card.Title>
                    <ListGroupItem>
                        <Card.Img style={{ height: '20rem' }} src={this.props.restaurantData.image_url} fluid="true" alt="No image for this movie" />
                    </ListGroupItem>
                    <Card.Body className='text-white' >
                        Price Range: {' '}  {this.props.restaurantData.price}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            Rating:{' '}
                            <span>
                                {this.props.restaurantData.rating}
                            </span>
                        </ListGroupItem>
                        <ListGroupItem>
                            URL:{' '}
                            <span >
                                {this.props.restaurantData.url}
                            </span>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}
export default Restaurant;