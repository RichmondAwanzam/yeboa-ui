import { arrayOf, normalize } from 'normalizr';
import {push} from 'react-router-redux';
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

export function createPatientCampaign(data){
    return dispatch => {let formData = new FormData();
         formData.append('name', data.name);
          formData.append('title', data.title);
          formData.append('diagnosis',data.diagnosis);
          formData.append('condition',data.condition);
          formData.append('description',data.desc);
           formData.append('amount',data.amount);
         formData.append('campaign_pic', data.images[0]);
         return fetch(getCreateCampaignUrl(),{headers: new Headers({

     		                                        'Accept': 'application/json'
     	                                     }),
                                           method:'post',body:formData
           }).then(response=>response.json())
           .then(json=>{
             console.log("i will change route");
             dispatch(push("/patients/2"));
           })
    }
}

export function fetchCampaigns(campaignId) {
  return dispatch => {
    dispatch(requestPatients());
    return fetch(constructPatientUrl(campaignId),{headers: new Headers({
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




export function receivePatient(patient) {
  return {
    type: types.RECEIVE_PATIENT,
    patient,
  };
}

export function receivePatients( patients) {
  return {
    type: types.RECEIVE_PATIENTS,

    patients,
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
