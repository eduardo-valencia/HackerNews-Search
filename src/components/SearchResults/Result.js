import React, { Component } from 'react'
import ResultFooter from './ResultFooter'
import ResultBody from './ResultBody'

export class Comment extends Component {
  getResultFooter = () => {
    const { url, componentDisplayName } = this.props
    if (url && componentDisplayName) {
      return (
        <ResultFooter url={url} componentDisplayName={componentDisplayName} />
      )
    }
    return null
  }

  render() {
    const { title, author, secondaryInfo, text } = this.props
    return (
      <div className="my-5 result-container rounded shadow">
        <ResultBody
          title={title}
          author={author}
          secondaryInfo={secondaryInfo}
          text={text}
        />
        {this.getResultFooter()}
      </div>
    )
  }
}

export default Comment
