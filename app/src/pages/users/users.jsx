import { Admin, Resource } from 'react-admin';
import { List, Datagrid, TextField, EmailField } from "react-admin";

import { dataProvider } from './dataProvider';

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

export const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
  </Admin>
);