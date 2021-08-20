import nock from 'nock'
import { render, waitFor, screen } from '@testing-library/react'
import { Provider } from '../../Store'
import Posts from '../posts'
import { mockPosts } from './config'

describe('Posts', () => {
  beforeEach(() => {
    nock('http://localhost').get('/posts').reply(200, mockPosts)
  })

  it('tests the Posts component', async () => {
    render(
      <Provider>
        <Posts />
      </Provider>
    )

    await waitFor(() => {
      screen.getByText('First Post')
    })
  })
})
