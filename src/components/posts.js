import { useEffect } from 'react'

import useContextWithStore from './hooks/useContextWithStore'
import Comments from './comments'

const Posts = () => {
  const { state, getPosts, setCurrentPostId } = useContextWithStore()

  const { posts, postsLoading, currentPostId } = state?.postsState

  useEffect(() => {
    getPosts()
    //eslint-disable-next-line
  }, [])

  return postsLoading ? (
    <span>Loading</span>
  ) : (
    posts.map((post, idx) => {
      return (
        <div key={idx}>
          <h3>{post.title}</h3>
          <p> {post.body}</p>
          <button color="primary" onClick={() => setCurrentPostId(post.id)}>
            Get Comments
          </button>
          {currentPostId === post.id && <Comments postId={post.id} />}
        </div>
      )
    })
  )
}

export default Posts
