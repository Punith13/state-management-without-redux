import axios from 'axios'
import { GET_COMMENTS } from '../types'

const url = process.env.REACT_APP_URL

export const getComments = (postId) => async (dispatch) => {
  dispatch({
    type: GET_COMMENTS['START'],
  })
  try {
    const options = {
      url: `${url}/posts/${postId}/comments`,
      method: 'GET',
    }
    const result = await axios(options)
    dispatch({
      type: GET_COMMENTS['SUCCESS'],
      payload: result.data,
    })
  } catch (err) {
    dispatch({
      type: GET_COMMENTS['FAILURE'],
      payload: err,
    })
  }
}
