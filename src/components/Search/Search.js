import React, { Component } from 'react'
import SearchBtn from './SearchBtn'
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
    const size = '5em'
    const searchBarStyles = {
      height: size,
      borderRadius: size,
      border: 'none',
      backgroundColor: '#E5E5E5',
      outline: 'none',
      padding: '0.5em 1em 0.5em 4em'
    }

    return (
      <>
        <form
          className="form-inline mt-4 mx-auto d-block"
          onSubmit={event => this.handleSubmission(event)}
        >
          <input
            className="d-block mx-auto w-r-md"
            type="search"
            placeholder={placeholder}
            aria-label="Search"
            style={searchBarStyles}
            id="search-bar"
            onChange={this.handleInputChange}
          />
          <SearchBtn />
        </form>
      </>
    )
  }
}

export default Search
