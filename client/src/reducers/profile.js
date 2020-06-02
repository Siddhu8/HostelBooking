import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  STORE_PROFILE_1,
  STORE_PROFILE_2,
  STORE_PROFILE_3,
  STORE_PROFILE_4,
} from '../actions/types';

const intialState = {
  profile: null,
  loading: true,
  hostelname: '',
  floorno: '',
  roomno: '',
  bedno: '',
  error: {},
};

export default function (state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case STORE_PROFILE_1:
      return {
        ...state,
        hostelname: payload,
        loading: false,
      };
    case STORE_PROFILE_2: {
      return {
        ...state,
        floorno: payload,
        loading: false,
      };
    }
    case STORE_PROFILE_3: {
      return {
        ...state,
        roomno: payload,
        loading: false,
      };
    }
    case STORE_PROFILE_4: {
      return {
        ...state,
        bedno: payload,
        loading: false,
      };
    }
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    default:
      return state;
  }
}
