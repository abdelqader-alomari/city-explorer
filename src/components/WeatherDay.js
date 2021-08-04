import React from 'react';
import Card from 'react-bootstrap/Card';
class WeatherDay extends React.Component {
    render() {

        return (
            <div>
                <Card style={{ width: '15rem', float: 'right', margin: '1rem 2rem 1rem 0rem' }} className="text-center mb-3 bg-info">
                    <Card.Title className="p-3 text-white">Date: {this.props.weather.date}</Card.Title>
                    <Card.Body>
                        {this.props.weather.description}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default WeatherDay;