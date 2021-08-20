import { GET_POSTS, SET_CURRENT_POSTID } from '../types'

export const defaultPostsState = {
  posts: [],
  postsLoading: false,
  currentPostId: null,
}

export const postsReducer = (state = defaultPostsState, action) => {
  switch (action.type) {
    case GET_POSTS['START']:
      return { ...state, postsLoading: true }
    case GET_POSTS['SUCCESS']:
    case GET_POSTS['FAILURE']: {
      return {
        ...state,
        posts: action.payload,
        postsLoading: false,
      }
    }
    case SET_CURRENT_POSTID: {
      return {
        ...state,
        currentPostId: action.payload,
      }
    }
    default:
      return state
  }
}

export default postsReducer
