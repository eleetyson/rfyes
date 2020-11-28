const URL = 'http://localhost:3000'

// fetching all ideas to render on index page
// display loading state until fetch successful
export function fetchIdeas() {

  return (dispatch) => {
  dispatch({ type: 'LOADING' })
  fetch(`${URL}/ideas`)
    .then(response => response.json())
    .then(ideas => dispatch({ type: 'SHOW_IDEAS', payload: ideas }) )
  }

}

// fetching only ideas matching matching source
export function fetchFilteredIdeas(type = 'all') {

  return (dispatch) => {
  dispatch({ type: 'LOADING' })
  fetch(`${URL}/${type}`)
    .then(response => response.json())
    .then(ideas => dispatch({ type: 'SHOW_IDEAS', payload: ideas }) )
  }

}

// fetching a single random idea
// display loading state until fetch successful
export function fetchIdea() {

  return (dispatch) => {
  dispatch({ type: 'LOADING' })
  fetch(`${URL}/`)
    .then(response => response.json())
    .then(idea => dispatch({ type: 'SHOW_IDEA', payload: idea }) )
  }

}

// creating an idea with user form submission
export function addIdea(idea) {

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({idea})
  }

  return (dispatch) => {
  fetch(`${URL}/ideas`, options)
    .then(response => response.json())
    .then(message => dispatch({ type: 'ADD_IDEA', payload: message }) )
  }

}

// clearing out state
export function resetIdeas() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
  }
}
