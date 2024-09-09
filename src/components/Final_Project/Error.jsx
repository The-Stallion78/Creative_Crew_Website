import React from 'react';

const pageStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f4f8',
  fontFamily: 'Arial, sans-serif',
};

const boxStyle = {
  backgroundColor: '#ffefeb', 
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  maxWidth: '400px',
  border: '1px solid #ffb3b3',
  cursor: 'pointer'
};

const errorStyle = {
  color: '#d9534f',
  fontSize: '24px',
  margin: '0',
};

export default function Error() {
  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h1 style={errorStyle}>Page not found: Error 404</h1>
      </div>
    </div>
  );
}
