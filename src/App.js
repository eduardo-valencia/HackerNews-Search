import React, { Component } from 'react'
import './sass/main.scss'

import Search from './components/Search/Search'
import Filters from './components/Filters'
import SearchResults from './components/SearchResults/SearchResults'
import Footer from './components/Footer'

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
          <h1 className="text-center">Search Hackerrank...</h1>
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
