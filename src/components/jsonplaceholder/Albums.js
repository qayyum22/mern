import axios from 'axios';
import { useEffect, useState } from 'react';

const Albums = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/jsonplaceholder/albums')
            .then(response => {
                setData(response.data);
            })
    }, []);

    return (
        <div>
            <h1>Albums Data</h1>
            {data && data.map(data =>
                <div key={data.id}>
                    <p>user id: {data.userId}</p>
                    <p>id: {data.id}</p>
                    <p>title: {data.title}</p>
                </div>
            )}
        </div>
    );
}

export default Albums;