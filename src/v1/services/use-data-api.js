import { useState, useEffect } from 'react';
import axios from 'axios';
import { extract } from '../utils';


export const useDataApi = (endpoint, initialData) => {

    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            try {
                const result = await axios(endpoint)
                setData(extract(result));
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return [{ data, isLoading, isError }];
};