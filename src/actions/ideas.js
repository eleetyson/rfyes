// fetching all ideas to render on index page
// display loading state until fetch successful
export function fetchIdeas(type = 'all') {

  const options = {
    method: "GET",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({ type })
  }

  return (dispatch) => {
  dispatch({ type: 'LOADING' })
  fetch('http://localhost:3000/ideas')
    .then(response => response.json())
    .then(ideas => dispatch({ type: 'SHOW_IDEAS', payload: ideas }) )
  }

}

// fetching a single random idea
// display loading state until fetch successful
export function fetchIdea() {

  return (dispatch) => {
  dispatch({ type: 'LOADING' })
  fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(idea => dispatch({ type: 'SHOW_IDEA', payload: idea }) )
  }

}

// creating an idea (TODO)
export function addIdea(idea) {
  return {

  }
}

// clearing out ideas from state
export function resetIdeas() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
  }
}
