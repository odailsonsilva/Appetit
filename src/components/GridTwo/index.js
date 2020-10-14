import React from 'react';

import  './style.css';

function GridTwo(props) {
  return (
    <div>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, props)
        })
      }     
    </div>
  );
}

export default GridTwo;