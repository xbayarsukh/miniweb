// src/components/Alert.js
import React from 'react';

const Alert = ({ message, type }) => {
  return (
    <div
      style={{
        padding: '15px',
        backgroundColor: type === 'error' ? '#f8d7da' : '#d4edda',
        color: type === 'error' ? '#721c24' : '#155724',
        borderRadius: '5px',
        marginBottom: '20px',
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
