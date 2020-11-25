// fetching all ideas to render on index page
// display loading state until fetch successful
export function fetchIdeas() {

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

// creating an idea
export function addIdea(idea) {
  return {

  }
}

// clearing out ideas from state
// for when user moves from the index to the generator
export function resetIdeas() {
  return (dispatch) => {
    dispatch({ type: 'RESET_IDEAS' })
  }
}
