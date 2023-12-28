import axios from 'axios';
import { useEffect, useState } from 'react';

const Photos = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/jsonplaceholder/photos')
            .then(response => {
                setData(response.data);
            })
    }, []);

    return (
        <div>
            <h1>Photos Data</h1>
            {data && data.map(data =>
                <div key={data.id}>
                    <p>AlbumId: {data.albumId}</p>
                    <p>id: {data.id}</p>
                    <p>title: {data.title}</p>
                    <p>url: {data.url}</p>
                    <p>ThumbnailUrl: {data.thumbnailUrl}</p>
                </div>
            )}
        </div>
    );
}

export default Photos;