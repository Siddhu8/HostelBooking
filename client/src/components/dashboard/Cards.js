import React from 'react';
import picgirls from './girlshostel.jpg';
import picboys1 from './incampusboys.jpg';
import picboys2 from './kandlakoya.jpeg';
import picboys3 from './kompally.jfif';
import { Card, Image, CardGroup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeProfile1 } from '../../actions/profile';
import PropTypes from 'prop-types';
import Tables from './Tables';

let hostelName = null;
let currency = null;

const Cards = ({ auth, storeProfile1 }) => {
  const handleClick = (value) => {
    if (value === 'CMRBIN') {
      hostelName = 'CMR BOYS HOSTEL In Campus';
      storeProfile1(hostelName);
      currency = '70000₹';
      // alert(`College Hostel Name is : ${hostelName}`);
    } else if (value === 'CMRBKA') {
      hostelName = 'CMR BOYS HOSTEL Kandlakoya';
      storeProfile1(hostelName);
      currency = '77500₹';
      //  alert(`College Hostel Name is : ${hostelName}`);
    } else if (value === 'CMRBKO') {
      hostelName = 'CMR BOYS HOSTEL Kompally';
      storeProfile1(hostelName);
      currency = '77500₹';
      // alert(`College Hostel Name is : ${hostelName}`);
    } else if (value === 'CMRGIN') {
      hostelName = 'CMR GIRLS HOSTEL In Campus';
      storeProfile1(hostelName);
      currency = '70000₹';
      // alert(`College Hostel Name is : ${hostelName}`);
    }
  };
  return (
    <div>
      <CardGroup className='main-head-1'>
        <Card className='media'>
          <Image src={picboys1} wrapped ui={false} />
          <Card.Content>
            <Card.Header>CMR Boys Hostel</Card.Header>
            <Card.Meta>
              <span className='date'>In Campus</span>
            </Card.Meta>
            <Card.Description>
              Get to know more details after booking...
            </Card.Description>
            <br></br>
            <Link
              basic='true'
              color='blue'
              to='/hostelfloors'
              onClick={() => handleClick('CMRBIN')}
            >
              Book Now
            </Link>
          </Card.Content>
        </Card>
        <Card className='media'>
          <Image src={picboys2} wrapped ui={false} />
          <Card.Content>
            <Card.Header>CMR Boys Hostel</Card.Header>
            <Card.Meta>
              <span>Kandlakoya</span>
            </Card.Meta>
            <Card.Description>
              Get to know more details after booking...
            </Card.Description>
            <br></br>
            <Link
              basic='true'
              color='blue'
              to='/hostelfloors'
              onClick={() => handleClick('CMRBKA')}
            >
              Book Now
            </Link>
          </Card.Content>
        </Card>
        <Card className='media'>
          <Image src={picboys3} wrapped ui={false} />
          <Card.Content>
            <Card.Header>CMR Boys Hostel</Card.Header>
            <Card.Meta>
              <span>Kompally</span>
            </Card.Meta>
            <Card.Description>
              Get to know more details after booking...
            </Card.Description>
            <br></br>
            <Link
              basic='true'
              color='blue'
              to='/hostelfloors'
              onClick={() => handleClick('CMRBKO')}
            >
              Book Now
            </Link>
          </Card.Content>
        </Card>
        <Card className='media'>
          <Image src={picgirls} wrapped ui={false} />
          <Card.Content>
            <Card.Header>CMR Girls Hostel</Card.Header>
            <Card.Meta>
              <span className='date'>In Campus</span>
            </Card.Meta>
            <Card.Description>
              Get to know more details after booking...
            </Card.Description>
            <br></br>
            <Link
              basic='true'
              color='blue'
              to='/hostelfloors'
              onClick={() => handleClick('CMRGIN')}
            >
              Book Now
            </Link>
          </Card.Content>
        </Card>
      </CardGroup>
      <br />
      <Tables />
    </div>
  );
};
Cards.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  storeProfile1: PropTypes.func.isRequired,
});

export { hostelName, currency };

export default connect(mapStateToProps, { storeProfile1 })(Cards);
