import React, {Fragment, useState, useEffect} from 'react';
import {Row, Col} from "reactstrap";
import CountrySelector from "../components/CountrySelector";
import DataSelected from "../components/DataSelected";
import MapCountries from "../components/MapCountries";
import GetCountry from "../hooks/GetCountry";
import url from "../config";

const Home = () => {
    const {data} = GetCountry(`${url}countries`);
    const [value, setValue] = useState("PE");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {

    });

    return (
        <Fragment>
            <Row>
                <Col className="text-center">
                    <h4>CASOS DE COVID-19 EN EL MUNDO</h4>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={2} md={3} sm={12}  className="text-sm-center text-md-right text-lg-right">
                    <p>Seleccione el pais</p>
                </Col>
                <Col lg={4} md={6} sm={6}>
                    <CountrySelector
                        data={data}
                        onChange={handleChange}
                        value={value}
                    />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={7} className="border">
                    <MapCountries
                        data={data}
                        value={value}
                    />
                </Col>
                <Col lg={3} className="border">
                    <DataSelected
                        data={data}
                        value={value}
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Home;