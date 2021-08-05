import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Movie extends React.Component {
    render() {

        return (
            <div>
                <Card style={{ width: '38rem', float: 'right', margin: '2rem 4rem 1rem 2rem' }} className="text-center mb-3 bg-dark">
                    <Card.Title className="p-3 text-white">Title: {this.props.moviesData.title}</Card.Title>
                    <ListGroupItem>
                        <Card.Img style={{ height: '20rem' }} src={this.props.moviesData.poster_path} fluid="true" alt="No image for this movie" />
                    </ListGroupItem>
                    <Card.Body className="bg-info" style={{ maxHeight: '10rem' }}>
                        {this.props.moviesData.overview}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            Released On:{' '}
                            <span>
                                {this.props.moviesData.release_date}
                            </span>
                        </ListGroupItem>
                        <ListGroupItem>
                            Popularity:{' '}
                            <span>
                                {this.props.moviesData.popularity}
                            </span>
                        </ListGroupItem>
                        <ListGroupItem>
                            Average Votes:{' '}
                            <span >
                                {this.props.moviesData.vote_average}
                            </span>
                        </ListGroupItem>
                        <ListGroupItem>
                            Votes Count:{' '}
                            <span >
                                {this.props.moviesData.vote_count}
                            </span>
                        </ListGroupItem>

                    </ListGroup>
                </Card>
            </div>
        )
    }
}
export default Movie;