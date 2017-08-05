import * as types from '../constants/ActionTypes';
import merge from 'lodash/merge';

const initialState = {
  isFetching: false,
  campaign:{},
  comments:[],
  tips:[],
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

case types.RECEIVE_COMMENTS:
return {...state,comments: action.data.filter(data=> data.commentType =="COMMENT") ,tips: action.data.filter(data=> data.commentType =="TIP")}
    default:
      return state;
  }
}
