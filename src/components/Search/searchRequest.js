import axios from 'axios'

function buildURL(query, filters) {
  const baseURL = 'http://hn.algolia.com/api/v1/search'
  const URLWithQuery = baseURL + `?query=${query}`

  if (filters) {
    const filtersString = `&tags=(${filters.join(',')})`
    return URLWithQuery + filtersString
  }
  return URLWithQuery
}

export default function makeSearchRequest(
  query,
  addToAppState,
  toggleLoading,
  filters = null
) {
  const url = buildURL(query, filters)
  axios
    .get(url)
    .then(response => {
      addToAppState(response.data)
      toggleLoading()
    })
    .catch(error => {
      console.log(
        `There was an error obtaining the results for the query. Here is the error message:
        ${error}
      `
      )
    })
}
