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
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if(values.email !== values.confirmemail){
      errors.confirmemail="Emails do not match"
  }

  return errors
}

export default validate