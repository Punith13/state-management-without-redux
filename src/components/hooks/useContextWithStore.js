import { useContext } from 'react'
import { Store } from '../../Store'

const useContextWithStore = () => {
  return useContext(Store)
}

export default useContextWithStore
