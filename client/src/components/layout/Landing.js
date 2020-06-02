import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

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
            <p className='lead'>
              Where there are no strangers, just friends you have not met yet
              ..!
            </p>
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
      {/* <div className='copyrights'>
        <div className='left'>
          <Button>
            <i className='fa fa-facebook-square'></i>
          </Button>
          <Button>
            <i class='fa fa-envelope' aria-hidden='true'></i>
          </Button>
        </div>
        <div className='right'>
          <Button>
            <i className='fa fa-envelope'>cmrorg@gmail.com</i>
          </Button>
        </div>
  </div>*/}
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
