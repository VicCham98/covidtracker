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
            <Row>
                <Col>
                    <ul className="d-flex justify-content-center">
                        <li className="d-inline-block text-center mr-5">
                            <h5>{allData.cases}</h5>
                            <p className="text-danger">Confirmados</p>
                        </li>
                        <li className="d-inline-block text-center mr-5">
                            <h5>{allData.recovered}</h5>
                            <p className="text-success">Recuperados</p>
                        </li>
                        <li className="d-inline-block text-center mr-5">
                            <h5>{allData.deaths}</h5>
                            <p>Muertes</p>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={7} className="border">
                    <MapCountries
                        setValue={setValue}
                        data={data}
                        value={value}
                    />
                </Col>
                <Col lg={3} className="border">
                    <Row className="d-flex justify-content-center">
                        <Col>
                            <p>Seleccione el pais</p>
                        </Col>
                        <Col>
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