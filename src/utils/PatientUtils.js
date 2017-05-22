import moment from 'moment';
import { CLIENT_ID } from '../constants/Config';
import {  IMAGE_SIZES } from '../constants/PatientsConstants';
const API_URL='http://localhost:8888/yeboa/api/'


export function constructUrl(cat) {
  const catArr = cat.split(' - ');
  let category = catArr[0];

  let result =API_URL+"";

  return result;
}

export function constructPatientConditionsUrl(patientId) {
  return `${API_URL}/${patientId}/conditions?client_id=${CLIENT_ID}`;
}

export function getCreateCampaignUrl() {
  return `${API_URL}campaign/campaign?client_id=${CLIENT_ID}`;
}

export function constructPatientUrl(patientId) {
  if (patientId) {
    return `${API_URL}campaign/${patientId}?client_id=${CLIENT_ID}`;
  }else{
    return `${API_URL}campaign/?client_id=${CLIENT_ID}`;
  }

}

export function constructPatientHelpersUrl(patientId) {
  return `//api.soundcloud.com/users/${userId}/tracks?client_id=${CLIENT_ID}`;
}

export function fetchWaveformData(waveformUrl) {
  return fetch(waveformUrl)
    .then(response => response.json())
    .then(json => json.samples)
    .catch(err => { throw err; });
}

export function getImageUrl(s, size = null) {
  let str = s;
  if (!str) {
    return '';
  }


  str = str.replace('http:', '');

  switch (size) {
    case IMAGE_SIZES.LARGE:
      return str.replace('large', IMAGE_SIZES.LARGE);
    case IMAGE_SIZES.XLARGE:
      return str.replace('large', IMAGE_SIZES.XLARGE);
    default:
      return str;
  }
}
