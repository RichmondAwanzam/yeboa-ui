import React from 'react'

const renderComment = ({style, input, label, type, meta: { touched, error, warning } }) => (
  <div className={`pull-left ${touched && error ? 'has-danger' :''}`} style={{ width: '85%' }}>
   
   <input {...input}  className="comment-textbox" style={touched && error ?{border:"1px solid #c00"}:{}} placeholder={label} type={type}/>
    {touched && ((error && <span style={{color:"#c00"}}>{error}</span>) || (warning && <span style={{color:"#c00"}}>{warning}</span>))}
 
  </div>

)

export default renderComment