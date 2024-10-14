import React from 'react';
import Component3 from './Component3';

function Component2({ user }) {
  return (
    <div>
      <h2>Component 2</h2>
      <Component3 user={user} /> {/* Pasar el prop user a Component3 */}
    </div>
  );
}

export default Component2;
