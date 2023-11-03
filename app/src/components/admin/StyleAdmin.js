import React from 'react';
import { Admin } from 'react-admin';
import './AdminStyles.css';

const StyledAdmin = (props) => (
  <Admin {...props} className="styled-admin" />
);

export default StyledAdmin;
