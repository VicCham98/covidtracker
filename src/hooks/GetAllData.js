import {useEffect, useState} from 'react';
import Axios from "axios";

const GetCountry = (url) => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await Axios.get(url);
                let data = await res.data;
                setAllData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchResource();
    }, [url]);

    return {allData}
};

export default GetCountry;