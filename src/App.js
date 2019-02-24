import React, { Component } from 'react'
import './sass/other/main.scss'

import Search from './components/Search/Search'
import Filters from './components/Filters/Filters'
import SearchResults from './components/SearchResults/SearchResults'
import Footer from './components/Other/Footer'

class App extends Component {
  state = {
    results: [],
    loading: false,
    filters: []
  }

  addSearchResults = results => {
    this.setState(prevState => ({
      ...prevState,
      results: results.hits,
      loading: false
    }))
  }

  setFilters = filters => {
    this.setState(prevState => ({
      ...prevState,
      filters: filters
    }))
  }

  toggleLoading = () => {
    this.setState(prevState => ({
      ...prevState,
      loading: !prevState.loading
    }))
  }

  render() {
    const { results, filters, loading } = this.state
    return (
      <>
        <div className="container py-5 py-3" id="main">
          <div className="mb-5 py-5">
            <div>
              <h1 className="pageTitle d-inline">Hackerrank News </h1>
              <h1 className="pageTitle pageTitle-standout d-inline">Search</h1>
            </div>
            <h2 className="pageSubTitle">
              Quickly search through the news stories, comments, and polls.
            </h2>
          </div>
          <Search
            addToAppState={this.addSearchResults}
            filters={filters}
            toggleLoading={this.toggleLoading}
          />
          <Filters filters={filters} setFilters={this.setFilters} />
          <SearchResults searchResults={results} loading={loading} />
        </div>
        <Footer />
      </>
    )
  }
}

export default App
