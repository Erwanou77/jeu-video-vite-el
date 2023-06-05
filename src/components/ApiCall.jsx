import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = ({ url, params, render, boolList }) => {
    const [games, setGames] = useState(boolList ? [] : {});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { params });
                const data = boolList ? response.data.results : response.data;
                boolList ? setGames(prevGames => [...prevGames, ...data]) : setGames(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, params]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return render(games);
};

export default ApiCall;