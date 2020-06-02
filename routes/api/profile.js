const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Create and update profile
router.post(
  '/',
  [
    auth,
    [
      check('firstName', 'First Name is required').not().isEmpty(),
      check('lastName', 'Last Name is required').not().isEmpty(),
      check('collegeName', 'CollegeName is required').not().isEmpty(),
      check('rollNo', 'RollNo is required').not().isEmpty(),
      check('yearofStudy', 'Year of Study is required').not().isEmpty(),
      check('branch', 'branch is required').not().isEmpty(),
      check('phone', 'Phone is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    /*const nameoftheHostel = hostelName;
    const floorNumber = floorNo;
    const roomNumber = roomNo;
    const bedNumber = bedNo;*/
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
    } = req.body;

    const profileyears = {};
    profileyears.user = req.user.id;
    if (firstName) profileyears.firstName = firstName;
    if (lastName) profileyears.lastName = lastName;
    if (collegeName) profileyears.collegeName = collegeName;
    if (rollNo) profileyears.rollNo = rollNo;
    if (yearofStudy) profileyears.yearofStudy = yearofStudy;
    if (branch) profileyears.branch = branch;
    if (phone) profileyears.phone = phone;
    if (location) profileyears.location = location;
    if (nameoftheHostel) profileyears.nameoftheHostel = nameoftheHostel;
    if (floorNumber) profileyears.floorNumber = floorNumber;
    if (roomNumber) profileyears.roomNumber = roomNumber;
    if (bedNumber) profileyears.roomNumber = bedNumber;
    if (cost) profileyears.cost = cost;
    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //update
        profile = await Profile.findByIdAndUpdate(
          { user: req.user.id },
          { $set: profileyears },
          { new: true }
        );
        return res.json(profile);
      }
      //create
      profile = new Profile(profileyears);
      await profile.save();
      res.json(profile);
    } catch (err) {
      //profile =new profile(profileyears)
      console.error(err.message);
      res.status(500).send({ msg: 'Server Error' });
    }
  }
);
//All profiles
/*
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', 'name');
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});*/
//Current user by user_id
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', 'name');
    if (!profile) return res.status(400).json({ msg: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});
//Delete User - Private access
router.delete('/', auth, async (req, res) => {
  try {
    //Remove Profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove User
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: ' User Deleted ' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
/*
// Education
router.put(
  '/education',
  [
    auth,
    [
      check('collegeName', 'collegeName is required').not().isEmpty(),
      check('rollNo', 'rollNo is required').not().isEmpty(),
      check('yearofStudy', 'year of Study is required').not().isEmpty(),
      check('branch', 'branch is required').not().isEmpty(),
      check('bookedStatus', 'Booked Status is required')
        .not()
        .isEmpty()
        .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { collegeName, rollNo, yearofStudy, branch, bookedStatus } = req.body;

    const newEdu = {
      collegeName,
      rollNo,
      yearofStudy,
      branch,
      bookedStatus,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/profile/education/:edu_id
// @desc     Delete education branch profile
// @access   Private

router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const foundProfile = await Profile.findOne({ user: req.user.id });
    foundProfile.education = foundProfile.education.filter(
      (edu) => edu._id.toString() !== req.params.edu_id
    );
    await foundProfile.save();
    return res.status(200).json(foundProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});
*/
module.exports = router;
