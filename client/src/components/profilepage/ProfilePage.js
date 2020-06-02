import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { hostelName, currency } from '../dashboard/Cards';
import { floorNo, roomNo, bedNo } from '../hosteldesc/HostelFloors';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profile';

const ProfilePage = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    collegeName: '',
    rollNo: '',
    yearofStudy: '',
    branch: '',
    phone: '',
    location: '',
    nameoftheHostel: hostelName,
    floorNumber: floorNo,
    roomNumber: roomNo,
    bedNumber: bedNo,
    cost: currency,
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    firstName,
    lastName,
    collegeName,
    rollNo,
    yearofStudy,
    branch,
    phone,
    location,
    nameoftheHostel,
    floorNumber,
    roomNumber,
    bedNumber,
    cost,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Add some changes to your profile
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* FirstName'
            name='firstName'
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* LastName'
            name='lastName'
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* College Name'
            name='collegeName'
            value={collegeName}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            CMRCET, CMRIT, CMRTC, CMREC suggested...
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Roll No'
            name='rollNo'
            value={rollNo}
            onChange={(e) => onChange(e)}
          />
          {/* <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
    </small>*/}
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Year of Study'
            name='yearofStudy'
            value={yearofStudy}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Enter 1, 2, 3, 4 suggested...</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Branch'
            name='branch'
            value={branch}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Enter CSE, IT, ECE, CIVIL, MECH, EEE suggested...
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* phone'
            name='phone'
            value={phone}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>For further details to phone</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Permanent Location</small>
        </div>
        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Review the Status of Booking
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fa fa-building fa-2x' />
              <textarea
                placeholder='Name of the Hostel'
                name='nameoftheHostel'
                disabled
              >
                {nameoftheHostel}
              </textarea>
            </div>

            <div className='form-group social-input'>
              <i className='fa fa-align-justify fa-2x' />
              <textarea placeholder='Floor Number' name='floorNumber' disabled>
                {floorNumber}
              </textarea>
            </div>

            <div className='form-group social-input'>
              <i className='fas fa-door-open fa-2x' />
              <textarea placeholder='Room Number' name='roomNumber' disabled>
                {roomNumber}
              </textarea>
            </div>

            <div className='form-group social-input'>
              <i className='fa fa-bed fa-2x' />
              <textarea placeholder='Bed Number' name='bedNumber' disabled>
                {bedNumber}
              </textarea>
            </div>

            <div className='form-group social-input'>
              <i className='fas fa-rupee-sign fa-2x' />
              <textarea placeholder='Money' name='currency' disabled>
                {cost}
              </textarea>
            </div>
          </Fragment>
        )}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

ProfilePage.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(ProfilePage));
