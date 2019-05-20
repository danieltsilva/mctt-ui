import React from 'react'
import { Tab } from 'semantic-ui-react'

import Upload from '../upload/Upload'
import ContainerIntro from '../container/ContainerIntro'
import ContainerConfig from '../container/ContainerConfig'
import ResultSegment from '../segment/ResultSegment'

const panes = [
  { menuItem: 'Markov Chain Task', render: () => <Tab.Pane attached={false}><ContainerIntro /></Tab.Pane> },
  { menuItem: 'Upload File', render: () => <Tab.Pane attached={false}><Upload /></Tab.Pane> },
  { menuItem: 'Configuration', render: () => <Tab.Pane attached={false}><ContainerConfig /></Tab.Pane> },
  { menuItem: 'Generate Text', render: () => <Tab.Pane attached={false}><ResultSegment /></Tab.Pane> },
]

const TabPointing = () => <Tab menu={{ pointing: true }} panes={panes} />

export default TabPointing