import { ReduceStore } from 'flux/utils'
import PagesAT from '../action-types/pages'
import Dispatcher from '../dispatcher'

class PagesStore extends ReduceStore {

  constructor() {
    super(Dispatcher)
  }

  getInitialState() {
    return {
      list: [],
      current: 0,
    }
  }

  reduce(state, action) {

    switch (action.type) {
      case PagesAT.ADD:
        return {
          ...state,
          list: [ ...state.list, action.page ],
        }

      case PagesAT.PREV:
        if(state.current > 0)
          return { ...state, current: state.current - 1}
        return state

      case PagesAT.NEXT:
        if(state.current < state.list.length - 1)
          return { ...state, current: state.current + 1}
        return state

      default:
        return state
    }

  }

}

export default new PagesStore()
