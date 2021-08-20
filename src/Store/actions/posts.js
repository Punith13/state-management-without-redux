import axios from 'axios'
import { GET_POSTS, SET_CURRENT_POSTID } from '../types'

const url = process.env.REACT_APP_URL

export const getPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POSTS['START'],
  })

  const options = {
    url: `${url}/posts`,
    method: 'GET',
  }

  try {
    const result = await axios(options)
    dispatch({
      type: GET_POSTS['SUCCESS'],
      payload: result.data,
    })
  } catch (err) {
    dispatch({
      type: GET_POSTS['FAILURE'],
      payload: err,
    })
  }
}

export const setCurrentPostId = (postId) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_POSTID,
    payload: postId,
  })
}
