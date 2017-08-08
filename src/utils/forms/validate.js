const validate = values => {
  const errors = {}
    if (!values.amount) {
    errors.amount = 'Amount is required'
  } else if (!/^[0-9]+[.]*[0-9]{1,2}$/i.test(values.amount)){
    errors.amount = 'Amount is not numeric or invalid'
  }
  if (!values.title) {
    errors.title = 'Campaign title is required'
  }
  if (!values.name) {
    errors.name = 'Patient name is required'
  }


  return errors
}

export const validateRegistration = values => {
  const errors = {}
    if (!values.name) {
    errors.name = 'Full name is required'
  } 
    if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  console.log('p',values.password);
  console.log('cp',values.cpassword);
  if (values.password!==values.cpassword) {
    errors.cpassword = 'Password do not match'
  }


  return errors
}

export default validate