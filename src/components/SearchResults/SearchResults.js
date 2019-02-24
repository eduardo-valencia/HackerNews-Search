import React, { Component } from 'react'
import Result from './Result'

const Parser = require('html-to-react').Parser

export class SearchResults extends Component {
  makeComment = (result, index) => {
    const { author, comment_text, story_title, story_url } = result
    const htmlToReactParser = new Parser()
    const textAsReact = htmlToReactParser.parse(comment_text)
    const secondaryText = `${author} says:`

    return (
      <Result
        secondaryInfo={secondaryText}
        text={textAsReact}
        title={story_title}
        url={story_url}
        componentDisplayName="Comment"
        key={index}
      />
    )
  }

  makePoll = (result, index) => {
    const { title, author } = result
    return <Result author={author} title={title} key={index} />
  }

  makeStory = (result, index) => {
    const { title, author, url } = result
    return (
      <Result
        title={title}
        author={author}
        url={url}
        componentDisplayName="Story"
        key={index}
      />
    )
  }

  makeArticleComponent = (result, index) => {
    const typesToMethods = {
      comment: this.makeComment,
      story: this.makeStory,
      poll: this.makePoll
    }

    const type = result._tags[0]
    if (!typesToMethods.hasOwnProperty(type)) return false
    return typesToMethods[type](result, index)
  }

  getSearchResults = () => {
    const { searchResults } = this.props

    if (searchResults && searchResults.length) {
      return searchResults.map(this.makeArticleComponent)
    }
  }

  getDefaultMessage = () => {
    const { loading } = this.props
    let text = 'Loading...'
    if (!loading) {
      text = 'Start typing in the search bar to search...'
    }
    return <p className="text-center text-muted">{text}</p>
  }

  render() {
    const searchResults = this.getSearchResults() || this.getDefaultMessage()
    return <div className="my-5">{searchResults}</div>
  }
}

export default SearchResults
