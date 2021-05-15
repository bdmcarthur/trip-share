import React, { Component } from "react";
import * as CityServices from "../services/city-services";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        };
    }
    componentDidMount = () => {
        this.getCities();
    };

    getCities = () => {
        CityServices.getCitiesService()
            .then(city => {
                this.setState({
                    cities: city
                });
            })
            .catch(error => {
                console.log(error);
            });
    };


    render() {
        let cities = this.state.cities
        let cityContainer = {
            position: "relative",
            textAlign: "center",
            color: "white",
            height: "300px",
            overflow: "hidden",
        }

        let cityText = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "45px",
            textShadow: "rgb(0 0 0) 5px 0px 5px, rgb(0 0 0) 1px 1px 0px, rgb(0 0 0) 1px -1px 0px, rgb(0 0 0) -1px -1px 0px",
            color: "white"
        }

        return (
            <div>
                <div className="container text-center">
                    {cities && (
                        <div class="row">
                            {cities.map(city => (
                                <div class="col-md-6" style={cityContainer}>
                                    <Link to={`/city/${city.title}`}>
                                        <h4 style={cityText}>{city.title}</h4>
                                        <img src={city.imageUrl} class="w-100 mt-4"></img>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                    <Link to="/city/new" className="btn mt-5">
                        <FontAwesomeIcon icon={faPlus} size={"5x"} />
                    </Link>

                </div>
            </div>
        )
    }
}

export default Cities;