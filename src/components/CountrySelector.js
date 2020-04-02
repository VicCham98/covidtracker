import React, {Fragment} from 'react';

const CountrySelector = ({data, onChange, value}) => {
    return (
        <Fragment>
            <select value={value} className="custom-select" onChange={onChange}>
                {
                    data.map((country, i) => {
                        return(
                            <option key={i} value={country.countryInfo.iso2}>{country.country}</option>
                        )
                    })
                }
            </select>
        </Fragment>
    );
};

export default CountrySelector;