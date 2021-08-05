import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from "./components/Restaurant";
import { Container } from "react-bootstrap";

class Restaurants extends Component {
    render() {
        return (
            <>
                <section>
                    {this.props.restaurantData.length && <h2 className="text-center text-dark mb-5"> <br /> Restaurants Related To The City</h2>}
                    <Container className="d-flex flex-wrap justify-content-center">
                        {this.props.restaurantData.map((restaurant, idx) => {
                            return (
                                <Restaurant
                                    restaurantData={restaurant}
                                    key={idx} />
                            );
                        })}
                    </Container>
                </section>
            </>
        );
    }
}

export default Restaurants;