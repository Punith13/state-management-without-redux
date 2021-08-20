const getAPIStates = (type) => {
  return {
    START: Symbol(`${type}_START`),
    SUCCESS: Symbol(`${type}_SUCCESS`),
    FAILURE: Symbol(`${type}_FAILURE`),
  }
}

export const GET_POSTS = getAPIStates('GET_POSTS')
export const GET_COMMENTS = getAPIStates('GET_COMMENTS')
export const SET_CURRENT_POSTID = Symbol("SET_CURRENT_POSTID")