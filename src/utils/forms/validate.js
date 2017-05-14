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

export default validate