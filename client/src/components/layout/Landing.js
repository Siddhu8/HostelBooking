import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Hostel Booking</h1>
            <p className='lead'>Write Something ..!</p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-success'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-dark'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <h2 className='cap'>CopyRights 2020</h2>
      <p className='cap'>Contact : cmrorg@gmail.com</p>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
