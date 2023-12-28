import axios from 'axios';
import { useEffect, useState } from 'react';

const Comments = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/jsonplaceholder/comments')
            .then(response => {
                setData(response.data);
            })
    }, []);

    return (
        <div>
            <h1>Comments Data</h1>
            {data && data.map(data =>
                <div key={data.id}>
                    <p>user id: {data.userId}</p>
                    <p>id: {data.id}</p>
                    <p>name: {data.name}</p>
                    <p>email: {data.email}</p>
                    <p>body: {data.body}</p>
                </div>
            )}
        </div>
    );
}

export default Comments;