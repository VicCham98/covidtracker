import React, {Fragment} from 'react';
import CardData from "./CardData";
import "../assets/css/DataSelected.css"
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

const DataSelected = ({data, value}) => {
    const currentCountry = data.find(element => element.countryInfo.iso2 === value);
    if (typeof currentCountry != 'undefined'){
        return (
            <Fragment>
                <Row>
                    <Col lg={12} md={4} sm={6}>
                        <div className="d-flex justify-content-lg-center justify-content-md-center py-3">
                            <img className="img-thumbnail rounded img-size" src={currentCountry.countryInfo.flag} alt="pais"/>
                        </div>
                    </Col>
                    <Col lg={6} md={4} sm={6} xs={12}>
                        <h5>Datos generales</h5>
                        <CardData
                            titulo="Confirmados"
                            data={currentCountry.cases}
                        />
                        <CardData
                            titulo="Recuperados"
                            data={currentCountry.recovered}
                        />
                        <CardData
                            titulo="Muertes"
                            data={currentCountry.deaths}
                        />
                    </Col>
                    <Col lg={6} md={4} sm={12} xs={12}>
                        <h5>Datos de hoy</h5>
                        <CardData
                            titulo="Casos"
                            data={currentCountry.todayCases}
                        />
                        <CardData
                            titulo="Muertes"
                            data={currentCountry.todayDeaths}
                        />
                        <CardData
                            titulo="Activos"
                            data={currentCountry.active}
                        />
                        <CardData
                            titulo="Estado critico"
                            data={currentCountry.critical}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    } else return null
};

export default DataSelected;