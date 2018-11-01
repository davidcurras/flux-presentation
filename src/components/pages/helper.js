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
import FluxFlow from './FluxFlow'
import FluxVsMVC from './FluxVsMVC'
import Example from './Example'
import ExampleStore1 from './ExampleStore1'
import ExampleView1 from './ExampleView1'
import ExampleAction from './ExampleAction'
import ExampleDispatcher from './ExampleDispatcher'
import ExampleStore2 from './ExampleStore2'
import ExampleView2 from './ExampleView2'
import FluxOrMVC from './FluxOrMVC'
import Thanks from './Thanks'

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
  '010-flux-flow': FluxFlow,
  '011-flux-mvc-differences': FluxVsMVC,
  '012-example': Example,
  '013-example-store': ExampleStore1,
  '014-example-view': ExampleView1,
  '015-example-action': ExampleAction,
  '016-example-dispatcher': ExampleDispatcher,
  '017-example-store': ExampleStore2,
  '018-example-view': ExampleView2,
  '019-flux-better-mvc': FluxOrMVC,
  '020-thanks': Thanks,
}

const getComponent = pageId => componentsForPages[pageId]

export default getComponent
