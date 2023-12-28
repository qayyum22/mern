import axios from 'axios';
import { useEffect, useState } from 'react';

const Todos = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/jsonplaceholder/todos')
            .then(response => {
                setData(response.data);
            })
    }, []);

    return (
        <div>
            <h1>Todos Data</h1>
            {data && data.map(data =>
                <div key={data.id}>
                    <p>user id: {data.userId}</p>
                    <p>id: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>Completed: {data.completed}</p>
                </div>
            )}
        </div>
    );
}

export default Todos;