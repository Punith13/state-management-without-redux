import nock from 'nock'
import { render, waitFor, screen } from '@testing-library/react'
import { Provider } from '../../Store'
import Comments from '../comments'
import { mockComments } from './config'

describe('Posts', () => {
  beforeEach(() => {
    nock('http://localhost').get('/posts/1/comments').reply(200, mockComments)
  })

  it('tests the Posts component', async () => {
    render(
      <Provider>
        <Comments postId={1} />
      </Provider>
    )

    await waitFor(() => {
      screen.getByText('First Comment')
    })
  })
})
