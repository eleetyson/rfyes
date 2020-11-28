export default function ideasReducer(state = {ideas: [], loading: false, message: null}, action) {
  switch(action.type) {
    case 'LOADING':
      return { ...state, ideas: [], loading: true }

    case 'SHOW_IDEAS':
      return {
        ...state,
        ideas: action.payload,
        loading: false,
        message: null
      }

    case 'SHOW_IDEA':
      return {
        ...state,
        ideas: [...state.ideas, action.payload],
        loading: false,
        message: null
      }

    case 'ADD_IDEA':
      return { ...state, message: action.payload.message }

    default:
      return state
  }
}
