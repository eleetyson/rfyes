export default function ideasReducer(state = {ideas: [], loading: false}, action) {
  switch(action.type) {
    case: 'LOADING'
      return {
        ...state,
        ideas: [...state.ideas],
        loading: true
      }

    case: 'ADD_IDEA'
      // return

    case: 'ADD_IDEAS'
      // return

    default:
      return state
  }
}
