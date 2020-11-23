export default function ideasReducer(state = {ideas: [], loading: false}, action) {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        ideas: [...state.ideas],
        loading: true
      }

    case 'SHOW_IDEAS':
      // return

    case 'SHOW_IDEA':
      // return

    case 'ADD_IDEA':
      // return


    default:
      return state
  }
}
