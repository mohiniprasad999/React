import React from "react";
import './EmployeeList.css'
import { IEmployee } from "./Employee.type";

type Props = {
  list: IEmployee[];
}

const EmployeeList = (props: Props) => {
  const { list } = props
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      {list.map((employee: any) => {
        return (
          <tr key={employee.id}>
            <td>{`${employee.firstname} ${employee.lastname}`}</td>
            <td>{employee.email}</td>
            <td>
              <button type="button">View</button>
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </td>
          </tr>
        )
      })}

    </table>
  );
};

export default EmployeeList;
