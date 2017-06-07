import { arrayOf, normalize } from 'normalizr';
import { push } from 'react-router-redux';
import * as types from '../constants/ActionTypes';

import { patientSchema } from '../constants/Schemas';
import { constructCampaignUrl,constructCampaignCommentsUrl, constructPatientConditionsUrl, getCreateCampaignUrl ,constructCampaignMediasUrl } from '../utils/PatientUtils';



export function createPatientCampaign(data) {
  console.log(data);
  return dispatch => {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('title', data.title);
    formData.append('diagnosis', data.diagnosis || "");
    formData.append('condition', data.condition || "");
    formData.append('description', data.desc || "");
    formData.append('amount', data.amount);
    formData.append('campaign_pic', data.images ? data.images[0] : null);
    return fetch(getCreateCampaignUrl(), {
      headers: new Headers({

        'Accept': 'application/json'
      }),
      method: 'post', body: formData
    }).then(response => response.json())
      .then(json => {
        console.log("i will change route");
        dispatch(push("/patients/2"));
      })
  }
}
export function uploadCampaignMedias(campaignId, data) {
  return dispatch => {
    let formData = new FormData();
    formData.append('medias', data);
    return fetch(constructCampaignMediasUrl(campaignId), {
      headers: new Headers({
        'Accept': 'application/json'
    
      }),
      method: 'post', body: formData
    }).then(response => response.json())
      .then(json => {
        console.log("i will change route");
        dispatch(push("/patients/2"));
      })
  }
}

export function postCampaignComments(text,campaignId, userId,type) {
  return dispatch => {
    let formData = new FormData();
    formData.append('text', data);
    return fetch(constructCampaignCommentsUrl(campaignId,userId,type), {
      headers: new Headers({
        'Accept': 'application/json'
    
      }),
      method: 'post', body: formData
    }).then(response => response.json())
      .then(json => {
        console.log("i will change route");
        dispatch(push("/patients/2"));
      })
  }
}



export function fetchCampaigns(campaignId) {
  return dispatch => {
    if (campaignId) {
      dispatch(requestCampaign())
    } else {
      dispatch(requestCampaigns());
    }
    return fetch(constructCampaignUrl(campaignId), {
      headers: new Headers({
        'Accept': 'application/json'
      })
    })
      .then(response => response.json())
      .then(json => {
        const normalized = normalize(json, patientSchema);
        console.log(json);
        if (campaignId) {
          dispatch(receiveCampaign(json))
        } else {
          dispatch(receiveCampaigns(json));
        }
      })
      .catch(err => { throw err; });
  };
}




export function receiveCampaign(campaign) {
  return {
    type: types.RECEIVE_CAMPAIGN,
    campaign,
  };
}

export function receiveCampaigns(campaigns) {
  return {
    type: types.RECEIVE_CAMPAIGNS,

    campaigns,
  };
}




function requestCampaign(patientId) {
  return {
    type: types.REQUEST_CAMPAIGN,
    patientId,
  };
}

function requestCampaigns() {
  return {
    type: types.REQUEST_CAMPAIGNS

  };
}
