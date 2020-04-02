import React, {useState} from 'react';
import ReactTooltip from "react-tooltip";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapCountries = ({value}) => {

    // const data = [
    //     { id: "PE", name: "Iceland", val: 16 },
    // ];

    const [content, setTooltipContent] = useState("");

    return (
        <div>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }} style={{ width: "80%", height: "auto" }}  >
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                // const country = data.find(d => d.id === geo.properties.ISO_A2);
                                const currentCountry = value === geo.properties.ISO_A2;
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            const {NAME} = geo.properties;
                                            setTooltipContent(NAME);
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
                                                strokeWidth: 1,
                                            },
                                            pressed: {
                                                fill: "#E42",
                                                outline: "none",
                                                stroke: "#607D8B",
                                                strokeWidth: 1,
                                            }
                                        }}
                                    />
                                )
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
};

export default MapCountries;