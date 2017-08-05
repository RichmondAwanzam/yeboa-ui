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


export function getCreateCampaignUrl() {
  return `${API_URL}campaign/campaign?client_id=${CLIENT_ID}`;
}

export function constructCampaignUrl(campaignId) {
  if (campaignId) {
    return `${API_URL}campaign/${campaignId}?client_id=${CLIENT_ID}`;
  }else{
    return `${API_URL}campaign/?client_id=${CLIENT_ID}`;
  }

}

export function constructCampaignMediasUrl(campaignId) {
 
    return `${API_URL}campaign/${campaignId}/medias?client_id=${CLIENT_ID}`;


}
export function constructCampaignCommentsUrl(campaignId,userId,type) {
    return `${API_URL}campaign/${campaignId}/comment/${userId}?type=${type}&client_id=${CLIENT_ID}`;
}
export function constructfetchCampaignCommentsUrl(campaignId,userId,type) {
    return `${API_URL}campaign/${campaignId}/comment?client_id=${CLIENT_ID}`;
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
