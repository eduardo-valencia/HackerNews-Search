import React, { Component } from 'react'

export class ResultBody extends Component {
  getAuthorElement = key => {
    const { author } = this.props
    return (
      <h6 className="resultInfo text-uppercase" key={key}>
        {author}
      </h6>
    )
  }

  getSecondaryInformation = key => {
    const { secondaryInfo } = this.props
    return (
      <p className="resultInfo text-uppercase" key={key}>
        {secondaryInfo}
      </p>
    )
  }

  getTextElement = key => {
    const { text } = this.props
    return (
      <div className="resultText" key={key}>
        {text}
      </div>
    )
  }

  useGetterIfPropExists = (getterAndProp, key) => {
    const { getter, prop } = getterAndProp
    if (prop) return getter(key)
  }

  getOptionalValues = () => {
    const { author, secondaryInfo, text } = this.props
    const elementGettersAndRequiredProps = [
      { getter: this.getAuthorElement, prop: author },
      { getter: this.getSecondaryInformation, prop: secondaryInfo },
      { getter: this.getTextElement, prop: text }
    ]

    return elementGettersAndRequiredProps.map(this.useGetterIfPropExists)
  }

  render() {
    const { title } = this.props
    return (
      <div className="px-4 py-4">
        <h1 className="display-4 resultTitle mb-4">{title}</h1>
        {this.getOptionalValues()}
      </div>
    )
  }
}

export default ResultBody
