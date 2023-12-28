import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/jsonplaceholder/users")
            .then(response => {
                setData(response.data);
            })
    }, []);

    return (
        <div>
            <h1>Users Data</h1>
            {data && data.map(data =>
                <div key={data.id}>
                    <p>id: {data.id}</p>
                    <p>name: {data.name}</p>
                    <p>Username: {data.usename}</p>
                    <p>EmailId: {data.email}</p>
                    <p>Address: {data.address.street}</p>
                    <p>phone: {data.phone}</p>
                    <p>website: {data.website}</p>
                    <p>company: {data.company.name}</p>
                </div>
            )};
        </div>
    );
};

export default Users;