import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import UserService from "../services/UserService";

const AddUserComponent = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateUser = (u) => {
        u.preventDefault();

        const user = { name, surname, email };

        if (id) {
            UserService.updateUser(id, user).then((response) => {
                navigate('/users');
            }).catch(error => {
                console.log(error)
            })
        } else {
            UserService.createUser(user).then((response) => {
                console.log(response.data);
                navigate('/users');
            }).catch(error => {
                console.log(error);
            });
        }
    };

    useEffect(() => {
        UserService.getUserById(id).then((respoonse) => {
            setName(respoonse.data.name)
            setSurname(respoonse.data.surname)
            setEmail(respoonse.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    const title = () => {
        if (id) {
            return <h2 className="text-center">Update User</h2>
        } else {
            return <h2 className="text-center">Add User</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(u) => setName(u.target.value)}>
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Surname :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter surname"
                                        name="surname"
                                        className="form-control"
                                        value={surname}
                                        onChange={(u) => setSurname(u.target.value)}>
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Email :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(u) => setEmail(u.target.value)}>
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(u) => saveOrUpdateUser(u)}> Submit</button>
                                <Link to="/users" className="btn btn-danger"
                                    style={{ marginLeft: "10px" }}> Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddUserComponent