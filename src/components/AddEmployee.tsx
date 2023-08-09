import React, { useState, useEffect } from "react";
import './Employee.style.css';
import { IEmployee } from "./Employee.type";

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClick: (data: IEmployee) => void
};

const AddEmployee = (props: Props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value)
    }

    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value)
    }

    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
    }

    const onSubmitClickHnd = (e: any) => {
        e.preventdefault()
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstname: firstName,
            lastname: lastName,
            email: email
        }
        onSubmitClick(data)
        onBackBtnClickHnd()
        console.log("Submit")
    }

    const { onBackBtnClickHnd, onSubmitClick } = props;
    return (
        <div className="form-container">
            <div>
                <h3>Add employee Page</h3>
            </div>
            <form onSubmit={onSubmitClickHnd}>
                <div className="">
                    <label>First Name :</label>
                    <input type="text" value={firstName} onChange={onFirstNameChangeHnd} />
                </div>

                <div>
                    <label>Last Name :</label>
                    <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
                </div>

                <div>
                    <label>Email :</label>
                    <input type="text" value={email} onChange={onEmailChangeHnd} />
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackBtnClickHnd} />

                    <input type="submit" value="Add employeeaaaa" />
                </div>
            </form>
        </div>
    )

}

export default AddEmployee;