import * as types from '../constants/ActionTypes';
import merge from 'lodash/merge';

const initialState = {
  isFetching: false,
  campaign:{},
  campaigns: []
};

export default function patientCampaigns(state = initialState, action) {
  switch (action.type) {


    case types.RECEIVE_CAMPAIGNS:

      return {...state, campaigns: action.campaigns};

    case types.REQUEST_CAMPAIGNS:

        return {...state, campaigns: action.campaigns =[]};

 case types.RECEIVE_CAMPAIGN:

      return {...state, campaign: action.campaign};

    case types.REQUEST_CAMPAIGN:

        return {...state, campaign: action.campaign ={}};


    default:
      return state;
  }
}
