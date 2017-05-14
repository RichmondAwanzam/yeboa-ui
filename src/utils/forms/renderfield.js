import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`form-row ${touched && error ? 'has-danger' :''}`}>
    <label>
    <span>{label}</span>
    {type==="textarea" ? <textarea style={touched && error ?{border:"1px solid #c00"}:{}}></textarea>:<input {...input} style={touched && error ?{border:"1px solid #c00"}:{}} placeholder={label} type={type}/>}
    {touched && ((error && <span style={{color:"#c00"}}>{error}</span>) || (warning && <span style={{color:"#c00"}}>{warning}</span>))}
    </label>
  </div>
)

export default renderField