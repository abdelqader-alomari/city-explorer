import React from 'react';
import { Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';

export class Movies extends React.Component {
    render() {
        return (
            <div >
                <Container
                >
                    <Card >
                        <Card.Img
                        />
                        <Card.Body>
                            <Card.Title>
                                {this.props.title}
                            </Card.Title>
                            <Card.Text

                            >
                                {this.props.overview}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                Released On:{' '}
                                <span>
                                    {this.props.released_on}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Popularity:{' '}
                                <span>
                                    {this.props.popularity}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Average Votes:{' '}
                                <span >
                                    {this.props.average_votes}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Total Votes:{' '}
                                <span >
                                    {this.props.total_votes}
                                </span>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Container>
                <br />
            </div>
        );
    }
}

export default Movies;