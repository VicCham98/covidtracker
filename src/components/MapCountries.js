import React, {Fragment, useState} from 'react';
import ReactTooltip from 'react-tooltip';
import MapChart from "./MapChart";

const MapCountries = ({data, value, setValue}) => {
    const [content, setContent] = useState("");
    return (
        <Fragment>
            <MapChart
                setTooltipContent={setContent}
                value={value}
                setValue={setValue}
                data={data}
            />
            <ReactTooltip>{content}</ReactTooltip>
        </Fragment>
    );
};

export default MapCountries;