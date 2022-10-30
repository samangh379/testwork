import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [detail, setDetail] = useState([]);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        axios.get(`https://63581241c27556d289368088.mockapi.io/api/v1/users/${id}`).then((response) => {
            setDetail([response.data]);
        });
    }, []);

    const update = () => {
        axios
            .put(`https://63581241c27556d289368088.mockapi.io/api/v1/users/${id}`, {
                firstName: "saman",
                lastName: "gholami",
                city: "tehran",
                address: "test",
            })
            .then((response) => {
                setDetail([response.data]);
            });
    };

    return (
        <div>
            <h1>Details</h1>
            <div>
                {detail.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3> date : {item.createdAt}</h3>
                            <h3> firstName : {item.firstName}</h3>
                            <h3> lastName : {item.lastName}</h3>
                            <h3> City: {item.city}</h3>
                            <h3> Address: {item.address}</h3>
                        </div>
                    );
                })}
            </div>
            <div className="buttons">
                <button onClick={() => update()}>update</button>
            </div>
        </div>
    );
};

export default Details;
