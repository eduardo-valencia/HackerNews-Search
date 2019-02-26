import React, { Component } from 'react'

export class ResultFooter extends Component {
  render() {
    const { url, componentDisplayName } = this.props
    return (
      <div className="result-container-footer py-3">
        <a
          href={url}
          className="btn btn-custom-secondary text-white py-3 d-block mx-auto result__button"
        >
          View {componentDisplayName}
        </a>
      </div>
    )
  }
}

export default ResultFooter
