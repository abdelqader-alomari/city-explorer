import React from 'react';
import WeatherDay from './components/WeatherDay';
class Weather extends React.Component {
    render() {

        return (
            <div>
                {this.props.weatherData.map((weather, idx) => {
                    return (
                        <WeatherDay
                            weather={weather}
                            key={idx} />
                    )
                })}
            </div>
        )
    }
}
export default Weather;