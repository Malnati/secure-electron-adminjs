import React from "react";
import img from "Images/testimage.png";
import { Admin, Resource } from 'react-admin';
import { List, Datagrid, TextField, EmailField } from "react-admin";
import usersProvider from './usersDataProvider';

const dataProvider = usersProvider();

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
); 

class Image extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Loading images</h1>
        </div>
        <div className="container mt-2">
          This page is to demonstrate that we can load an image hosted from a
          directory in our project.
        </div>
        <div className="container mt-2">
          <img src={img} />
        </div>
        <div className="container mt-2">
          <Admin dataProvider={dataProvider}>
              <Resource name="users" list={UserList} />
          </Admin>
        </div>
      </section>
    );
  }
}

export default Image;
