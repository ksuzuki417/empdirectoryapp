import React from "react";

function Directory(props) {
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Github ID</th>
                </tr>
            </thead>
            <tbody>
                <td> {props.id}</td>
                <td> {props.firstName}</td>
                <td> {props.lastName}</td>
                <td> {props.title}</td>
                <td> {props.email}</td>
                <td> {props.github}</td>

            </tbody>

            
        </table>
    )
}

export default Directory;