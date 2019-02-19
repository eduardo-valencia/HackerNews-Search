import React, { Component } from 'react'
import Filter from './Filter'

export class Filters extends Component {
  createFilters = () => {
    const filterNames = [
      {
        id: 'story',
        name: 'Story'
      },
      {
        id: 'comment',
        name: 'Comment'
      },
      {
        id: 'poll',
        name: 'Poll'
      },
      {
        id: 'front_page',
        name: 'Front Page'
      }
    ]

    const { filters, setFilters } = this.props
    return filterNames.map(filterInfo => {
      const { id, name } = filterInfo
      return (
        <Filter
          filters={filters}
          name={name}
          id={id}
          setFilters={setFilters}
          key={`filter-${id}`}
        />
      )
    })
  }

  render() {
    return (
      <div id="filters-container">
        <div
          className="btn-group mt-3 mx-auto"
          role="group"
          aria-label="Search Filters"
          id="filters"
        >
          {this.createFilters()}
        </div>
      </div>
    )
  }
}

export default Filters
