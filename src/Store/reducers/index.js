import { postsReducer } from './posts'
import { commentsReducer } from './comments'

export const combineReducers = (slices) => (state, action) => {
  return Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](state && state[prop], action),
    }),
    {}
  )
}

export const rootReducers = combineReducers({
  postsState: postsReducer,
  commentsState: commentsReducer,
})
