import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        console.log(users);
        setUsers(response.data.users); 
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <table cellPadding={'0px'} cellSpacing={'0px'} class="table table-striped table-light">
      <thead>
        <tr class="table-success">
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Username</th>
          <th>Date of Birth</th>
          <th>Image</th>
          <th>Height</th>
          <th>Weight</th>
          <th>City</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Card Expire</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(users) && users.length > 0 ? (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.birthDate}</td>
              <td><img src={user.image} style={{width:'80px' ,height:'80px'}} alt="userimg"/></td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.company.address.city}</td>
              <td>{user.company.address.coordinates.lat}</td>
              <td>{user.company.address.coordinates.lng}</td>
              <td>{user.bank.cardExpire}</td>
              <td>{user.company.name}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="17">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default UserTable;