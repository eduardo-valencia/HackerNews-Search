import React, { Component } from 'react'

export class Filter extends Component {
  isActive = () => {
    const { filters, id } = this.props
    return filters.find(currentFilter => id === currentFilter)
  }

  toggleFilter = () => {
    const { setFilters, filters, id } = this.props
    if (this.isActive()) {
      const newFilters = filters.filter(currentFilter => id !== currentFilter)
      setFilters(newFilters)
    } else {
      const newFilters = [...filters, id]
      setFilters(newFilters)
    }
  }

  render() {
    const btnColor = this.isActive() ? 'filter-active' : 'btn-custom-secondary'
    const { name } = this.props
    return (
      <button
        className={`text-white py-2 btn ${btnColor}`}
        onClick={this.toggleFilter}
      >
        {name}
      </button>
    )
  }
}

export default Filter
