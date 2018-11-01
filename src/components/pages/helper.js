import Home from './Home'
import CommonConcept from './CommonConcept'
import TechnicalConcept from './TechnicalConcept'
import WhyJoke from './WhyJoke'
import History from './History'
import ArchitecturalHistory from './ArchitecturalHistory'
import MVCConcept from './MVCConcept'
import MVCProblem from './MVCProblem'
import FluxDiagram from './FluxDiagram'
import FluxConcepts from './FluxConcepts'

const componentsForPages = {
  'home': Home,
  '001-common-concept': CommonConcept,
  '002-technical-concept': TechnicalConcept,
  '003-why-joke': WhyJoke,
  '004-history': History,
  '005-architectural-history': ArchitecturalHistory,
  '006-mvc': MVCConcept,
  '007-mvc-problem': MVCProblem,
  '008-flux-diagram': FluxDiagram,
  '009-flux-concepts': FluxConcepts,
  '010-flux-flow': null,
  '011-flux-mvc-differences': null,
  '012-example': null,
  '013-example-store': null,
  '014-example-view': null,
  '015-example-action': null,
  '016-example-dispatcher': null,
  '017-example-store': null,
  '018-example-view': null,
  '019-flux-better-mvc': null,
  '020-questions': null,
}

const getComponent = pageId => componentsForPages[pageId]

export default getComponent
