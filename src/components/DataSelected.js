import React, {Fragment} from 'react';
import CardData from "./CardData";

const DataSelected = ({data, value}) => {
    const currentCountry = data.find(element => element.countryInfo.iso2 === value);
    if (typeof currentCountry != 'undefined'){
        return (
            <Fragment>
                <img className="img-thumbnail rounded" style={{width: "50%", height: "auto"}} src={currentCountry.countryInfo.flag} alt="pais"/>
                <h5 className="mt-3" >Datos generales</h5>
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
                <h5 className="mt-3">Datos de hoy</h5>
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
            </Fragment>
        )
    } else return null
};

export default DataSelected;