import { useEffect } from 'react'
import useContextWithStore from './hooks/useContextWithStore'

const Comments = ({ postId }) => {
  const { state, getComments } = useContextWithStore()

  const { comments, commentsLoading } = state?.commentsState
  const { currentPostId } = state?.postsState

  useEffect(() => {
    postId && getComments(postId)
    //eslint-disable-next-line
  }, [postId])

  return currentPostId === postId && commentsLoading ? (
    <span>Loading</span>
  ) : (
    <>
      {comments.map((comment, idx) => {
        return (
          <div key={idx}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
          </div>
        )
      })}
    </>
  )
}

export default Comments
