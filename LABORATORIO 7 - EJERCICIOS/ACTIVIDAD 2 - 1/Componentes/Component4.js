import React from 'react';
import Component5 from './Component5';

function Component4({ user }) {
  return (
    <div>
      <h2>Component 4</h2>
      <Component5 user={user} /> {/* Pasar el prop user a Component5 */}
    </div>
  );
}

export default Component4;