import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PatientDetailsForm from './patient-details'
import PatientHealthDetailsForm from './patient-health'
import PatientMiscellanousForm from './patient-misc'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <PatientDetailsForm onSubmit={this.nextPage}/>}
        {page === 2 && <PatientHealthDetailsForm previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <PatientMiscellanousForm previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}
WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm