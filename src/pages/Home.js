import React, {Fragment} from 'react';
import {Row, Col} from "reactstrap";
import CountrySelector from "../components/CountrySelector";
import DataSelected from "../components/DataSelected";
import MapCountries from "../components/MapCountries";

const Home = () => {
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
                    <CountrySelector/>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={7} className="border">
                    <MapCountries/>
                </Col>
                <Col lg={3} className="border">
                    <DataSelected
                        titulo="Confimados"
                        dato="5000"
                    />
                    <DataSelected
                        titulo="Recuperados"
                        dato="5000"
                    />
                    <DataSelected
                        titulo="Muertes"
                        dato="5000"
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Home;