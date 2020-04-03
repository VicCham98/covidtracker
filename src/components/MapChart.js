import React from 'react';
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({data, setTooltipContent, value, setValue}) => {
    const wrapperStyles = {
        width: "100%",
        maxWidth: 980,
        margin: "0 auto",
    };

    return (
        <div style={wrapperStyles} >
            <ComposableMap data-tip=""  width={980}
                           height={551}
                           style={{
                               width: "100%",
                               height: "auto",
                           }} >
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const currentCountry = value === geo.properties.ISO_A2;
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onClick={() => {
                                            setValue(geo.properties.ISO_A2);
                                        }}
                                        onMouseEnter={() => {
                                            const {NAME} = geo.properties;
                                            const currentCountry = data.find(element => element.countryInfo.iso2 === geo.properties.ISO_A2);
                                            if (typeof currentCountry != 'undefined'){
                                                setTooltipContent(
                                                    <div>
                                                        <h5 style={{fontSize: "1.25rem",
                                                            fontWeight: "600"}}>{NAME}</h5>
                                                        <div style={{fontSize: "1rem"}}>Confirmed: {currentCountry.cases}</div>
                                                        <div style={{fontSize: "1rem"}}>Recovered: {currentCountry.recovered}</div>
                                                        <div style={{fontSize: "1rem"}}>Deaths: {currentCountry.deaths}</div>
                                                    </div>
                                                );
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        style={{
                                            default: {
                                                fill: currentCountry ? "#F53" : "#D6D6DA",
                                                outline: "none",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                            },
                                            hover: {
                                                fill: "#F53",
                                                outline: "none",
                                                stroke: "#607D8B",
                                                strokeWidth: 2,
                                            },
                                            pressed: {
                                                fill: "#E42",
                                                outline: "none",
                                                stroke: "#607D8B",
                                                strokeWidth: 2,
                                            }
                                        }}
                                    />
                                )
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default MapChart;