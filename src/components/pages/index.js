import { Container } from 'flux/utils'
import Pages from './view'
import PagesActions from '../../flux/actions/pages'
import PagesStore from '../../flux/stores/pages'

function getStores() {
  return [ PagesStore ]
}

function getState() {
  return {
    pages: PagesStore.getState(),
    prev: PagesActions.prev,
    next: PagesActions.next
  }
}

export default Container.createFunctional(Pages, getStores, getState)
