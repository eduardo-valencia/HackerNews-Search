import React, { Component } from 'react'
import makeSearchRequest from './searchRequest'

let typeWriterTimeout

export class Search extends Component {
  state = {
    placeholder: '',
    currentQuery: ''
  }

  addCharToPlaceholder = charToAdd => {
    this.setState(prevState => {
      const { placeholder } = prevState
      return {
        ...prevState,
        placeholder: placeholder + charToAdd
      }
    })
  }

  initiateTypewriter = () => {
    const placeholderMsg = 'Start typing...'
    let placeholderIndex = 0

    typeWriterTimeout = setInterval(() => {
      this.addCharToPlaceholder(placeholderMsg.charAt(placeholderIndex))
      placeholderIndex++
    }, 50)
  }

  componentDidMount() {
    this.initiateTypewriter()
  }

  componentWillUnmount() {
    clearTimeout(typeWriterTimeout)
  }

  search() {
    const { currentQuery } = this.state
    const { addToAppState, filters, toggleLoading } = this.props
    const filtersOrNull = filters.length ? filters : null
    makeSearchRequest(currentQuery, addToAppState, toggleLoading, filtersOrNull)
  }

  handleSubmission = event => {
    const { toggleLoading } = this.props
    event.preventDefault()
    toggleLoading()
    this.search()
  }

  handleInputChange = event => {
    event.persist()
    this.setState(prevState => ({
      ...prevState,
      currentQuery: event.target.value
    }))
  }

  render() {
    const { placeholder } = this.state

    return (
      <>
        <form
          className="form-inline mt-4 mx-auto d-block"
          onSubmit={event => this.handleSubmission(event)}
        >
          <div id="search-bar" className="w-100 mt-4 shadow rounded px-3">
            <img
              src="https://img.icons8.com/ios/50/000000/search.png"
              alt="search icon"
              id="search-btn"
              className="d-inline-block mr-4"
            />
            <input
              type="text"
              name="searchQuery"
              className="d-inline-block"
              id="query"
              placeholder={placeholder}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </>
    )
  }
}

export default Search
