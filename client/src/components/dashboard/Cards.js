import React from 'react';
import pic from './hstimg.jpeg';
import { Card, Icon, Image, CardGroup, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tables from './Tables';

const Cards = (auth) => (
  <div>
    <CardGroup className='main-head-1'>
      <Card className='media'>
        <Image src={pic} wrapped ui={false} />
        <Card.Content>
          <Card.Header>CMR Boys Hostel</Card.Header>
          <Card.Meta>
            <span className='date'>In Campus</span>
          </Card.Meta>
          <Card.Description>
            Get to know more details after booking...
          </Card.Description>
          <br></br>
          <Link basic='true' color='blue' to='/hostelfloors'>
            Book Now
          </Link>
        </Card.Content>
      </Card>
      <Card className='media'>
        <Image src={pic} wrapped ui={false} />
        <Card.Content>
          <Card.Header>CMR Boys Hostel</Card.Header>
          <Card.Meta>
            <span>Kandlakoya</span>
          </Card.Meta>
          <Card.Description>
            Get to know more details after booking...
          </Card.Description>
          <br></br>
          <Link basic='true' color='blue' to='/hostelfloors'>
            Book Now
          </Link>
        </Card.Content>
      </Card>
      <Card className='media'>
        <Image src={pic} wrapped ui={false} />
        <Card.Content>
          <Card.Header>CMR Boys Hostel</Card.Header>
          <Card.Meta>
            <span>Kompally</span>
          </Card.Meta>
          <Card.Description>
            Get to know more details after booking...
          </Card.Description>
          <br></br>
          <Link basic='true' color='blue' to='/hostelfloors'>
            Book Now
          </Link>
        </Card.Content>
      </Card>
      <Card className='media'>
        <Image src={pic} wrapped ui={false} />
        <Card.Content>
          <Card.Header>CMR Girls Hostel</Card.Header>
          <Card.Meta>
            <span className='date'>In Campus</span>
          </Card.Meta>
          <Card.Description>
            Get to know more details after booking...
          </Card.Description>
          <br></br>
          <Link basic='true' color='blue' to='/hostelfloors'>
            Book Now
          </Link>
        </Card.Content>
      </Card>
    </CardGroup>
    <br />
    <Tables />
  </div>
);
Cards.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Cards);
/*
import React, { Component } from 'react';
//import Tabls from './Tabls';
import pic from './hstimg.jpeg';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = (props) => {
  return (
    <CardDeck className='App-header'>
      <Card className='App-link'>
        <CardImg top width='70%' src={pic} alt='Card image cap' />
        <CardBody>
          <CardTitle>BLOCK-A</CardTitle>
          <CardSubtitle>College hostel</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Link>Enter</Link>
        </CardBody>
      </Card>
      <br />
      <Card className='App-link'>
        <CardImg top width='70%' src={pic} alt='Card image cap' />
        <CardBody>
          <CardTitle>BLOCK-B</CardTitle>
          <CardSubtitle>College hostel</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>
            <Link to='/Login'>Enter</Link>
          </Button>
        </CardBody>
      </Card>
      <Card className='App-link'>
        <CardImg top width='70%' src={pic} alt='Card image cap' />
        <CardBody>
          <CardTitle>BLOCK-C</CardTitle>
          <CardSubtitle>College hostel</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content.
          </CardText>
          <Button>Enter</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Cards;
*/
