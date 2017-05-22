import * as types from '../constants/ActionTypes';
import merge from 'lodash/merge';

const initialPlaylistState = {
  isFetching: false,
  items: []
};

function patient(state = initialPlaylistState, action) {
  switch (action.type) {


    case types.RECEIVE_PATIENTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.patients]

      });



    case types.REQUEST_PATIENTS:
      return Object.assign({}, state, {
        isFetching: true,

      });

    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  items: []
};

export default function patients(state = initialState, action) {
  console.log("PAtients");
  console.log(action);
  switch (action.type) {


    case types.RECEIVE_PATIENTS:

      return {...state, items: action.patients};

    case types.REQUEST_PATIENTS:

        return {...state, items: action.patients =[]};



    default:
      return state;
  }
}
