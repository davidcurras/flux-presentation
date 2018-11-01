import Home from './Home'
import CommonConcept from './CommonConcept'

const componentsForPages = {
  'home': Home,
  '001-common-concept': CommonConcept,
  '002-technical-concept': null,
  '003-why-joke': null,
  '004-history': null,
  '005-architectural-history': null,
  '006-mvc': null,
  '008-mvc-problem': null,
  '009-flux-diagram': null,
  '011-flux-concepts': null,
  '010-flux-flow': null,
  '012-flux-mvc-differences': null,
  '013-example': null,
  '014-example-store': null,
  '015-example-view': null,
  '016-example-action': null,
  '017-example-dispatcher': null,
  '018-example-store': null,
  '019-example-view': null,
  '020-flux-better-mvc': null,
  'questions': null,
}

const getComponent = pageId => componentsForPages[pageId]

export default getComponent
