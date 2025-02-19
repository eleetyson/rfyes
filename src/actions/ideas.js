const URL = 'https://rfyes.herokuapp.com'

// fetching all ideas to render on index page
// display loading state until fetch successful
export function fetchIdeas() {

  return (dispatch) => {
  dispatch({ type: 'LOADING' })
  fetch(`${URL}/ideas`)
    .then(response => response.json())
    .then(ideas => dispatch({ type: 'SHOW_IDEAS', payload: ideas }) )
    .catch(err => alert("An unexpected error occurred."))
  }

}

// fetching only ideas matching matching source
export function fetchFilteredIdeas(type = 'all') {

  return (dispatch) => {
  dispatch({ type: 'LOADING' })
  fetch(`${URL}/${type}`)
    .then(response => response.json())
    .then(ideas => dispatch({ type: 'SHOW_IDEAS', payload: ideas }) )
    .catch(err => alert("An unexpected error occurred."))
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
    .catch(err => alert("An unexpected error occurred."))
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
    .catch(err => alert("An unexpected error occurred."))
  }

}

// clearing out state
export function resetIdeas() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
  }
}
