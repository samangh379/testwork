import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const BASE_URL = "https://63581241c27556d289368088.mockapi.io/api/v1/users";
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL).then((response) => {
            setUser(response.data);
        });
    }, []);

    const addUser = () => {
        axios
            .post("https://63581241c27556d289368088.mockapi.io/api/v1/users", {
                firstName: "Amir",
                lastName: "Aghai",
                city: "Rasht",
                address: "test",
            })
            .then((response) => setUser([...user, response.data]));
    };

    return (
        <div style={{ height: "100vh" }}>
            <div style={{ textAlign: "center", width: "fit-content", margin: "20px auto", background: "white" }}>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>first name</th>
                            <th>last name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>
                                        <Link to={`/users/${item.id}`}>Details</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="addUser">
                <button
                    onClick={() => {
                        addUser();
                    }}>
                    Add user
                </button>
            </div>
        </div>
    );
};

export default Users;
