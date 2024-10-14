import React from 'react';
import Component4 from './Component4';

function Component3({ user }) {
  return (
    <div>
      <h2>Component 3</h2>
      <Component4 user={user} /> {/* Pasar el prop user a Component4 */}
    </div>
  );
}

export default Component3;