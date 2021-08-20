import { GET_COMMENTS } from '../types'

export const defaultCommentsState = {
  comments: [],
  commentsLoading: false,
}

export const commentsReducer = (state = defaultCommentsState, action) => {
  switch (action.type) {
    case GET_COMMENTS['START']:
      return { ...state, commentsLoading: true }
    case GET_COMMENTS['SUCCESS']: {
      return {
        ...state,
        comments: action.payload,
        commentsLoading: false,
      }
    }
    case GET_COMMENTS['FAILURE']: {
      return defaultCommentsState
    }
    default:
      return state
  }
}

export default commentsReducer
