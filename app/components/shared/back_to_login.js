import React from 'react';
import { Link } from 'react-router-dom';
const back_to_login = () => {
  return (
    <div className='new-account mt-3 text-center'>
      <p className='mt-3'>
        <Link className="text-primary" to="/login">
          Back to Aristotle Login
        </Link>
      </p>
    </div>
  );
};

export default back_to_login;
