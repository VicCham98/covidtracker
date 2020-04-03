import React, {Fragment, useState} from 'react';
import {Row, Col} from "reactstrap";
import CountrySelector from "../components/CountrySelector";
import DataSelected from "../components/DataSelected";
import MapCountries from "../components/MapCountries";
import GetCountry from "../hooks/GetCountry";
import GetAllData from "../hooks/GetAllData";
import url from "../config";

const Home = () => {
    const {data} = GetCountry(`${url}countries`);
    const {allData} = GetAllData(`${url}all`);
    const [value, setValue] = useState("PE");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Fragment>
            <Row>
                <Col className="text-center">
                    <h4>CASOS DE COVID-19 EN EL MUNDO</h4>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <ul className="d-flex justify-content-center">
                        <li className="d-inline-block text-center mr-5">
                            <h4>{allData.cases}</h4>
                            <p className="text-danger">Confirmados</p>
                        </li>
                        <li className="d-inline-block text-center mr-5">
                            <h4>{allData.recovered}</h4>
                            <p className="text-success">Recuperados</p>
                        </li>
                        <li className="d-inline-block text-center mr-5">
                            <h4>{allData.deaths}</h4>
                            <p>Muertes</p>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={7}>
                    <MapCountries
                        setValue={setValue}
                        data={data}
                        value={value}
                    />
                </Col>
                <Col lg={3}>
                    <Row className="d-flex justify-content-center">
                        <Col xl={6} lg={5} md={3} sm={4}>
                            <div className="text-md-right">
                                <strong>Seleccione el pais</strong>
                            </div>
                        </Col>
                        <Col xl={6} lg={7} md={5} sm={8}>
                            <CountrySelector
                                data={data}
                                onChange={handleChange}
                                value={value}
                            />
                        </Col>
                    </Row>
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