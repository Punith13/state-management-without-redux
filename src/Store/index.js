import { createContext, useReducer, useMemo, useEffect } from 'react'
import { rootReducers } from './reducers'
import * as postsActions from './actions/posts'
import * as commentsActions from './actions/comments'

export const Store = createContext()

export const Provider = (props) => {
  const [state, dispatch] = useReducer(rootReducers)

  useEffect(() => {
    dispatch({
      type: '@@INIT',
    })
    //eslint-disable-next-line
  }, [])

  const contextValue = useMemo(() => {
    return {
      state,
      ...bindActionToDispatch(postsActions, dispatch),
      ...bindActionToDispatch(commentsActions, dispatch),
    }
  }, [state, dispatch])

  return (
    <Store.Provider value={contextValue}>
      {state && props.children}
    </Store.Provider>
  )
}

export const bindActionToDispatch = (actions, dispatch) => {
  return Object.keys(actions).reduce((acc, currFn) => {
    acc[currFn] = (...args) => actions[currFn](...args)(dispatch)

    return acc
  }, {})
}

export * from './actions'
