import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { hostelName } from '../dashboard/Cards';
import ProfilePage from '../profilepage/ProfilePage';
import {
  storeProfile2,
  storeProfile3,
  storeProfile4,
} from '../../actions/profile';

let floorNo = null;
let roomNo = null;
let bedNo = null;

const HostelFloors = ({
  auth,
  storeProfile2,
  storeProfile3,
  storeProfile4,
}) => {
  function handleClickforFloors(value) {
    if (value === 'floor1') {
      floorNo = 'Floor No 1';
      storeProfile2(floorNo);
      //alert(`Floor number is : ${floorNo}`);
    } else if (value === 'floor2') {
      floorNo = 'Floor No 2';
      storeProfile2(floorNo);
      // alert(`Floor number is : ${floorNo}`);
    } else if (value === 'floor3') {
      floorNo = 'Floor No 3';
      storeProfile2(floorNo);
      //alert(`Floor number is : ${floorNo}`);
    } else if (value === 'floor4') {
      floorNo = 'Floor No 4';
      storeProfile2(floorNo);
      // alert(`Floor number is : ${floorNo}`);
    }
  }
  function handleClickforRoomsandBeds(value1, value2) {
    if (value1 === 'r1') {
      roomNo = 'Room No 1';
      storeProfile3(roomNo);
      if (value2 === 'b1') {
        bedNo = 'Bed No 1';
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 1';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 1';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 1';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r2') {
      if (value2 === 'b1') {
        roomNo = 'Room No 2';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 2';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 2';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 2';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r3') {
      if (value2 === 'b1') {
        roomNo = 'Room No 3';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 3';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 3';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 3';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r4') {
      if (value2 === 'b1') {
        roomNo = 'Room No 4';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 4';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 4';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 4';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r5') {
      if (value2 === 'b1') {
        roomNo = 'Room No 5';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 5';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 5';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 5';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r6') {
      if (value2 === 'b1') {
        roomNo = 'Room No 6';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 6';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 6';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 6';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r7') {
      if (value2 === 'b1') {
        roomNo = 'Room No 7';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 7';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 7';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 7';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r8') {
      if (value2 === 'b1') {
        roomNo = 'Room No 8';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 8';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 8';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 8';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r9') {
      if (value2 === 'b1') {
        roomNo = 'Room No 9';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 9';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 9';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 9';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    } else if (value1 === 'r10') {
      if (value2 === 'b1') {
        roomNo = 'Room No 10';
        bedNo = 'Bed No 1';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b2') {
        roomNo = 'Room No 10';
        bedNo = 'Bed No 2';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b3') {
        roomNo = 'Room No 10';
        bedNo = 'Bed No 3';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      } else if (value2 === 'b4') {
        roomNo = 'Room No 10';
        bedNo = 'Bed No 4';
        storeProfile3(roomNo);
        storeProfile4(bedNo);
      }
    }
    /* alert(`
    Hostel Name is : ${hostelName} 
    Floor number is : ${floorNo}
    Room number is : ${roomNo} 
    Bed number is : ${bedNo}
    `);*/
  }
  return (
    <Fragment>
      <input type='checkbox' id='op'></input>
      <div className='lower'>
        <label for='op' onClick={() => handleClickforFloors('floor1')}>
          Floor 1
        </label>
      </div>
      <div className='lower'>
        <label for='op' onClick={() => handleClickforFloors('floor2')}>
          Floor 2
        </label>
      </div>
      <div className='lower'>
        <label for='op' onClick={() => handleClickforFloors('floor3')}>
          Floor 3
        </label>
      </div>
      <div className='lower'>
        <label for='op' onClick={() => handleClickforFloors('floor4')}>
          Floor 4
        </label>
      </div>
      <div className='overlay overlay-hugeinc'>
        <label for='op'></label>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 1
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r1', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r1', 'b1')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r1', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r1', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 2
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r2', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r2', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r2', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='red'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r2', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 3
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r3', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r3', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r3', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r3', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 4
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r4', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r4', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r4', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r4', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 5
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r5', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r5', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r5', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r5', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 6
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r6', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r6', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r6', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r6', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 7
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r7', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r7', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r7', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r7', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 8
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r8', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r8', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r8', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r8', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 9
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r9', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r9', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r9', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r9', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
        <div className='dropup'>
          <Button positive className='dropbtn'>
            Room 10
          </Button>
          <div className='dropup-content'>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r10', 'b1')}
                  to='/profilepage'
                >
                  Bed 1
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r10', 'b2')}
                  to='/profilepage'
                >
                  Bed 2
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r10', 'b3')}
                  to='/profilepage'
                >
                  Bed 3
                </Link>
              </pre>
            </Button>
            <Button color='black'>
              <pre>
                <Link
                  className='fa fa-bed'
                  onClick={() => handleClickforRoomsandBeds('r10', 'b4')}
                  to='/profilepage'
                >
                  Bed 4
                </Link>
              </pre>
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HostelFloors.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  storeProfile2: PropTypes.func.isRequired,
  storeProfile3: PropTypes.func.isRequired,
  storeProfile4: PropTypes.func.isRequired,
});

export { floorNo, roomNo, bedNo };

export default connect(mapStateToProps, {
  storeProfile2,
  storeProfile3,
  storeProfile4,
})(HostelFloors);
