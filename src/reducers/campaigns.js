import * as types from '../constants/ActionTypes';
import merge from 'lodash/merge';

const initialState = {
  isFetching: false,
  campaign:null,
  campaigns: []
};

export default function patients(state = initialState, action) {
  switch (action.type) {


    case types.RECEIVE_CAMPAIGNS:

      return {...state, campaigns: action.campaigns};

    case types.REQUEST_CAMPAIGNS:

        return {...state, campaigns: action.campaigns =[]};



    default:
      return state;
  }
}
