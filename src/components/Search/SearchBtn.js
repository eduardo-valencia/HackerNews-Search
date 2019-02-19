import React, { Component } from 'react'
import $ from 'jquery'

export class SearchBtn extends Component {
  state = {
    leftMargin: '0px'
  }

  getLeftMarginVal = $searchBar => {
    return $searchBar.offset().left
  }

  getTopPos = $searchBar => {
    const mainTop = $('#main').offset().top
    const searchBarTop = $searchBar.offset().top

    const searchBarHalf = $searchBar.outerHeight() / 2
    const searchBtnHalf = $('#search-btn').outerHeight() / 2

    const searchBarToContainer = searchBarTop - mainTop
    const middlePos = searchBarToContainer + searchBarHalf
    return middlePos - searchBtnHalf
  }

  addLeftMargin = () => {
    const $searchBar = $('#search-bar')
    if ($searchBar.length) {
      const leftMargin = this.getLeftMarginVal($searchBar)
      const topPos = this.getTopPos($searchBar)

      if (leftMargin && topPos) {
        this.setState(prevState => ({
          ...prevState,
          leftMargin: leftMargin,
          top: topPos
        }))
      }
    }
  }

  componentDidMount() {
    this.addLeftMargin()
    $(window).resize(() => this.addLeftMargin())
  }

  render() {
    const { leftMargin, top } = this.state
    const styles = { left: leftMargin, top: top }
    return (
      <img
        src="https://img.icons8.com/ios/50/000000/search.png"
        alt="search icon"
        id="search-btn"
        style={styles}
      />
    )
  }
}

export default SearchBtn
