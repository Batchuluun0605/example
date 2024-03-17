import React from "react";

const Table = ({ data }) => {
  return (
    <table className="flex gap-10 justify-center">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.surname}</td>
              <td>{e.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
