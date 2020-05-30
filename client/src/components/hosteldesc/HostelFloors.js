import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScriptTag from 'react-script-tag';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HostelFloors = (auth) => (
  <Fragment>
    <input type='checkbox' id='op'></input>
    <div className='lower'>
      <label for='op'>click the text</label>
    </div>
    <div className='overlay overlay-hugeinc'>
      <label for='op'></label>
      <nav>
        <ul>
          <li>
            <a href='#'>Books</a>
          </li>
          <li>
            <a href='#'>Quizzes</a>
          </li>
          <li>
            <a href='#'>Snippets</a>
          </li>
          <li>
            <a href='#'>Tools</a>
          </li>
          <li>
            <a href='#'>String Functions</a>
          </li>
        </ul>
      </nav>
    </div>
  </Fragment>
);

HostelFloors.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(HostelFloors);
