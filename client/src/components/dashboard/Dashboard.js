import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import Cards from './Cards';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  });
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='medium text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'> Welcome {user && user.name} </i>
      </p>
      {profile !== null ? (
        <Fragment>
          <p>
            <i>Status</i>: <b>Booked</b>
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            <i>Status</i>: <b>Not Booked</b>
          </p>
        </Fragment>
      )}
      <Fragment>
        <Cards />
      </Fragment>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
