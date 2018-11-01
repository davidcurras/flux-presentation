import Dispatcher from '../dispatcher'
import PagesAT from '../action-types/pages'

const PagesActions = {

  add(page) {
    Dispatcher.dispatch({
      type: PagesAT.ADD,
      page,
    })
  },

  prev() {
    Dispatcher.dispatch({ type: PagesAT.PREV, })
  },

  next() {
    Dispatcher.dispatch({ type: PagesAT.NEXT })
  },

}

export default PagesActions
