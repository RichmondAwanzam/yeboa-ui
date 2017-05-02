import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-row">
    <label>
    <span>{label}</span>
    {type==="textarea" ? <textarea></textarea>:<input {...input} placeholder={label} type={type}/>}
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </label>
  </div>
)

export default renderField