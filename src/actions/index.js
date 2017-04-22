const API_URL="http://localhost:8888/yeboa/api/patients";
//get list of contents
export const FETCH_PATIENTS ='FETCH_PATIENTS';
export const CREATE_PATIENT ='CREATE_PATIENT';
export const SINGLE_PATIENT ='SINGLE_PATIENT';
export const DELETE_PATIENT ='DELETE_PATIENT';


export function fetchPatients(url, playlist) {
  return (dispatch, getState) => {
    const { authed } = getState();
    dispatch(requestSongs(playlist));

    return fetch(url)
      .then(response => response.json())
      .then(json => {
        let nextUrl = null;
        let futureUrl = null;
        if (json.next_href) {
          nextUrl = json.next_href;
          nextUrl += (authed.accessToken ? `&oauth_token=${authed.accessToken}` : '');
        }

        if (json.future_href) {
          futureUrl = json.future_href;
          futureUrl += (authed.accessToken ? `&oauth_token=${authed.accessToken}` : '');
        }

        const songs = json.collection
          .map(song => song.origin || song)
          .filter(song => {
            if (playlist in GENRES_MAP) {
              return song.streamable && song.kind === 'track' && song.duration < 600000;
            }

            return song.streamable && song.kind === 'track';
          });

        const normalized = normalize(songs, arrayOf(songSchema));
        const result = normalized.result.reduce((arr, songId) => {
          if (arr.indexOf(songId) === -1) {
            arr.push(songId);
          }

          return arr;
        }, []);

        dispatch(receiveSongs(normalized.entities, result, playlist, nextUrl, futureUrl));
      })
      .catch(err => { throw err; });
  };
}

export function fetchPatients(){
  const request = axios.get(`${API_URL}/posts${API_KEY}`);

  return {
    type:FETCH_POSTS,
    payload: request
  }
}
//create a content by posting redux-form fields to components
export function createPatient(props){
  const request = axios.post(`${API_URL}/posts${API_KEY}`,props);
  return {
    type: CREATE_POSTS,
    payload:request
  }
}


// get a single content by its id
export function getPatient(id){
  const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`);
  return {
    type: SINGLE_POST,
    payload:request
  }
}

//deletes a content
export function deletePatient(id){
  const request = axios.delete(`${API_URL}/posts/${id}${API_KEY}`);
  return {
    type: DELETE_CONTENT,
    payload:request
  }
}

function requestPatients(playlist) {
  return {
    type: types.REQUEST_SONGS,
    playlist,
  };
}
