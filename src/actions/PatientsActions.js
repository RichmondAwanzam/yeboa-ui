import { arrayOf, normalize } from 'normalizr';

import * as types from '../constants/ActionTypes';

import { patientSchema } from '../constants/Schemas';
import {constructPatientUrl,constructPatientConditionsUrl,getCreateCampaignUrl} from '../utils/PatientUtils';

function fetchRelatedPatients(userId, patientQuery) {
  return dispatch =>
    fetch(constructUserSongsUrl(userId))
      .then(response => response.json())
      .then(json => {
        const patients = json.filter(patients => patientQuery !== patient.query);
        const normalized = normalize(patients, arrayOf(patientSchema));
        dispatch(receiveSongs(
          normalized.entities,
          normalized.result,
          patientQuery,
          null
        ));
      })
      .catch(err => { throw err; });
}




export function receivePatients( patients) {
  return {
    type: types.RECEIVE_PATIENTS,

    patients,
  };
}


function fetchPatient(patientId) {
  return dispatch => {
    dispatch(requestPatient(patientId));
    return fetch(constructPatientUrl(patientId))
      .then(response => response.json())
      .then(json => {
        const normalized = normalize(json, patientSchema);
        dispatch(receiveSongPre(songId, normalized.entities));
      })
      .catch(err => { throw err; });
  };
}

export function createPatientCampaign(data){
  let formData = new FormData();
         formData.append('name', data.name);
          formData.append('title', data.title);
          formData.append('email',data.email);
          formData.append('description',data.desc);
         formData.append('campaign_pic', data.images[0]);

         return fetch(getCreateCampaignUrl(),{headers: new Headers({

     		                                        'Accept': 'application/json'
     	                                     }),
                                           method:'post',body:formData
           });
}

export function fetchPatients() {
  console.log("i will fetch patients");




  return dispatch => {
    dispatch(requestPatients());
    return fetch(constructPatientUrl(),{headers: new Headers({
		                                        'Accept': 'application/json'
	                                     })
      })
      .then(response => response.json())
      .then(json => {
        const normalized = normalize(json, patientSchema);
        console.log(json);
        dispatch(receivePatients(json));
        //dispatch(receiveSongPre(songId, normalized.entities));
      })
      .catch(err => { throw err; });
  };
}

function fetchPatientsConditions(patientId) {
  return dispatch =>
    fetch(constructSongCommentsUrl(patientId))
      .then(response => response.json())
      .then(json => dispatch(receivePatientsConditions(patientId, json)))
      .catch(err => { throw err; });
}

function fetchPatientData(patientId, userId, patientCondition) {
  return dispatch => {
    dispatch(fetchRelatedSongs(userId, patientCondition));
    dispatch(fetchPatientsConditions(patientId));
  };
}

export function receivePatient(entities) {
  return {
    type: types.RECEIVE_PATIENT,
    entities,
  };
}

function receivePatientsConditions(patientId, conditions) {
  return {
    type: types.RECEIVE_PATIENT_CONDITIONS,
    entities: {
      patients: {
        [patientId]: {
          conditions,
        },
      },
    },
  };
}

function receivePatientsPre(patientId, entities) {
  return dispatch => {
    const patientName = entities.patients[patientId].name;
    const userId = entities.patients[patientId].user_id;
    dispatch(receivePatient(entities));
    dispatch(receivePatients(entities, [songId], patientName, null));
    dispatch(fetchPatientData(patientId, userId, patientName));
  };
}

function requestPatient(patientId) {
  return {
    type: types.REQUEST_PATIENT,
    patientId,
  };
}

function requestPatients() {
  return {
    type: types.REQUEST_PATIENTS,

  };
}
