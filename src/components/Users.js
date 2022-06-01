import React from "react";

const Users = ({ users = [] }) => {
  return (
    <div className="row">
      {users.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ width: "300px" }}>
            <img src={item.picture.large} alt="" />
            <div className="card-body">
              <h5 className="card-title">{`${item.name.title} ${item.name.first} ${item.name.last}`}</h5>
              <hr />
              <strong>Gender:</strong> {item.gender}
              <br />
              <strong>Age:</strong> {item.dob.age}
              <br />
              <strong>Country:</strong> {item.location.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
