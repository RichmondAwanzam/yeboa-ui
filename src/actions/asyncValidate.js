import {API_URL} from '../constants/appConstants'
const validate =() => {
    new Promise(resolve => resolve)
}
const asyncValidate = (values , dispatch ) => {
 
       let type='';
       let identifier='';
       if(values.email){
            identifier=values.email;
            type="email";
       }
       if(values.msisdn){
           identifier=values.msisdn;
            type="msisdn";
       }

    return fetch(`${API_URL}/users/exist?identifier=${identifier}&type=${type}`, {
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      method: 'get'
    }).then(response => response.json())
      .then(json => {
      console.log(json);
            if(json.exist){
                throw { [type]: `That ${type} already exists` }
            }
      })
 
}



export default asyncValidate