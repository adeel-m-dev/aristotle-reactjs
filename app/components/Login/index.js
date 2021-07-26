import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Index extends Component {
  render() {
    return (
      <>
        <h4 className='text-center mb-4'>
          Sign in your account
        </h4>
        <form action='index.html'>
          <div className='form-group'>
            <label className='mb-1'>
              <strong>Email</strong>
            </label>
            <input type='email' className='form-control' />
          </div>
          <div className='form-group'>
            <label className='mb-1'>
              <strong>Password</strong>
            </label>
            <input type='password' className='form-control' />
          </div>
          <div className='form-row d-flex justify-content-between mt-4 mb-2'>
            <div className='form-group'>
              <div className='custom-control custom-checkbox ml-1'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='basic_checkbox_1'
                />
                <label
                  className='custom-control-label'
                  htmlFor='basic_checkbox_1'
                >
                  Remember my preference
                </label>
              </div>
            </div>
            <div className='form-group'>
              <Link to={'/forgot-password'}>
                Forgot Password?
              </Link>

            </div>
          </div>
          <div className='text-center'>
            <Link to={'/dashboard'} className="btn btn-primary btn-block">
              Sign Me In
            </Link>
          </div>
        </form>
        <div className='new-account mt-3'>
          <p>
            Don't have an account?{' '}
            <Link to={'/register'} className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </>
    );
  }
}
