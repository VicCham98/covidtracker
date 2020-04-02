import {useEffect, useState} from 'react';
import Axios from "axios";

const GetCountry = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await Axios.get(url);
                let data = await res.data;
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchResource();
    }, [url]);

    return {data}
};

export default GetCountry;