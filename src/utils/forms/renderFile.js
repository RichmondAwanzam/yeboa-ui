import React from 'react'

class renderFile extends React.Component {


componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if(nextProps.clicked){
    this.refs.uploader.click();
    }
}
    onClick(e){
      this.refs.uploader.click();
    }
    render() {
        return (<div onClick={this.onClick.bind(this)}>
            <input ref="uploader" {...this.props.input} style={this.props.style}  multiple type="file"/>
        </div>
        )
    }
}

export default renderFile