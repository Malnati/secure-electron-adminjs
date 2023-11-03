import React from "react";
import { Admin, Resource } from 'react-admin';
import { List, Datagrid, TextField, EmailField } from "react-admin";
import { UsersProvider } from './usersDataProvider'; 

const dataProvider = UsersProvider.find;

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

class Users extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <Admin dataProvider={dataProvider}>
              <Resource name="users" list={UserList} />
          </Admin>
          Test
        </div>
      </section>
    );
  }
}

export default Users;
